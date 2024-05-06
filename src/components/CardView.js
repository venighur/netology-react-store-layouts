import ShopCard from './ShopCard';

function CardView({ cards }) {
  return (
    <div className="cards">
      {cards.map(card => <ShopCard card={card} />)}
    </div>
  );
}

export default CardView;