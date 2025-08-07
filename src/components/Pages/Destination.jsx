import "../../Styles/destination.css";
import { destinations } from "../../data.json";
import { useState, useEffect, use } from "react";
import moom from "../../assets/destination/image-moon.webp";
import mars from "../../assets/destination/image-mars.webp";
import europa from "../../assets/destination/image-europa.webp";
import titan from "../../assets/destination/image-titan.webp";
import ElementSubNavBar from "../ElementSubNavBar";

function Destination() {
  const imgs = {
    Moon: moom,
    Mars: mars,
    Europa: europa,
    Titan: titan,
  };

  const [currentDestination, setCurrentDestination] = useState({});
  const [currentImg, setCurrentImg] = useState(null);
  useEffect(() => {
    const setDefaultValues = () => {
      setCurrentDestination(destinations[0]);
      setCurrentImg(imgs[destinations[0].name]);
    };
    setDefaultValues();
  }, []);

  const selectImg = (destinationName) => {
    setCurrentImg(imgs[destinationName]);
  };

  return (
    <div className="main-containers">
      <div className="destination-container">
        <div className="picture-title-content">
          <div className="content-title">
            <span className="icon-destination">01</span>
            <h1 className="title-destination">PICK YOUR DESTINATION</h1>
          </div>

          <img src={currentImg} alt={currentDestination} />
        </div>

        <div className="text-container">
          <div className="destination-header">
            {destinations.map((d, i) => {
              return (
                <ElementSubNavBar
                  key={i}
                  data={d}
                  state={currentDestination}
                  setState={setCurrentDestination}
                  selectImg={selectImg}
                />
              );
            })}
          </div>
          <div className="name-destination">{currentDestination.name}</div>
          <p className="description">{currentDestination.description}</p>
          <hr />
          <div className="distance-time-container">
            <div className="distance">
              <span className="distance-title">AVG.DISTANCE</span>
              <span className="distance-content">
                {" "}
                {currentDestination.distance}
              </span>
            </div>
            <div className="time">
              <span className="distance-title">EST.TRAVEL TIME</span>
              <span className="distance-content">
                {currentDestination.travel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
