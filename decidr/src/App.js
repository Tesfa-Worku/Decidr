import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem";

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectItem, setSelectItem] = useState('');

  const selectRandomItem = () => {
    setSelectItem(()=>(listContainer[Math.floor(Math.random() * listContainer.length)]))		
  };

  const displayList = listContainer.map((item, index) => <p key={index}>{item}</p>)
  

  return(
    <div>
      <div>
        <header>
          <h1>Decidr</h1>
        </header>

        <AddItem
          listContainer={listContainer}
          setListContainer={setListContainer}
        />

        <div>
          {displayList}
        </div>

        <div>
          <button onClick={selectRandomItem}>
            Select An Item
          </button>
          <p>{selectItem}</p>
        </div>
        
      </div>      
    </div>
  )
}

export default App;