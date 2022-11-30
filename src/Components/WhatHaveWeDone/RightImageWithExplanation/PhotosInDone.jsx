import './rightImageWithExplanation.css';

const PhotosInDone = (props) => {
  const { images } = props;

  return (
    <div className="composition">
      {images.map((imageSrc, index) => (
        <img {...imageSrc} key={index} alt={imageSrc.alt} />
      ))}
    </div>
  );
};

export default PhotosInDone;
