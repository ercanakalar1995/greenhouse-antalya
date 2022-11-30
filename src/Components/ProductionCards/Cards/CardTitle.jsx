import capitalizeFirstLetter from '../../Hook/replaceName';
import './card.css';

const CardTitle = (props) => {
  const cardTitleReplaced = capitalizeFirstLetter(props.cardTitle);
  return (
    <h4 className="card__heading">
      <span className="card__heading-span card__heading-span--1">
        {cardTitleReplaced}
      </span>
    </h4>
  );
};

export default CardTitle;
