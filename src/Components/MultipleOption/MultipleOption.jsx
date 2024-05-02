import React, { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";

export default function MultipleOption({
  itemId,
  items,
  selected,
  setSelected,
}) {
  const { language } = useContext(ThemeContext);

  const handleSelected = (event) => {
    const clickedItem = event.target.value;
    if (!selected?.includes(clickedItem) && clickedItem.length > 0) {
      const newSelected = [...selected, clickedItem];
      setSelected(newSelected);
    } else {
      const indx = selected.indexOf(clickedItem);
      selected.splice(indx, 1);
    }
  };
  return (
    <div className="w-full">
      <select
        multiple
        value={selected}
        onChange={handleSelected}
        className="border h-20 w-full"
      >
        {items.map((item) => (
          <option value={item[itemId]} key={item._id}>
            {item.name[language]}
            {/* {item[itemId]} */}
          </option>
        ))}
        <option value="">Clear</option>
      </select>
    </div>
  );
}
