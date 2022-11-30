import './card.css';

const CardsTitle = (props) => {
  return (
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">{props.cardsTitle}</h2>
    </div>
  );
};

export default CardsTitle;
