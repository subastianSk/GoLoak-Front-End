import React from "react";
import bangkit from "../../assets/Companies/bangkit.png";
import goto from "../../assets/Companies/goto.png";
import google from "../../assets/Companies/google.png";
import traveloka from "../../assets/Companies/traveloka.png";
import HeroComp from "../util/HeroComp";
const WorkedWithComp = () => {
  return (
    <div className="workedWith__Section">
      <div className="tileHead">
        <h1>Patnership</h1>
      </div>
      <div className="brandsLogos">
        <div
          className="brandsName__Container3DH"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h1>GoLoak</h1>
          {/* <img src={ICoordinateLogo} alt="ICoordinateLogo" /> */}
        </div>
        <div
          className="brandsName__Container"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <h1>Greenpeace</h1>
        </div>
        <div
          className="brandsImg2__Container"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <img src={bangkit} alt="Bangkit" />
        </div>
        <div
          className="brandsImg3__Container"
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          <img src={goto} alt="Goto" />
        </div>

        <div
          className="brandsImg2__Container"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <img src={google} alt="Google" />
        </div>
        <div
          className="brandsImg2__Container"
          data-aos="zoom-in"
          data-aos-delay="900"
        >
          <img src={traveloka} alt="Traveloka" />
        </div>
      </div>
    </div>
  );
};

export default WorkedWithComp;
