function ShopItem({ item }) {
  return (
    <div className="list-item">
      <div className="list-item-img" style={{ backgroundImage: `url(${item.img})` }} />
      <div className="name">{item.name}</div>
      <div className="color">{item.color}</div>
      <div className="price">{`$${item.price}`}</div>
      <div><button className="btn-add">add to cart</button></div>
    </div>
  );
}

export default ShopItem;