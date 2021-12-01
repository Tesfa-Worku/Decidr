import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem";

function App() {
  const [listContainer, setListContainer] = useState([]);

  return(
    <div>
      <AddItem
        listContainer={listContainer}
        setListContainer={setListContainer}
      />
        <div>
          {
            listContainer.map((item, i) => <p key={i}>{item}</p>)
          }
        </div>
      </div>      
    </div>
  )
}

export default App;