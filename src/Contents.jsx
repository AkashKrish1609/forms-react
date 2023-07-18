import React from "react";

function Contents(props){

    return (
        <div className="left-side">
            <ul>
                <li><div className={props.page === 1 ? "circle circle-design" : "circle"}>1</div> <div className="flex-column"><span>Step 1</span>Your Info</div></li>
                <li><div className={props.page === 2 ? "circle circle-design" : "circle"}>2</div><div className="flex-column"><span>Step 2</span>Select plan</div></li>
                <li><div className={props.page === 3 ? "circle circle-design" : "circle"}>3</div><div className="flex-column"><span>Step 3</span>Add ons</div></li>
                <li><div className={props.page === 4 ? "circle circle-design" : "circle"}>4</div><div className="flex-column"><span>Step 4</span>Summary</div></li>
            </ul>
        </div>
    )
}

export default Contents;