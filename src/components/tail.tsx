import React from "react";
export default function tail(){
    console.log('tail')
    function triggerGetNewDoms(){
        //console.log(Tell virtual List to get New Dom)
    }
    return <div><button onClick={triggerGetNewDoms}></button></div>
}