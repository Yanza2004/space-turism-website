import { useEffect, useState } from "react";
import "../../Styles/technology.module.css";
import Style from "../../Styles/technology.module.css";
import { technology } from "../../data.json";
import LaunchVehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../../assets/technology/image-spaceport-portrait.jpg";
import SpaceCapsule from "../../assets/technology/image-space-capsule-portrait.jpg";
import NumCircle from "../NumCircle";

function Technology() {
  const imgs = {
    "Launch vehicle": LaunchVehicle,
    Spaceport: spaceport,
    "Space capsule": SpaceCapsule,
  };
  const [curretTechnology, setCurrentTechnology] = useState({});
  const [currentImg, setCurrentImg] = useState(null);

  useEffect(() => {
    setCurrentTechnology(technology[0]);
    setCurrentImg(imgs[technology[0].name]);
  }, []);

  const setStateImg = (nameImg) => {
    setCurrentImg(imgs[nameImg]);
  };
  return (
    <div className={Style.mainContainer}>
      <div className={Style.section}>
        <div className="content-title">
          <span className="icon-destination">03</span>
          <span className="title-destination">SPACE LAUNCH 101</span>
        </div>
      </div>
      <div className={Style.card}>
        <div className={Style.textContent}>
          <div className={Style.nav}>
            {technology.map((t, i) => {
              return (
                <NumCircle
                  key={i}
                  id={i + 1}
                  data={t}
                  state={curretTechnology}
                  setState={setCurrentTechnology}
                  setStateImg={setStateImg}
                />
              );
            })}
          </div>
          <div className={Style.descriptionContainer}>
            <span className={Style.title}>The terminology...</span>
            <span className={Style.name}>{curretTechnology.name}</span>
            <span className={Style.description}>
              {curretTechnology.description}
            </span>
          </div>
        </div>
        <div className={Style.image}>
          <img src={currentImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Technology;
