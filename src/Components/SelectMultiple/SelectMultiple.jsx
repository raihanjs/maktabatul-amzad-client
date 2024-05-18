import React, { useContext } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { ThemeContext } from "../../Providers/ThemeProvider";

export default function SelectMultiple({
  items,
  itemId,
  selected,
  setSelected,
}) {
  const { language } = useContext(ThemeContext);

  const handleSelected = (e) => {
    const clickedItem = JSON.parse(e.target.value);
    const itemExist = selected.find(
      (selectedItem) => selectedItem[itemId] === clickedItem[itemId]
    );
    if (!itemExist) {
      setSelected([...selected, clickedItem]);
    }
  };

  const handleRemove = (id) => {
    const newSelected = selected.filter(
      (selectedItem) => selectedItem[itemId] !== id
    );
    setSelected(newSelected);
  };

  return (
    <div>
      {selected.length > 0 && (
        <div className="mb-3">
          {selected.map((selectedItem, index) => (
            <button key={index} className="border p-1 text-xs m-1">
              <span className="flex items-center">
                {selectedItem.name[language]}{" "}
                <LiaTimesSolid
                  className="ml-1"
                  onClick={() => handleRemove(selectedItem[itemId])}
                />
              </span>
            </button>
          ))}
        </div>
      )}
      <select
        className="border border-black w-full p-1"
        onChange={(e) => handleSelected(e)}
      >
        {items.map((item, index) => (
          <option
            key={index}
            value={`{"${itemId}": "${item[itemId]}", "name": ["${item.name[0]}","${item.name[1]}","${item.name[2]}"]}`}
          >
            {item.name[language]}
          </option>
        ))}
      </select>
    </div>
  );
}
