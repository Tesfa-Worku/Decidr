import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem";

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectItem, setSelectItem] = useState('');

  const displayList = listContainer.map
    ((item, index) =>    
      <li key={index}>{item} 
        <button onClick={() => {deleteItem(index)}}>del</button>
      </li>    
    )

  const deleteItem = (index) => {
    let listOfItem = [...listContainer];
      listOfItem.splice(index, 1);
      setListContainer(listOfItem);
  }

  const selectRandomItem = () => {
    setSelectItem(()=>(listContainer[Math.floor(Math.random() * listContainer.length)]));    
  };

  return(
    <div className="App">    
          <header>
            Decidr
          </header>

          <main>            
            <ol id="display-list">
              {displayList}              
            </ol>
            <p id="selected">{selectItem}</p>
          </main>

          <AddItem
            listContainer={listContainer}
            setListContainer={setListContainer}
          /> 

          <footer>
            <button onClick={selectRandomItem}>
              Select An Item
            </button>          
          </footer>                     
    </div>
  )
}

export default App;