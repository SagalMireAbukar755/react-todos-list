import { useState } from 'react';
import './App.css';


function App() {

const [item, setItem]=useState("")
const [todos,setTodos]=useState([])

const handleItem = (event) => {
  event.preventDefault();

  if(item){
    setTodos([...todos , item])
    setItem("")
  }
}
  return (
   <>
   <div className="container">
      <h1 style={{textAlign:"center", paddingTop:"10px"}}>Our list of Todos</h1>
      <form>
        <label>Enter Item</label><br/>

        <input type="text" value = {item} 
        onChange={(event) => {
          setItem(event.target.value)
        }}/>

        <button onClick={handleItem}>Add</button>
      </form>
   </div>


   {

   todos.map((newItem, index)  =>(
   <div className="item-parent">
    <div className="item">
      <h4>{newItem}</h4>
    </div>
   </div>
   ))
   }
   
   </>
  );
}

export default App;
