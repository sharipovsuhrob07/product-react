import "./Hero.scss";
import VideoIcon from "../../img/hero_video_icon.svg";
import HeroImg from "../../img/hero.svg";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="container hero__container">
          <div className="hero__content">
            <h1 className="hero__content_title">
              Work at the speed of thought
            </h1>
            <p className="hero__content_text">
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <div className="hero__buttons">
              <a className="hero__firs_button" href="#">
                Get started
              </a>

              <div className="hero__second_button_box">
                <a href="#">
                  <img src={VideoIcon} alt="icon" />
                </a>
                <a className="hero__second_buttton" href="#">
                  Watch the Video
                </a>
              </div>
            </div>
          </div>
          <img src={HeroImg} alt="img" />
        </div>
      </div>
    </>
  );
}

export default Hero;
