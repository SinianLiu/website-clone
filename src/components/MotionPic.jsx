import '../styles/MotionPic.css';

const backgroundMotionPic =
  'https://my.spline.design/particleplanet-268290e7b4334cea9920bd2cba3f16e5/';

const MotionPic = () => {
  return (
    <iframe
      src={backgroundMotionPic}
      className="background"
      title="Motion Picture"
    />
  );
};

export default MotionPic;
