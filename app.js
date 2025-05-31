import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello World from React");
const Title=()=>(<h1 id="heading">h1 tag using jsx </h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
//component composition
const Headingcomponent=()=>(
    <>
    {Title()}
    <Title/>
    <Title></Title>
    <h1> namaste react functional componnent</h1></>
);
console.log(<Headingcomponent/>);

root.render(<Headingcomponent/>)
