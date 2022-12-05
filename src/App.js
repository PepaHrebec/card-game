import React, { useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [list, swapList] = useState([
    { pic: "redux", name: "Redux" },
    { pic: "openai-icon", name: "OpenAI" },
    { pic: "astro", name: "Astro" },
    { pic: "vitejs", name: "Vite" },
    { pic: "qwik", name: "Qwik" },
    { pic: "polymer", name: "Polymer" },
    { pic: "apostrophe", name: "Apostrophe" },
    { pic: "intercom-icon", name: "Intercom" },
  ]);

  return (
    <main className="grid grid-cols-4">
      {list.map((obj) => {
        return <Card pic={obj.pic} name={obj.name} key={obj.name} />;
      })}
    </main>
  );
}

export default App;
