import { useState } from "react";

const User=({name})=>{
    const [count]= useState(0);
    const[count2]= useState(1);
    return(
        <div className="user-card">
                <h2>Name:{name}</h2>
                <h3>
                    {count}
                </h3>
                <h4>{count2}</h4>
        </div>
    )
}
export default User;