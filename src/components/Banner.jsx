import '../styles/Banner.css';
import RightArrowWhite from '../assets/RightArrowWhite.svg';
import RightArrowGrey from '../assets/RightArrowGrey.svg';

const leftImage =
  'https://framerusercontent.com/images/fTvRR9UO6UHLEJxbKleRMkrgzgo.png?scale-down-to=512';
const rightImage =
  'https://framerusercontent.com/images/F95XtBuIu9yRJpVFOQe6khYgo.png?scale-down-to=512';

const Title1 = () => {
  return (
    <div className="textContainer1">
      <h1 className="textStyle1">Road Map</h1>
    </div>
  );
};

const Title2 = () => {
  return (
    <div className="textContainer2">
      <h1 className="textStyle2">Sign up for free today</h1>
      <div>
        <button className="button1">
          <a href="https://login.framer.com/?origin=framer-web&redirect=https%3A%2F%2Fframer.com%2Fprojects%2Fnew%3Fduplicate%3D5jiyd8WpQnxSyjuJ5DQb%26utm_campaign%3Dsaas_kit">
            Get Started
          </a>
        </button>
        <button
          className="button2"
          onMouseOver={(e) =>
            (e.currentTarget.children[0].src = RightArrowGrey)
          }
          onMouseOut={(e) =>
            (e.currentTarget.children[0].src = RightArrowWhite)
          }>
          Learn More
          <img
            className="button-style"
            src={RightArrowWhite}
            alt="RightArrow"
          />
        </button>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <img className="bannerImageLeft" src={leftImage} alt="Left" />
      <Title1 />
      <Title2 />
      <img className="bannerImageRight" src={rightImage} alt="Right" />
    </div>
  );
};

export default Banner;
