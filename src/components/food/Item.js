import {useState} from 'react';
import ItemForm from './ItemForm';
const Item = ({id, name, price, deleteItem, updateItem}) => {
  const [editing, setEditing] = useState(false)
  return(
    <>
      <h1>id: {id}; {name}: ${price}</h1>
      <button onClick={() => deleteItem(id) }>Delete</button>
      { editing ? 
      <>
        <ItemForm
        id={id}
        name={name}
        price={price}
        updateItem={updateItem}
        setEditing={setEditing}/>
        <button onClick={() => setEditing(!editing)}>Cancel</button>
      </>
      :
      <button onClick={() => setEditing(!editing)}>Edit</button>
      }
      <br/>
       Purchased?
      <input
        type="checkbox"
        name="bought"
        defaultChecked= {false}
        text= "bought"
      />
      <hr/>
    </>
  )
}
export default Item 