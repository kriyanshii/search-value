import React, { useState } from 'react';
// import './App.css'; // Create an App.css file for styling

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);
  const [filteredItems, setFilteredItems] = useState(['Apple All', 'Banana Ball', 'Cherry Chall', 'Date Doll', 'Fig Fall', 'Gig Gall', 'High Hall']);

  const handleInputChange = (e) => {
    const value = e.target.value;
    console.log(value)
    setInputValue(value);

    // Filter items based on input value
    const filtered = filteredItems.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filtered)
    setFilteredItems(filtered);
  };

  const handleItemClick = (item) => {
    setChips([...chips, item]);
    setInputValue('');
    setFilteredItems(filteredItems.filter(i => i !== item));
  };

  const handleChipRemove = (chip) => {
    setChips(chips.filter(c => c !== chip));
    setFilteredItems([...filteredItems, chip]);
  };

  const handleBackspace = (e) => {
    if (e.keyCode === 8 && !inputValue && chips.length > 0) {
      const lastChip = chips[chips.length - 1];
      console.log(lastChip)
      handleChipRemove(lastChip);
    }
  };

  return (
    <div>
      <div>
        {chips.map((chip, index) => (
          <div key={index} className="chip">
            {chip}
            <span onClick={() => handleChipRemove(chip)}>X</span>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleBackspace}
        />
      </div>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
