import './card.css';

const CardFeatures = (props) => {
  return (
    <div className="card__details">
      <ul>
        {props.cardFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardFeatures;
