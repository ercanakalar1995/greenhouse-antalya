import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ProductInformation from '../../Components/Product/ProductInformation';

import { products } from '../../../src/Components/General/CardTitles';

import { useLocation } from 'react-router-dom';
import capitalizeFirstLetter from '../../Components/Hook/replaceName';
import ContactWp from '../../Components/Contact/ContactWp';

const Product = () => {
  const location = useLocation();
  const name = location.pathname.split('/')[2];

  const findProduct = products.filter(
    (product) => product.productName === name,
  )[0];

  const headTitle = capitalizeFirstLetter(name);

  return (
    <>
      <ContactWp />
      <Header headTitle={headTitle} />
      <ProductInformation findProduct={findProduct} />
      <Footer />
    </>
  );
};

export default Product;
