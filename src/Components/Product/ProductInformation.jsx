import './productInformation.css';

import CurrentProductImage from './CurrentProductImage/CurrentProductImage';

import CurrentProductExplanation from './CurrentProductExplanation/CurrentProductExplanation';

const ProductInformation = ({ findProduct }) => {
  return (
    <div className="product-info">
      <CurrentProductExplanation />
      <CurrentProductImage
        imageSrc={findProduct.src}
        productName={findProduct.names}
      />
    </div>
  );
};

export default ProductInformation;
