import React, { Component, useContext } from "react";
import UserFn from "./UserFn";
import UserClass from "./UserClass";
import { useContext } from "react";
import { NewUser } from "../utils/NewUser";

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="my-4 text-xl font-bold">About US</h1>
        <h3 className="my-4 font-semibold">
          This is FoodApp created using React
        </h3>
        <NewUser.Consumer>
          {(dt)=><UserFn name={dt.LoggedUser}/>}
        
        </NewUser.Consumer>
        <UserClass val={"P1C1"} location={"OutSide"} />
      </div>
    );
  }
}

export default About;
