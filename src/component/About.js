import User from './User.js';
import UserClass from './UserClass.js';
import React from 'react';



class About extends React.Component{
  constructor(props){
    super(props);
    console.log("child constructor");
  }
  componentDidMount(){
    console.log("parent component did mount");

  }

  render(){
    console.log("parent construcor");
      return (
    <div>
      <h1>About us</h1>
      <h2>This is Namaste React</h2>
      <User name={"akshay saini(function)"}/>
      <UserClass name={ "akshay saini(classes)"}/>


     
    </div>
  );

  }
}


export default About;


//parentconstuctor->parentrender->childconstructor->childrender->childrendidmount->parentdidmountcalled
 
/*   this is expected
paren consturcot
parent render
-akshay construcot
-akshay render
-akshay component did mount
-elon musk construcot
-elon musk render
-elon musk component did mount
-parent component did mount*/


/* PROJECTS.WOLTKMAJ.PL
this is the actual one   REACT LIFE CYCLE DIAGRAM
paren consturcot
parent render
-akshay construcot
-akshay render

-elon musk construcot
-elon musk render

-akshay component did mount
-elon musk component did mount
-parent component did mount*/

