import './App.css';
import { useState} from 'react';

function App() {
  const [listContainer, setListContainer] = useState([])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Decidr</h1>
      </header>
      <body className="Input">
        <div>
          <input type="text" name="Add Item" placeholder="Add Item"/>
          <button 
          // onChange={}
          >
            Add Item</button>
        </div>          
      </body>
    </div>
  );
}

export default App;
