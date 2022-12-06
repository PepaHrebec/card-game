import React from "react";
import { CounterNums } from "./CounterNums";

const Counter = (props) => {
  return (
    <div
      className="w-72 h-40 bg-slate-300 rounded-md mx-auto border-solid border-2 border-b-4 border-slate-400 shadow-md mt-12
    flex"
    >
      <CounterNums name={"Current Score"} score={props.scoreCurr} />
      <CounterNums name={"Maximum Score"} score={props.scoreMax} />
    </div>
  );
};

export { Counter };
