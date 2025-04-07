
import { useState } from 'react'
import NoteHeader from "./components/NoteHeader";
import NoteBody from "./components/NoteBody";

function App() {
  const [sortBy, setSortBy] = useState("completed");
  return (
    <div className="w-screen h-screen bg-[#f7f7f7]">
      <div className="container flex flex-col items-stretch">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <NoteBody sortBy={sortBy} />
      </div>
    </div>
  );
}

export default App
