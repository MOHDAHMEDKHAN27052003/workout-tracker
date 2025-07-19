import { useContext } from "react";
import { WorkoutContext } from "../contexts/WorkoutContext";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Create() {
    const { data, setData } = useContext(WorkoutContext);
    const { register, handleSubmit, watch } = useForm();
    const image = watch("image");
    const navigate = useNavigate();

    const onError = (formErrors) => {
        const error = Object.values(formErrors)[0];
        if (error?.message) {
            toast.error(error.message);
        };
    };

    const onSubmit = (workout) => {
        workout.id = nanoid();

        const copyData = [...data, workout];
        setData(copyData);
        localStorage.setItem("workouts", JSON.stringify(copyData));
        toast.success("Workout added successfully!");
        navigate("/");
    };

    return (
        <>
            <div className="flex justify-center px-8 py-12 md:py-20">
                <form onSubmit={handleSubmit(onSubmit, onError)} className="px-8 py-16 rounded-2xl bg-blue-500 text-white" >
                    <h1 className="text-4xl">Add workout</h1>
                    <div className="py-8">
                        <label htmlFor="image" className="text-2xl">Image URL :</label>
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
                                },
                            })}
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
                                },
                            })}
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
                                },
                            })}
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
                                },
                            })}
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
                                },
                            })}
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
                        <button className="bg-green-500 px-4 py-2 rounded-lg cursor-pointer hover:scale-[95%]">Save</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Create;