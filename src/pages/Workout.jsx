import { useContext } from "react";
import { WorkoutContext } from "../contexts/WorkoutContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Workout() {
    const { data, setData } = useContext(WorkoutContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const workout = data.find((w) => w.id == id);
    const {
        register,
        handleSubmit,
        watch
    } = useForm({
        defaultValues: {
            image: workout.image,
            name: workout.name,
            coach: workout.coach,
            description: workout.description,
            excercises: workout.excercises,
            instructions: workout.instructions,
            category: workout.category,
        }
    });
    const image = watch("image");

    const onError = (formErrors) => {
        const error = Object.values(formErrors)[0];
        if (error?.message) {
            toast.error(error.message);
        };
    };

    const onSubmit = (updatedWorkout) => {
        const index = data.findIndex((w) => w.id == id);
        const copyData = [...data];

        copyData[index] = { ...copyData[index], ...updatedWorkout };
        setData(copyData);

        localStorage.setItem("workouts", JSON.stringify(copyData));
        toast.success("Your workout is updated successfully!");
    };

    const onDelete = () => {
        const confirmDelete = window.confirm("Are you sure to Delete this workout?");

        if (confirmDelete) {
            const filteredWorkout = data.filter((w) => w.id != id);

            setData(filteredWorkout);

            localStorage.setItem("workouts", JSON.stringify(filteredWorkout));

            toast.success("Workout is deleted successfully!");
            navigate("/");  
        };

        return;
    };

    return (
        <>
            <div className="m-8 sm:m-32 flex flex-col lg:flex-row gap-12 lg:justify-between">
                <div className="p-8 sm:p-16 bg-blue-500 text-white rounded-2xl lg:w-1/2">
                    <div className="flex justify-center bg-gray-500 rounded-2xl p-4">
                        <img
                            src={workout.image}
                            alt="Workout image"
                            className="h-40 rounded-2xl"
                        />
                    </div>
                    <p className="text-2xl py-4">Name : {workout.name}</p>
                    <p className="text-2xl pb-4"><strong>Coach : {workout.coach}</strong></p>
                    <div className="pb-4">
                        <h1 className="text-2xl">Description :</h1>
                        <p>{workout.description}</p>
                    </div>
                    <div className="pb-4">
                        <h1 className="text-2xl">Excercises :</h1>
                        <p>{workout.excercises}</p>
                    </div>
                    <div className="pb-4">
                        <h1 className="text-2xl">Instructions :</h1>
                        <p>{workout.instructions}</p>
                    </div>
                    <small className="text-2xl">Category : {workout.category}</small>
                    <div className="text-right pt-4">
                        <button
                            onClick={onDelete}
                            className="bg-red-500 px-4 py-2 rounded-lg cursor-pointer hover:scale-[95%]"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit(onSubmit, onError)} className="px-8 py-16 rounded-2xl bg-blue-500 text-white" >
                        <h1 className="text-4xl">Update workout :-</h1>
                        <div className="py-8">
                        <label htmlFor="image" className="text-2xl">Image :</label>
                        <input
                            type="url"
                            name="image"
                            id="image"
                            {...register("image", {
                                required:"Image is required"   
                            })}
                            className="w-full outline-0 bg-gray-500 px-4 py-2 rounded-2xl"
                        />
                        <div>
                            {image ? (
                                <div className="flex justify-center bg-gray-500 rounded-2xl mt-4 p-4">
                                    <img
                                        src={image}
                                        alt="Workout image"
                                        className="h-40 rounded-2xl"
                                    />
                                </div>
                                ) : (
                                <div className="flex h-40 justify-center bg-gray-500 rounded-2xl mt-4">
                                    <h1 className="pt-4">Preview</h1>
                                </div>
                            )}
                        </div>
                    </div>
                        <div className="pb-4">
                            <label htmlFor="name" className="text-2xl">Name : </label>
                            <input
                                type="text"
                                {...register("name", {
                                    required: "Name is required",
                                    minLength: {
                                    value: 3,
                                    message: "Name must be at least 3 characters",
                                },
                                    maxLength: {
                                    value: 30,
                                    message: "Name cannot exceed 30 characters",
                                }})}
                                className="w-full outline-0 bg-gray-500 px-4 py-2 rounded-2xl"
                            />
                        </div>
                        <div className="pb-4">
                            <label htmlFor="coach" className="text-2xl">Coach : </label>
                            <input
                                type="text"
                                {...register("coach", {
                                    required: "Coach name is required",
                                    minLength: {
                                    value: 3,
                                    message: "Coach name must be at least 3 characters",
                                },
                                    maxLength: {
                                    value: 30,
                                    message: "Coach name cannot exceed 30 characters",
                                }})}
                                className="w-full outline-0 bg-gray-500 px-4 py-2 rounded-2xl"
                            />
                        </div>
                        <div className="pb-4">
                            <label htmlFor="description" className="text-2xl">Description : </label>
                            <textarea
                                name="description"
                                id="description"
                                {...register("description", {
                                    required: "Description is required",
                                    minLength: {
                                    value: 30,
                                    message: "Description must be at least 30 characters",
                                },
                                    maxLength: {
                                    value: 300,
                                    message: "Description cannot exceed 60 characters",
                                }})}
                                className="w-full outline-0 bg-gray-500 px-4 py-2 rounded-2xl"
                            ></textarea>
                        </div>
                        <div className="pb-4">
                            <label htmlFor="excercises" className="text-2xl">Excercises : </label>
                            <textarea
                                name="excercises"
                                id="excercises"
                                {...register("excercises", {
                                    required: "Excercises are required",
                                    minLength: {
                                    value: 30,
                                    message: "Excercises must be at least 30 characters",
                                },
                                maxLength: {
                                    value: 300,
                                    message: "Excercises cannot exceed 60 characters",
                                }})}
                                className="w-full outline-0 bg-gray-500 px-4 py-2 rounded-2xl"
                            ></textarea>
                        </div>
                        <div className="pb-4">
                            <label htmlFor="instructions" className="text-2xl">Instructions : </label>
                            <textarea
                                name="instructions"
                                id="instructions"
                                {...register("instructions", {
                                    required: "Instructions are required",
                                    minLength: {
                                    value: 30,
                                    message: "Instructions must be at least 30 characters",
                                },
                                    maxLength: {
                                    value: 300,
                                    message: "Instructions cannot exceed 60 characters",
                                }})}
                                className="w-full outline-0 bg-gray-500 px-4 py-2 rounded-2xl"
                            ></textarea>
                        </div>
                        <div className="pb-8 text-center">
                            <select
                                name="category"
                                id="category"
                                {...register("category", { "required": "Category is required" })}
                                className="bg-gray-500 px-4 py-2 rounded-2xl"
                            >
                                <option value="">Select category</option>
                                <option value="Strength">Strength</option>
                                <option value="Cardio">Cardio</option>
                                <option value="Flexibility">Flexibility</option>
                                <option value="HIIT">HIIT</option>
                                <option value="Mobility">Mobility</option>
                            </select>
                        </div>
                        <div className="text-right">
                            <button className="bg-green-500 px-4 py-2 rounded-lg cursor-pointer hover:scale-[95%]">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Workout;