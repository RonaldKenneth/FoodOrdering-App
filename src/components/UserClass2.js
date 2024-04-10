import React from "react";
import UserClass from "./UserClass";

class UserClass2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "XXXXXXXX",
    };
   
  }
  componentDidMount() {
    console.log(this.props.val + " CDM");
  }
  render() {
    const { location } = this.props;
    const { name } = this.state;
    console.log(this.props.val + " render");
    return (
      <div className="user">
        <h3>{name}</h3>
        <button
          onClick={() => {
            this.setState({
              name: "Ronald Kenneth",
            });
          }}
        >
          RevealTheDeveloper
        </button>
        <h4>{location}</h4>
        <p>Contact Me @ronald</p>
      </div>
    );
  }
}

export default UserClass2;
