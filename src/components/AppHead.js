import { logo } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const AppHead = () => {
  const [login, setLogin] = useState("Login");
  const onlineCheck = useOnlineStatus();
  return (
    <div className="flex justify-between bg-red-100 shadow-lg	">
      <div >
        <img className="w-32" src={logo} alt="logo" />
      </div>
      <div className="content-center">
        <ul className="flex ">
          <li className="mx-5">Online Status: {onlineCheck?"✅":"🛑"}</li>
          <li className="mx-5">
            <Link to="/">Home</Link>
            </li>
          <li className="mx-5"><Link to="/about">About us</Link></li>
          <li className="mx-5"><Link to="/contactus">Contact us</Link></li>
          <li className="mx-5"><Link to="/grocery">Grocery</Link></li>
          <li className="mx-5">Cart</li>
          <button
             className="mx-5"
            onClick={() => {
              login == "Login" ? setLogin("Logout") : setLogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default AppHead;
