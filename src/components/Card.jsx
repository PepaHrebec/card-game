import React from "react";
import { Icon } from "@iconify/react";

const Card = (props) => {
  return (
    <div
      onClick={props.click}
      className="p-6 rounded-lg bg-slate-300 m-2 w-60 h-60 flex flex-col gap-6 border-solid border-2 border-b-4 border-slate-400 shadow-md"
    >
      <div className="mx-auto font-semibold text-xl">{props.name}</div>
      <div className="p-4 w-40 h-40 bg-white rounded-lg mx-auto flex justify-center items-center border-solid border-2 border-b-4 border-slate-400">
        <Icon className="mx-auto" icon={`logos:${props.pic}`} width={100} />
      </div>
    </div>
  );
};

export { Card };
