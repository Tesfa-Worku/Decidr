import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem";

function App() {
  const [listContainer, setListContainer] = useState([]);

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
          {
            listContainer.map((item, i) => <p key={i}>{item}</p>)
          }
        </div>
        <button>
          Select An Item
        </button>
      </div>      
    </div>
  )
}

export default App;