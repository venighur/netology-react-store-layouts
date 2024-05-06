function ShopCard({ card }) {
  return (
    <div className="card">
      <div className="name" style={{ width: '100%' }}>
        {card.name}
      </div>
      <div className="color" style={{ width: '100%' }}>
        {card.color}
      </div>
      <div className="card-img" style={{ backgroundImage: `url(${card.img})` }} />
      <div className="card-button">
        <div className="price">
          {`$${card.price}`}
        </div>
        <div><button className="btn-add">add to cart</button></div>
      </div>
    </div>
  );
}

export default ShopCard;