import { useContext, useRef, useState } from "react";
import { WorkoutContext } from "../contexts/WorkoutContext";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Create() {
    const { data, setData } = useContext(WorkoutContext);
    const { register, handleSubmit, reset } = useForm();
    const [imageData, setImageData] = useState(null);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImageData(reader.result);
            };

            reader.readAsDataURL(file);
        };
    };

    const onError = (formErrors) => {
        const error = Object.values(formErrors)[0];
        if (error?.message) {
            toast.error(error.message);
        };
    };

    const onSubmit = (workout) => {
        if (!imageData) {
            toast.error("Image is required");
            return;
        };

        workout.id = nanoid();
        workout.image = imageData;

        const copyData = [...data, workout];
        setData(copyData);
        localStorage.setItem("workouts", JSON.stringify(copyData));
        toast.success("Workout added successfully!");
        reset();
        setImageData(null);
        navigate("/workouts");
    };

    return (
        <>
            <div className="flex justify-center">
                <form onSubmit={handleSubmit(onSubmit, onError)} className="mx-4 my-8 px-8  py-16 rounded-2xl bg-blue-500 text-white" >
                    <h1 className="text-4xl">Add workout :-</h1>
                    <div className="py-8">
                        <div className="flex justify-center my-4 py-4 h-40 bg-gray-500 rounded-[50%]">
                            {imageData ? (
                                <div>
                                    <img src={imageData} alt="Preview" className="h-32" />
                                </div>
                                ) : (
                                <div className="flex items-center">
                                    <h1>Preview</h1>
                                </div>
                            )}
                        </div>
                        <div className="flex justify-center">
                            <input
                                type="button"
                                value="Upload Image"
                                onClick={() => fileInputRef.current.click()}
                                className="bg-gray-500 px-4 py-2 rounded-lg cursor-pointer hover:scale-[95%]" />
                        </div>
                        <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
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
                                <option value="strength">Strength</option>
                                <option value="cardio">Cardio</option>
                                <option value="flexibility">Flexibility</option>
                                <option value="hiit">HIIT</option>
                                <option value="mobility">Mobility</option>
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