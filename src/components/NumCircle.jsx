import "../Styles/technology.module.css";
import Style from "../Styles/technology.module.css";
function NumCircle({ id, data, state, setState, setStateImg }) {
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
      >
        {id}
      </div>
    </div>
  );
}

export default NumCircle;
