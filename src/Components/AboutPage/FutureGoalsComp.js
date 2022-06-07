import React from "react";
import Lottie from "react-lottie";
import FooterHandImg from "../../assets/mockup1.png";
import { useMediaQuery } from "react-responsive";
import MeAnim from "../../assets/MeIcon.json";

const FutureGoalsComp = () => {
  const meGif = useMediaQuery({
    query: "(max-device-width: 768px)"
  });
  //used to render lottie animations
  const defaultOptionsRandom = {
    loop: true,
    autoplay: true,
    animationData: MeAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="futureGoals__Section">
      <div className="futureHead">
        <h1>Future Goals</h1>
      </div>
      <div className="boxes">
        {" "}
        <div
          className="leftSide"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          <ul>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </h3>
          </ul>
        </div>
        <div
          className="rightSide"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="700"
        >
          <div className="footer__ImgContainer">
            <img
              data-aos="fade-up"
              data-aos-once="false"
              data-aos-delay="500"
              src={FooterHandImg}
              alt="FooterHandImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureGoalsComp;
