import './card.css';
import CardButton from './CardButton';
import CardFeatures from './CardFeatures';
import CardImage from './CardImage';
import CardTitle from './CardTitle';

const Card = (props) => {
  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front">
          <CardImage cardImage={props.cardProduct.src} index={props.index} />
          <CardTitle cardTitle={props.cardProduct.productName} />
          <CardFeatures cardFeatures={props.cardProduct.description} />
          <CardButton productName={props.cardProduct.productName} />
        </div>
      </div>
    </div>
  );
};

export default Card;
