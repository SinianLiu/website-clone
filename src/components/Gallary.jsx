import '../styles/Gallary.css';

const tokenImg =
  'https://framerusercontent.com/images/zrh9kSWXaKcO7lUaSip2SW6KdP4.png?scale-down-to=512';
const cubeImag =
  'https://framerusercontent.com/images/QBkCPoeejpECqrXOviZdvDrmKws.png?scale-down-to=512';

const Header = () => {
  return (
    <div className="headerSection">
      <div className="titleBox">Tokenomics</div>
      <h1 className="mainTitle">
        Shared Economy for <br /> AI Computation
      </h1>
    </div>
  );
};

const PicCard = ({ img, text }) => {
  return (
    <div className="card">
      <div className="cardBox">
        <img src={img} alt={text} />
        <div className="cardText">{text}</div>
      </div>
    </div>
  );
};

const Gallary = () => {
  return (
    <div className="container">
      <Header />
      <div className="flexBox">
        <PicCard img={tokenImg} text="Token Utility" />
        <PicCard img={cubeImag} text="Staking Rewards" />
      </div>
    </div>
  );
};

export default Gallary;
