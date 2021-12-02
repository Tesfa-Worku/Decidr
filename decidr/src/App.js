import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem";

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectItem, setSelectItem] = useState('');

  const selectRandomItem = () => {
    setSelectItem(()=>(listContainer[Math.floor(Math.random() * listContainer.length)]));    
  };

  const displayList = listContainer.map((item, index) => <li key={index}>{item}</li>) 

  return(
    <div className="App">    
        <header>
          Decidr
        </header>

        <main>
          <AddItem
            listContainer={listContainer}
            setListContainer={setListContainer}
          />        

          <ol id="display-list">
            {displayList}
          </ol>

          <p id="selected">{selectItem}</p>
        </main>

        <footer>
          <button onClick={selectRandomItem}>
            Select An Item
          </button>          
        </footer>     
    </div>
  )
}

export default App;