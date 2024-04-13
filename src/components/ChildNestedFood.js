import React from "react";
import {useDispatch} from "react-redux"
import { addItem } from "../utils/cartSlice";
import { cardImg } from "../utils/constants";

function ChildNestedFood({dt, addState}) {
  console.log(dt);
  const dispatch = useDispatch();
  const handleAddItem = (dt)=>{
    dispatch(addItem(dt))
  }
  return (
    <div className="h-auto">
      {dt.map((d) => (
        
        <div
          key={d.card.info.id}
          className="p-1 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span className="font-semibold">{d.card.info.name}</span>
              <span> - ₹{d.card.info.price? (d.card.info.price/ 100):(d.card.info.defaultPrice/100)}</span>
            </div>
            <p className="text-xs">{d.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
          <div className="absolute">
              {addState && <button className=" mx-12 rounded-md mt-20 bg-black text-white shadow-lg" onClick={()=>handleAddItem(d)}>
                ADD +
              </button>}
            </div>
            <img
              className=" object-cover ml-5 h-24 w-28"
              src={cardImg + d.card.info.imageId}
              alt="ABCpic"
            />
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChildNestedFood;
