import React from "react";

const CounterNums = (props) => {
  return (
    <div className="flex-1 flex flex-col p-3 items-center justify-center">
      <div className="text-sm h-8">{props.name}</div>
      <div className="flex-1 text-7xl">{props.score}</div>
    </div>
  );
};

export { CounterNums };
