import './productionCards.css';
import CardsTitle from './Cards/CardsTitle';

import Card from './Cards/Card';

const ProductionCards = ({ productsInformations, products }) => {
  return (
    <>
      <section className="section-tours" id="section-tours">
        <CardsTitle cardsTitle={productsInformations} />
        <div className="card-row">
          {products.map((product, index) => (
            <Card key={index} cardProduct={product} index={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductionCards;
