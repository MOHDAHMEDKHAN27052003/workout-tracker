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
          <Route path="/workout/:id" element={<Workout/>} />
          <Route path="/workout/workouts" element={<Workouts/>} />
          <Route path="/workout/create" element={<Create/>} />
          <Route path="/workout/update/:id" element={<Update/>} />
          
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