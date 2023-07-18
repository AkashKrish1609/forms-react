import React from "react";

function Summary(props) {
    let name = props.data.planDetails.planName;
    let planPrice = props.data.planDetails.planPrice;
    let planType = props.data.planDetails.type;
    let addOnsArray = props.data.addOns;

    function handleBack(){
        props.page(3)
    }

    function confirmBtn(){
        props.page(5)
    }
    function changeBtn(){
        props.page(2)
    }
let hide = props.hide;
    return (
        <div className={hide ? "right-side hide" : "right-side"}>
        <h1>Finishing up</h1>
        <p className="para-summary">Double-check everything looks OK before confirming.</p>
        <div className="summary-main">
        <div className="summary-plan-name">
            <span className="summary-left">
                <h1>{name} ({planType})</h1>
                <p onClick={changeBtn}>Change</p>
            </span>
            <span className="summary-right">{planPrice}</span>
        </div>
        {addOnsArray.map( (element) => {
            return (
        <div className="summary-add-ons">
            <span className="summary-left">{element.name}</span>
            <span className="summary-right">{element.price}</span>
        </div>
            )
        })}
        </div>
        <div className="summary-total">
            <span className="summary-left">Total ({planType})</span>
            <span className="summary-right">${props.total.planPrice + props.total.addOnsSum}{planType === "Yearly" ? "/yr" : "/mo"}</span>
        </div>
        <div className="navigation">
        <button className="last-form-back"  onClick={handleBack}>Go back</button>
        <button className="last-form-confirm" onClick={confirmBtn}>Confirm</button>
        </div> 
    </div>
    )
}


export default Summary;