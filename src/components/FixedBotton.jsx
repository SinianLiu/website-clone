import BottonLogo from '../assets/BottonLogo.svg';
import '../styles/FixedBotton.css';

const FixedBotton = () => {
  return (
    <div>
      <a
        href="https://www.framer.com/?utm_campaign=freeplanbadge&utm_source=https%3A%2F%2Fdragonlayer.framer.website"
        target="_blank"
        rel="noreferrer">
        <button className="fix-button">
          <img src={BottonLogo} alt="BottonLogo" />
          Made in Framer
        </button>
      </a>
    </div>
  );
};

export default FixedBotton;
