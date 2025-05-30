

{/* <div id="parent">
    <div id="child">
        <h1>
            
        </h1>
        <h2></h2>
    </div>
</div> */}
import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"namaste react"),
            React.createElement("h1",{},"i am h2 tag")]
    )
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
 
