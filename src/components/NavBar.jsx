import ElementNavBar from "./ElementNavBar.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import "../Styles/navBar.css";
function NavBar() {
  const [currentPage, setCurrentPage] = useState("");
  const localition = useLocation();
  useEffect(() => {
    const path = localition.pathname;
    if (path === "/") {
      setCurrentPage("Home");
    } else if (path.includes("destination")) {
      setCurrentPage("Destination");
    } else if (path.includes("crew")) {
      setCurrentPage("crew");
    } else if (path.includes("technology")) {
      setCurrentPage("technology");
    }
  }, []);

  const home = {
    name: "Home",
    icon: "00",
    ref: "/",
  };
  const destination = {
    name: "Destination",
    icon: "01",
    ref: "/destination",
  };

  const crew = {
    name: "Crew",
    icon: "02",
    ref: "/crew",
  };
  const technology = {
    name: "Technology",
    icon: "03",
    ref: "/technology",
  };

  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={logo} alt="logo.svg" />
      </div>
      <div className="nav-elements-container">
        <div className="bar-betwen"></div>
        <ElementNavBar
          data={home}
          state={currentPage}
          setState={setCurrentPage}
        />
        <ElementNavBar
          data={destination}
          state={currentPage}
          setState={setCurrentPage}
        />
        <ElementNavBar
          data={crew}
          state={currentPage}
          setState={setCurrentPage}
        />
        <ElementNavBar
          data={technology}
          state={currentPage}
          setState={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default NavBar;
