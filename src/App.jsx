import { Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Workout from "./pages/Workout";
import NotFound from "./pages/NotFound";
import Workouts from "./pages/Workouts";

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Workouts/>} />
          <Route path="/workouts/:id" element={<Workout/>} />
          <Route path="/workouts/create" element={<Create/>} />

          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;