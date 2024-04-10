import { cardImg } from "../utils/constants";

const AppBodyCard = (props) => {
  const { name, cloudinaryImageId, avgRating, cuisines } = props.resdata.info;
  const { deliveryTime } = props.resdata.info.sla;

  return (
    <div className=" m-4 p-2 w-[230px] h-[350px] bg-gray-300 rounded-lg">
      <div className="  ">
        <img
          className=" object-cover w-[250px]  h-[150px] rounded-lg hover:opacity-40"
          src={cardImg + cloudinaryImageId}
          alt="ABCpic"
        />
      </div>

      <h3 className="font-bold mt-2 mb-3 ">{name}</h3>
      <h4 className="italic ">{cuisines.map((data) => data).join(", ")}</h4>
      <h4 className="mt-2 w-[45px] rounded-md bg-green-700 text-white">
        {avgRating}⭐
      </h4>
      <h4 className="mt-2">{deliveryTime} minutes</h4>
    </div>
  );
};

export const withAlteredCard = (AppBodyCard) => {
  return (props) => {
    const { header, subHeader } = props.resdata.info.aggregatedDiscountInfoV3;
    //console.log(props.resdata);
    return (
      <div>
        <div className="pl-4">
          <div className="  absolute rounded-md bg-black opacity-60 text-white">
            {header} {subHeader}
          </div>
        </div>
        <div>
          {" "}
          <AppBodyCard {...props} />
        </div>
      </div>
    );
  };
};

export default AppBodyCard;
