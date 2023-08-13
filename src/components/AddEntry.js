import React, { useState } from "react";
import "./AddEntry.scss";

const AddEntry = ({ currentEntries, setCurrentEntries }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddEntry = () => {
    setCurrentEntries([
      ...currentEntries,
      {
        title: title,
        description: description,
      },
    ]);

    localStorage.setItem("storedEntries", currentEntries);
  };

  return (
    <div className="add-entry">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <buton onClick={() => handleAddEntry()}>Done</buton>
    </div>
  );
};

export default AddEntry;
