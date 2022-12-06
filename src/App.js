import React, { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Counter } from "./components/Counter";

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

  const [currScore, setCurr] = useState(0);
  const [maxScore, setMax] = useState(0);
  const [keyArr, setKeyArr] = useState([]);

  const shuffle = () => {
    list.sort(() => Math.random() - 0.5);
    swapList([...list]);
  };

  const clicked = (e) => {
    if (
      keyArr.find((field) => {
        return field === e.currentTarget.id;
      }) !== undefined
    ) {
      setKeyArr([]);
      setCurr(0);
    } else {
      setKeyArr([...keyArr, e.currentTarget.id]);
      setCurr(currScore + 1);
      if (currScore > maxScore) {
        setMax(currScore);
      }
    }
    shuffle();
  };

  useEffect(() => {
    shuffle();
  }, []);

  return (
    <>
      <main className="grid grid-cols-4 gap-6 justify-items-center">
        {list.map((obj) => {
          return (
            <Card
              click={(e) => clicked(e)}
              pic={obj.pic}
              name={obj.name}
              key={obj.name}
            />
          );
        })}
      </main>
      <Counter scoreCurr={currScore} scoreMax={maxScore} />
    </>
  );
}

export default App;
