import React from "react";
import { cardImg } from "../utils/constants";

function ChildNestedFood(props) {
  //console.log(props.dt);
  return (
    <div className="h-auto">
      {props.dt.map((dt) => (
        <div
          key={dt.card.info.id}
          className="p-1 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span className="font-semibold">{dt.card.info.name}</span>
              <span> - ₹{dt.card.info.price? (dt.card.info.price/ 100):(dt.card.info.defaultPrice/100)}</span>
            </div>
            <p className="text-xs">{dt.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
          <div className="absolute">
              <button className=" mx-12 rounded-md mt-20 bg-black text-white shadow-lg">
                ADD +
              </button>
            </div>
            <img
              className=" object-cover ml-5 h-24 w-28"
              src={cardImg + dt.card.info.imageId}
              alt="ABCpic"
            />
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChildNestedFood;
