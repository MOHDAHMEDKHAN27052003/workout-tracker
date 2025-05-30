import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Workout from "./pages/Workout";
import Workouts from "./pages/Workouts";
import Update from "./pages/Update";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
      <div>
        <Nav />
        <Routes>
          {/* workout routes */}
          <Route path="/workouts" element={<Workouts/>} />
          <Route path="/workouts/:id" element={<Workout/>} />
          <Route path="/workouts/create" element={<Create/>} />
          <Route path="/workouts/update/:id" element={<Update/>} />
          
          {/* index routes */}
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/favorites" element={<Favorites/>} />

          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;