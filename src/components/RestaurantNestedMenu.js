import React,{useState} from "react";
import ParentNestedFood from "./ParentNestedFood";

function RestaurantNestedMenu(props) {
  const [hide, setHide] = useState(null);
  
  //console.log(props)
  return (
    <div>
      <div className="w-6/12  mx-auto my-3 bg-gray-50 p-4 shadow cursor-pointer">
        <div className="flex justify-between">
          <span className="font-bold">{props.internals.card.card.title}</span>
        </div>
        {props.internals.card.card.categories.map((dt, idx) => (
          <ParentNestedFood key={dt.title} int={dt} 
          hide={idx === hide}
          idx={idx}
          setHide={(dt) =>{ setHide(dt)}}
         />
        ))}
      </div>
    </div>
  );
}

export default RestaurantNestedMenu;
