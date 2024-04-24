import LightningIcon from '../assets/LightingIcon.svg';
import WallectIcon from '../assets/WalletIcon.svg';
import RankIcon from '../assets/RankIcon.svg';
import DiskIcon from '../assets/DiskIcon.svg';
import RightArrowWhite from '../assets/RightArrowWhite.svg';
import RightArrowGrey from '../assets/RightArrowGrey.svg';
import '../styles/Features.css';

const FeatureCard = ({ title, text, icon }) => {
  return (
    <div className="featureBlock">
      <img src={icon} className="featureIcon" alt="iconLogo" />
      <h3 className="featureTitle">{title}</h3>
      <p className="featureText">{text}</p>
      <a
        href="#learn-more"
        className="featureButton"
        onMouseOver={(e) => (e.currentTarget.children[0].src = RightArrowGrey)}
        onMouseOut={(e) => (e.currentTarget.children[0].src = RightArrowWhite)}>
        Learn more
        <img
          className="text-button-style"
          src={RightArrowWhite}
          alt="RightArrow"
        />
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <div className="headerSection">
      <div className="titleBox">
        Optimization Protocol for AI Computation Network
      </div>
      <h1 className="mainTitleText">Building LLM Faster And Cheaper</h1>
    </div>
  );
};

const Features = () => {
  return (
    <div>
      <Header />
      <div className="featureSection">
        <FeatureCard
          icon={LightningIcon}
          title="Fast Training Speed"
          text="Comparing to fast_attention, we can achieve 30% more training speed during fine tune."
        />
        <FeatureCard
          icon={WallectIcon}
          title="Lower Batch Inference Cost"
          text="Lorem ipsum dolor sie dolorum, ipsum in voluptatibus laborum fugiat illum hic blanditiis enim nam?"
        />
        <FeatureCard
          icon={RankIcon}
          title="Higher GPU Utilization"
          text="We can help GPU cloud provider increase GPU utilization up to 30%"
        />
        <FeatureCard
          icon={DiskIcon}
          title="GenAI Running on Consumer Grade GPU"
          text="We can inference llama2 70B 32 bit LLM on 8*Nvidia3090"
        />
      </div>
    </div>
  );
};

export default Features;
