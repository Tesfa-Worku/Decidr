import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem";

function App() {
  const [listContainer, setListContainer] = useState([]);

  return(
    <div>
      <AddItem />
    </div>
  )
}

export default App;