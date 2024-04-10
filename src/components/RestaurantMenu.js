import ChildNestedFood from "./ChildNestedFood";
import {useState} from 'react'


const RestaurantMenu = (props) => {
  const [hide, setHide] = useState(false);
  const [sym, setSym] = useState("▼")
  const { title, itemCards } = props.internals.card.card;
  
  const handleHide = () => {
    
    setHide(!hide);
    (sym == "▼")?setSym("▲"):setSym("▼")
  };
  return (
    <div>
      <div className="w-6/12  mx-auto my-3 bg-gray-50 p-4 shadow cursor-pointer">
        <div className="flex justify-between" onClick={handleHide}>
          <span className="font-bold">
            {title} ({itemCards.length})
          </span>
          <span>{sym}</span>
        </div>
        <div>{hide && <ChildNestedFood dt={itemCards} />}</div>
        
       
      </div>
    </div>
  );
};

export default RestaurantMenu;
