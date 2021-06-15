import Item from './Item';
const ItemList = ({items, deleteItem, updateItem}) => (
  <>
    {items.map(i => (
      <Item
      {...i}
      deleteItem={deleteItem}
      updateItem={updateItem}
      />
    ))}
  </>
)
export default ItemList