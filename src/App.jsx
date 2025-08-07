import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import NavBar from "./components/NavBar";
import Destination from "./components/Pages/Destination";
import Crew from "./components/Pages/Crew";
import NotFound from "./components/Pages/NotFound";
import Technology from "./components/Pages/Technology";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
