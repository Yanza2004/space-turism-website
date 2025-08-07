import "../../Styles/crew.module.css";
import { useEffect, useState } from "react";
import { crew } from "../../data.json";
import Styles from "../../Styles/crew.module.css";
import CircleMenu from "../CircleMenu";
import DouglasHurley from "../../assets/crew/image-douglas-hurley.webp";
import MarkShuttleworth from "../../assets/crew/image-mark-shuttleworth.webp";
import VictorGlover from "../../assets/crew/image-victor-glover.webp";
import AnoushehAnsari from "../../assets/crew/image-anousheh-ansari.webp";

function Crew() {
  const imgs = {
    "Douglas Hurley": DouglasHurley,
    "Mark Shuttleworth": MarkShuttleworth,
    "Victor Glover": VictorGlover,
    "Anousheh Ansari": AnoushehAnsari,
  };

  const [currentWorker, setCurrentWorker] = useState({});
  const [currentImg, setCurrentImg] = useState(null);

  useEffect(() => {
    setCurrentWorker(crew[0]);
    setCurrentImg(imgs[crew[0].name]);
  }, []);

  const setStateImg = (nameImage) => {
    setCurrentImg(imgs[nameImage]);
  };
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.section}>
        <div className="content-title">
          <span className="icon-destination">02</span>
          <span className="title-destination">MEET YOUR CREW</span>
        </div>
      </div>
      <div className={Styles.card}>
        <div className={Styles.textContent}>
          <span className={Styles.role}>{currentWorker.role}</span>
          <span className={Styles.name}>{currentWorker.name}</span>
          <span className={Styles.bio}>{currentWorker.bio}</span>
          <div className={Styles.nav}>
            {crew.map((w, i) => {
              return (
                <CircleMenu
                  key={i}
                  data={w}
                  state={currentWorker}
                  setState={setCurrentWorker}
                  setStateImg={setStateImg}
                />
              );
            })}
          </div>
        </div>
        <div>
          <img src={currentImg} alt={currentImg} />
        </div>
      </div>
    </div>
  );
}

export default Crew;
