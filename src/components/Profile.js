import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor of " + props.name);
        this.state = {
            userInfo: {
                name: "dummy name",
                reposCount: 0
            }
        };
    }

    async componentDidMount() {
        console.log("API call start of componentDidMount of " + this.props.name);
        const data = await fetch("https://api.github.com/users/nikhilreddych");
        const json = await data.json();

        console.log("API Call done of componentDidMount of " + this.props.name);
        this.setState({
            userInfo: json
        })
    }
    render() {
        console.log("render of " + this.props.name);
        return (
            <div>
                <h2>Profile class component</h2>
                <p>Name: {this.state.userInfo.login}</p>
                <p>No. Of repos: {this.state.userInfo.public_repos}</p>
                <img src={this.state.userInfo.avatar_url}></img>
            </div>
        )
    }
}

export default Profile;