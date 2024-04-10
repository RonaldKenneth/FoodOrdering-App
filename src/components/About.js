import React, { Component } from "react";
import UserFn from "./UserFn";
import UserClass from "./UserClass";

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="my-4 text-xl font-bold">About US</h1>
        <h3 className="my-4 font-semibold">This is FoodApp created using React</h3>
        <UserClass val={"P1C1"} location={"OutSide"} />
        <UserFn name={"Kevin_Romario"} location={"Chennaiii"} />
      </div>
    );
  }
}

export default About;
