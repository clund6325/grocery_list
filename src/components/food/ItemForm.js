import {useEffect, useState} from 'react';
const ItemForm = ({addItem, id, name, price, updateItem, setEditing}) => {
  const [item, setItem] = useState({name: "", price: ""})
  useEffect( () => {
    if(id){
      setItem({name, price, id: id})
    }
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateItem(id, item)
      setEditing(false)
    } else {
      addItem(item)
    }
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