import { Link } from "react-router-dom";
import "../Styles/navBar.css";

function ElementNavBar({ data, state, setState }) {
  return (
    <Link
      to={data.ref}
      className="element-navbar"
      onClick={() => {
        setState(data.name);
      }}
    >
      <div className={`nav-element ${state === data.name ? "active" : ""}`}>
        <span className="icon">{data.icon}</span>
        <span className="name">{data.name}</span>
      </div>
    </Link>
  );
}

export default ElementNavBar;
