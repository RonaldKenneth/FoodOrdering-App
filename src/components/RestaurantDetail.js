import { useState, useEffect } from "react";
import { resDetailLink } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantDetail from "../utils/useRestuarantDetail";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantNestedMenu from "./RestaurantNestedMenu";

const RestaurantDetail = () => {
  const { resId } = useParams();

  const resDetail = useRestuarantDetail(resId);
  // console.log(resDetail)

  if (resDetail == null) return <Shimmer />;
  const { name, cuisines } = resDetail[2].card.card.info;
  const { cards } = resDetail[4].groupedCard.cardGroupMap.REGULAR;

  const MenuCategory = cards.filter(
    (data) =>
      data.card?.["card"]?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const MenuNestedCategory = cards.filter(
    (data) =>
      data.card.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  );
  
  //console.log(MenuCategory);
  return (
    <div className="text-center">
      <h2 className="font-bold text-3xl	 mt-4">{name}</h2>
      <p className="italic m-2">{cuisines.map((data) => data).join(", ")}</p>
      {/* <div>
        {MenuNestedCategory.map((data) => (
           <div className="font-bold text-xl m-2"> {data.card.card.title} </div>,
        
           {dc.map((data)=>(<RestaurantMenu int={data.card.card}/>))}
        ))}
      </div> */}
      <div >
        {MenuCategory.map((data) => (
          
          <RestaurantMenu key={data.card.card.title} internals={data} />
        ))}
      </div>
      <div >
        {MenuNestedCategory.map((data) => (
            
          <RestaurantNestedMenu key={data.card.card.title} internals={data} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetail;
