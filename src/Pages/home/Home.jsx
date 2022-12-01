import ContactWp from '../../Components/Contact/ContactWp';
import Contact from '../../Components/Contact/Contact';
import Featured from '../../Components/Featured/Featured';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ProductionCards from '../../Components/ProductionCards/ProductionCards';

import {
  productsInformations,
  products,
} from '../../../src/Components/General/CardTitles';

const Home = () => {
  return (
    <>
      <ContactWp />
      <Header />
      <Featured />
      <ProductionCards
        productsInformations={productsInformations}
        products={products}
      />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
