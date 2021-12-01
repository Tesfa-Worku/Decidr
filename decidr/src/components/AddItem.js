import { useState} from 'react';

function AddItem(
    {listContainer, setListContainer}) 
    {
    const [newItem, setNewItem] = useState('');
    
    const formSubmit = (event) =>{
        setListContainer([...listContainer, newItem])        
        setNewItem('');
        event.preventDefault();
    }
    return(
        <div>
            <form onSubmit={formSubmit}>
                <input
                    id="add-item"
                    value={newItem}
                    onChange={event => setNewItem(event.target.value)}                
                    placeholder="Add An Item"
                />
                <button
                    id="submit-item"
                    type="submit"
                >
                    Add Item
                </button>
            </form>
        </div>
    )
}

export default AddItem;