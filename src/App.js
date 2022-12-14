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
    { pic: "dart", name: "Dart" },
    { pic: "graphql", name: "GraphQL" },
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
    }
    shuffle();
  };

  useEffect(() => {
    shuffle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currScore > maxScore) {
      setMax(currScore);
    }
  }, [currScore, maxScore]);

  return (
    <div className="dark:bg-slate-800 h-screen">
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center pt-3">
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
    </div>
  );
}

export default App;
