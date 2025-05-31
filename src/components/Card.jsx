import { Link } from "react-router-dom";

function Card(props) {
    const { id, image, name, coach, description } = props.workout;

    return (
        <>
            <div className="bg-blue-500 text-white px-8 py-16 mb-4 rounded-2xl text-center">
                <Link to={`/workouts/${id}`}>
                    <div className="flex justify-center bg-gray-500 rounded-2xl py-4">
                        <img src={image} alt="Workout image" className="h-24" />
                    </div>
                    <h1 className="text-2xl pt-8">{name}</h1>
                    <h1 className="py-2"><strong>{coach}</strong></h1>
                    <p>
                        {description.substr(0, 100)}...
                        <small className="text-gray-500">more</small>
                    </p>
                </Link>
            </div>
        </>
    );
};

export default Card;