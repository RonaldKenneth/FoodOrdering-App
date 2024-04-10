import React from "react";
import ChildNestedFood from "./ChildNestedFood";
import { useState } from "react";

function ParentNestedFood(props) {
 const{title, itemCards} = props.int;
  const [hide, setHide] = useState(false);
 const [sym, setSym] = useState("▼")
  const handleHide = () => {
    
    setHide(!hide);
    (sym == "▼")?setSym("▲"):setSym("▼")
  };
  console.log(props.int);
  return (
    <div>
      <div className="mx-auto my-2 p-4 cursor-pointer">
        <div className="flex justify-between">
          <span className="font-semibold text-lg" onClick={handleHide}>
            {title} ({itemCards.length})
          </span>
          <span>{sym}</span>
        </div>
        <div>{hide && <ChildNestedFood dt={itemCards} />}</div>
      </div>
    </div>
  );
}

export default ParentNestedFood;
