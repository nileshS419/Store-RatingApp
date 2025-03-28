import React, { useState } from "react";

const StoreList = ({ stores, addStore, removeStore }) => {
  const [newStore, setNewStore] = useState("");

  const handleAddStore = () => {
    if (newStore.trim()) {
      addStore({ name: newStore });  // Call parent function
      setNewStore("");
    }
  };

  return (
    <div>
      <h2>Store List</h2>
      <input
        type="text"
        value={newStore}
        onChange={(e) => setNewStore(e.target.value)}
        placeholder="Enter store name"
      />
      <button onClick={handleAddStore}>Add Store</button>

      <ul>
        {stores.map((store) => (
          <li key={store.id}>
            {store.name}
            <button onClick={() => removeStore(store.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreList;
