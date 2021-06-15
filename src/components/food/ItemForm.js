import {useState} from 'react';
import Item from './Item';
const ItemForm = ({addItem}) => {
  const [item, setItem] = useState({name: "", price: ""})
  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(item)
    setItem({name: "", price: ""})
  }
  return(
    <form onSubmit={handleSubmit}>
      <input
        name='name'
        value={item.name}
        onChange={(e) => setItem({...item, name: e.target.value})}
        placeholder="Name"
        required
      />
      <input
        name='price'
        value={item.price}
        onChange={(e)=> setItem({...item, price: e.target.value})}
        placeholder="Price"
        required
      />
      <button>Submit</button>
    </form>
  )
}
export default ItemForm