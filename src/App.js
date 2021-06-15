import {useState} from 'react';
import ItemList from './components/food/ItemList';
import ItemForm from './components/food/ItemForm';

const App = ({}) =>{
  const [items, setItems] = useState([
    {id: 1, name: "Cumquat", price: 3.99},
    {id: 2, name: "Parsimmon", price: 102.99},
    {id: 3, name: "Raddichio", price: 300.99},
    {id: 4, name: "Bok Choy", price: .99},
  ])
  const getId = () => {
    return Math.floor((1 + Math.random()) * 0X10000)
    .toString(16)
    .substring(1);
  };
  const addItem = (incomingItem) => {
    let newItem = { id: getId(), ...incomingItem}
    setItems([...items, newItem])
  }
  const deleteItem = (id) => {
    setItems(items.filter(i => i.id !== id))
  }
  const updateItem = (id, incomingItem) => {
    const updatedItems = items.map( i => {
      if (i.id == id) {
        return incomingItem
      }
      return i
    })
    setItems(updatedItems)
  }
  return(
    <>
      <h1>React Grocery List!</h1>
      <ItemList items={items}
      deleteItem={deleteItem}
      updateItem={updateItem}
      />
      <h1>Add New Item</h1>
      <ItemForm addItem={addItem}/>
    </>
  )
}
export default App;
