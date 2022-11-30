// import Image from 'next/image';
import './imageAndTitle.css';

const ImageAndTitle = (props) => {
  return (
    <>
      <div className="tesis__fide">
        <h3 className="heading-tertiary u-margin-bottom-small">
          {props.title}
        </h3>
        <div className="tesis__fide__seraImages">
          {props.image.map((imageSrc, index) => (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src={imageSrc}
              alt={`Photo of ${index}`}
              key={index}
              className={`tesis__fide__seraImages__photo tesis__fide__seraImages__photo--p${
                index + 1
              }`}
            />
            // <Image
            //   src={imageSrc}
            //   alt={`Photo of ${index}`}
            //   key={index}
            //   layout={'fill'}
            //   className={`composition__photo composition__photo--p${index + 1}`}
            // />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageAndTitle;
