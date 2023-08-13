import { useState } from "react";
import "./App.scss";
import AddEntry from "./components/AddEntry";
import { Entry } from "./components/Entry";
import { entries } from "./entries";

function App() {
  const [addEntryVisible, setAddEntryVisible] = useState(false);

  const [currentEntries, setCurrentEntries] = useState(entries);

  return (
    <div className="App">
      <input type="text" placeholder="Start"></input>

      {currentEntries.map((entry) => (
        <Entry title={entry.title} description={entry.description} />
      ))}

      {addEntryVisible && (
        <AddEntry
          currentEntries={currentEntries}
          setCurrentEntries={setCurrentEntries}
        />
      )}

      <button onClick={() => setAddEntryVisible(true)}>Add step</button>
    </div>
  );
}

export default App;
