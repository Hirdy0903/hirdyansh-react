import { useRouteError } from "react-router-dom";



const Error=()=>{
    const err=useRouteError();
    return (
        <div>
            <h1> oops!!!</h1>
            <h2>something went wrong🥹🥹🥹</h2>
            <p>{err.status + " : " + err.statusText}</p>

        </div>
    )
}
export default Error;

