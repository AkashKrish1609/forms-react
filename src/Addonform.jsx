import React, { useState } from "react";

function AddOnPage(props){
    const [dataArray, setDataArray] = useState([]);
    let categories = [
        {
            name: "Online service",
            description: "Access to multiplayer games",
            price: {
                monthly: "+$1/mo",
                yearly: "+$10/yr"
            }
        },
        {
            name: "Larger storage",
            description: "Extra 1TB of cloud save",
            price: {
                monthly: "+$2/mo",
                yearly: "+$20/yr"
            }
        },
        {
            name: "Customisable profile",
            description: "Custom theme on your profile",
            price: {
                monthly: "+$2/mo",
                yearly: "+$20/yr"
            }
        }
    ]
    
function handleClick(e){
    let check = e.target.closest(".add-ons").querySelector("input");
    let reqDiv = e.target.closest(".add-ons");
    if(check.checked === false){
    reqDiv.classList.add("add-ons-design");
    check.checked = true;
    }else if(check.checked === true){
    reqDiv.classList.remove("add-ons-design");
    check.checked = false;
    }
    
    let checked = check.checked;
    let reqName = reqDiv.querySelector(".add-ons-description>h3").innerText
    let reqPrice = reqDiv.querySelector(".add-ons-price").innerText

    if(checked){
        let finalDetails = {
            checked: checked,
            name: reqName,
            price: reqPrice
        }
        setDataArray( (prevValue) => {
            return [...prevValue, finalDetails]
        })
    }else if(!checked){
        setDataArray( (prevValue) => {
            return prevValue.filter( (element) => {
                return element.name !== reqName
            })
        })
    }
}

function handleNext(){
let totalSum = 0;
let requiredArray = dataArray.map( (element) => {
    return (element.price).match(/(\d+)/)[0]
})

for (let i = 0; i < requiredArray.length; i++) {
    totalSum += Number(requiredArray[i]);
}
props.setTotal( (prev) => {
    return {
        planPrice: prev.planPrice,
        addOnsSum: totalSum
    }
})

props.addOns(dataArray)
props.page(4)
}

function handleBack(){
    setDataArray([])
    props.page(2)
}

let hide =props.hide;
    return (
    <div className={hide ? "right-side hide" : "right-side"}>
        <h1>Pick Add-ons</h1>
        <p className="para-addOns">Add-ons help enhance your gaming experience</p>
        {categories.map( (element) => {
            return (
        <div className="add-ons" onClick={handleClick}>
        <input type="checkbox" name="checkbox" className="checkbox" onClick={handleClick}/>
        <div className="add-ons-description">
            <h3>{element.name}</h3>
            <p>{element.description}</p>
        </div>
        {props.planType === "Monthly" && <span className="add-ons-price">{element.price.monthly}</span>}
        {props.planType === "Yearly" && <span className="add-ons-price">{element.price.yearly}</span>}
        </div>
            )
        })}

        <div className="navigation">
        <button onClick={handleBack} className="back-btn">Go back</button>
        <button onClick={handleNext} className="next-btn">Next</button>
        </div> 
    </div>
    )
}

export default AddOnPage;