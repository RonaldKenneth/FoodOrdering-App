import AppBodyCard, { withAlteredCard } from "./AppBodyCard";
import { resList } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const AppBody = () => {
  const [resNewList, setResNewList] = useState([]);
  const [searchText, setSearchText] = useState("");
  let [cpyResNewList, setCpyResNewList] = useState([]);
  let [val, setVal] = useState(null);

  const AlteredCard = withAlteredCard(AppBodyCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setCpyResNewList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setResNewList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const onlineCheck = useOnlineStatus();
  if (onlineCheck === false) {
    return (
      <h3 className="w-8/12 mx-auto mt-10 p-4 font-bold text-lg">
        Looks like you time-traveled back to the 19th century 😉 Check your
        internet and come back to the 21st century.
      </h3>
    );
  }
  return resNewList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex m-0  bg-yellow-100">
        <div className="mx-4 p-4">
          <input
            type="text"
            className="border border-solid border-black hover:border-solid  hover:border-blue-600"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 mx-2 bg-green-100 rounded-md hover:bg-green-300"
            onClick={() => {
              const filtrd = cpyResNewList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setResNewList(filtrd);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-4 py-1 mx-2 bg-gray-100 rounded-md hover:bg-gray-300"
            onClick={() => {
              const rerender = resNewList.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setResNewList(rerender);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap   bg-blue-50">
        {resNewList.map((data) => (
          <Link to={"/restaurant/" + data.info.id} key={data.info.id}>
            {data.info.aggregatedDiscountInfoV3 === undefined ? (
              <AppBodyCard resdata={data} />
            ) : (
              <AlteredCard resdata={data} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default AppBody;
