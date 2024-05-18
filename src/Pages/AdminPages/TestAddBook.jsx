import React, { useState } from "react";
import useWriters from "../../hooks/useWriters";
import { LiaTimesSolid } from "react-icons/lia";

export default function TestAddBook() {
  const [writers] = useWriters();
  const [selectedWriters, setSelectedWriters] = useState([]);

  const handleSelectedWriter = (e) => {
    const clickedWriter = JSON.parse(e.target.value);
    const writerExist = selectedWriters.find(
      (selectedWriter) => selectedWriter?.writerId === clickedWriter?.writerId
    );
    if (!writerExist) {
      setSelectedWriters([...selectedWriters, clickedWriter]);
    }
  };

  const handleRemoveWriter = (id) => {
    const newSelectedWriters = selectedWriters.filter(
      (selectedWriter) => selectedWriter.writerId !== id
    );
    setSelectedWriters(newSelectedWriters);
  };

  return (
    <div className="m-20">
      {selectedWriters.length > 0 && (
        <div className="mb-3">
          {selectedWriters.map((selectedWriter, index) => (
            <button key={index} className="border p-1 text-xs m-1">
              <span className="flex items-center">
                {selectedWriter.name[0]}{" "}
                <LiaTimesSolid
                  className="ml-1"
                  onClick={() => handleRemoveWriter(selectedWriter.writerId)}
                />
              </span>
            </button>
          ))}
        </div>
      )}
      <select
        className="border border-2"
        onChange={(e) => handleSelectedWriter(e)}
      >
        {writers.map((writer) => (
          <option
            key={writer.writerId}
            value={`{"writerId": "${writer.writerId}", "name": ["${writer.name[0]}","${writer.name[1]}","${writer.name[2]}"]}`}
          >
            {writer.name[0]}
          </option>
        ))}
      </select>
    </div>
  );
}
