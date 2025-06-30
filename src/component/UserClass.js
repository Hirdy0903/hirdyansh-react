import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " children constructor called ");
    this.state = {
      userInfo:{
      name : "Dummy",
      location: "Dummy Location",

      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + " childrendidmount");
    const data = await fetch("https://api.github.com/users/hirdy0903");
    const json = await data.json();
    this.setState({
      userInfo: json,

    });
    console.log(json);
  }
  componentDidUpdate(){
    console.log("component did update called");
  }
  componentWillUnmount(){
    console.log("component will unmount called");
  }

  render() {
    console.log(this.props.name + " children render called");
    const{login,id} = this.state.userInfo;
    return (
      <div>
        <h1>login: {login}</h1>
         <h1>id: {id}</h1>


      </div>
    );
  }
}

export default UserClass;