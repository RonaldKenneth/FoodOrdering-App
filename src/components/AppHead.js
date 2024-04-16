import { logo } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import { NewUser } from "../utils/NewUser";
import { useSelector } from "react-redux"

const AppHead = () => {
  const [login, setLogin] = useState("Login");
  const onlineCheck = useOnlineStatus();
  const [anotherUser, setAnotherUser] = useState(false);
  
  const {LoggedUser, setUser} = useContext(NewUser);
  
  const cartItems = useSelector((store)=>store.cart.items)
 
  const changeUser = () => {
    if (login == "Login") setLogin(LoggedUser);
    else if (login == "Admin") setAnotherUser("True");
    else if(LoggedUser!=login && login!="Logged Out")setLogin(LoggedUser)
    else setLogin("Logged Out")
  };
  //console.log(LoggedUser);
  return (
    <div className="flex justify-between bg-red-100 shadow-lg	">
      <div>
        <img className="w-32" src={logo} alt="logo" />
      </div>
      <div className="content-center">
        <ul className="flex ">
          <li className="mx-5">Online Status: {onlineCheck ? "✅" : "🛑"}</li>
          <li className="mx-5">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-5">
            <Link to="/about">About us</Link>
          </li>
          <li className="mx-5">
            <Link to="/contactus">Contact us</Link>
          </li>
          <li className="mx-5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mx-5">
          <Link to="/cart">Cart <span className="font-semibold ">({cartItems.length})</span></Link>
            </li>

          {!anotherUser && (
            <button
              className="mx-5 font-bold"
              onClick={
                changeUser
              }
            >
              {login}
            </button>
          )}
          {anotherUser && (
            <div>
              <input
                type="text"
                value={LoggedUser}
                onChange={(e) => setUser(e.target.value)}
                className="border border-solid border-black hover:border-solid  hover:border-blue-600"
              /> 
              <button
                className="ml-2 p-0.5 bg-blue-100 rounded-md border border-solid border-blue-800"
                onClick={()=>{setAnotherUser(false); setLogin(LoggedUser)}}
              >
                Enter
              </button>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AppHead;
