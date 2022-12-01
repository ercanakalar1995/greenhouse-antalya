import './currentProductImage.css';

const CurrentProductImage = (props) => {
  const { imageSrc, productName } = props;
  return (
    <div className="product-row">
      {imageSrc.map((src, index) => (
        <div className="col-1-of-4" key={index}>
          <div className="circle">
            <img
              src={src}
              key={index}
              alt={imageSrc}
              className={`image__properties image__properties-p${src.id}`}
            />
            <div className="product-name">
              <h3 className="product-name-position">{productName[index]}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentProductImage;
