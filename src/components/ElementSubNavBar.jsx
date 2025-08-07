import "../Styles/SubNavBar.css";

function ElementSubNavBar({ data, state, setState, selectImg }) {
  return (
    <div
      className="element-navbar"
      onClick={() => {
        setState(data);
        selectImg(data.name);
      }}
    >
      <div
        className={`nav-element ${state.name === data.name ? "active" : ""}`}
      >
        <span className="name">{data.name}</span>
      </div>
    </div>
  );
}

export default ElementSubNavBar;
