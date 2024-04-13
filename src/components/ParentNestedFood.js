import React from "react";
import ChildNestedFood from "./ChildNestedFood";
import { useState } from "react";

function ParentNestedFood({int, idx, hide,setHide}) {
  const { title, itemCards } = int;
  
  const [sym, setSym] = useState("▼");
  const handleHide = () => {
    hide ? setHide(null) : setHide(idx);

    sym == "▼" ? setSym("▲") : setSym("▼");
  };
  //console.log(props.int);
  return (
    <div>
      <div className="mx-auto my-2 p-4 cursor-pointer">
        <div className="flex justify-between">
          <span className="font-semibold text-lg" onClick={handleHide}>
            {title} ({itemCards.length})
          </span>
          <span>{sym}</span>
        </div>
        <div>{hide && <ChildNestedFood dt={itemCards} addState={true}/>}</div>
      </div>
    </div>
  );
}

export default ParentNestedFood;
