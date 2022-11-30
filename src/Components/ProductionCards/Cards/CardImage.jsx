import './card.css';

const CardImage = (props) => {
  const className = `card__picture card__picture--${props.index}`;
  return <div className={className}>&nbsp;</div>;
};

export default CardImage;
