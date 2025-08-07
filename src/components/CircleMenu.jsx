import "../Styles/crew.module.css";
import Style from "../Styles/crew.module.css";
function CircleMenu({ data, state, setState, setStateImg }) {
  return (
    <div
      className="element-navbar"
      onClick={() => {
        setState(data);
        setStateImg(data.name);
      }}
    >
      <div
        className={`${Style.navElement} ${
          state.name === data.name ? Style.active : ""
        }`}
      ></div>
    </div>
  );
}

export default CircleMenu;
