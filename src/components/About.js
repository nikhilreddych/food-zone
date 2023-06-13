import React from "react";
import Profile from "./Profile";
import ProfileFunctionalComponent from "./ProfileFunctionalComponent";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor of About");
  }

  componentDidMount() {
    console.log("componentDidMount of About");
    // this.timer = setInterval(() => {
    //     console.log("food zone demo");
    // }, 1000);
  }

  render() {
    console.log("render of About");
    return (
      <>
        <h1>About Us</h1>
        <h2>
          We are Food Zone... a foodies stop for all types of delicacies to save
          you from hunger !!
        </h2>
        <UserContext.Consumer>
          {(value) => (
            <div className="text-lg font-bold m-2 p-2">
              {value.user.name} - {value.user.email}
            </div>
          )}
        </UserContext.Consumer>
        <Profile name={"Child profile 1"} />
        {/* <Profile name={"Child profile 2"}/> */}
        <ProfileFunctionalComponent />
      </>
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

export default About;
