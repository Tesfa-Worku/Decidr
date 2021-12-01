import { useState} from 'react';

function AddItem() {

    return(
        <div>
            <form>
                <input
                    id="add-item"                
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