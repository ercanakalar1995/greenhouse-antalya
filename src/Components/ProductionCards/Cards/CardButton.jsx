import { Link } from 'react-router-dom';
import './card.css';

const CardButton = ({ productName }) => {
  const buttonName = 'More Info';
  return (
    <>
      <div className="card__cta">
        <Link to={`/product/${productName}`} className="btn btn--white">
          {buttonName}
        </Link>
      </div>
    </>
  );
};

export default CardButton;
