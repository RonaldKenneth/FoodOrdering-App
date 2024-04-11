import { useState, useEffect } from "react";
import { resDetailLink } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantDetail from "../utils/useRestuarantDetail";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantNestedMenu from "./RestaurantNestedMenu";

const RestaurantDetail = () => {
  const [hide, setHide] = useState(0);
  const { resId } = useParams();

  const resDetail = useRestuarantDetail(resId);
  //console.log(resDetail)

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

  //console.log(resDetail[3].groupedCard.cardGroupMap.REGULAR);
  return (
    <div className="text-center">
      <h2 className="font-bold text-3xl	 mt-4">{name}</h2>
      <p className="italic m-2">{cuisines.map((data) => data).join(", ")}</p>

      <div>
        {MenuCategory.map((data, idx) => (
          <RestaurantMenu
            key={data.card.card.title}
            hide={idx === hide}
            idx={idx}
            setHide={(dt) => {
              setHide(dt);
            }}
            internals={data}
          />
        ))}
      </div>
      <div>
        {MenuNestedCategory.map((data) => (
          <RestaurantNestedMenu key={data.card.card.title} internals={data} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetail;
