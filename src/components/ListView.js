import ShopItem from './ShopItem';

function ListView({ items }) {
  return (
    <>
      {items.map(item => <ShopItem item={item} />)}
    </>
  );
}

export default ListView;