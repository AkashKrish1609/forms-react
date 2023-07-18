import React, { useState } from "react";

function Plan(props){
    const [reqDetails, setReqDetails] = useState({
        planName: "",
        type: "",
        planPrice: ""
    })
    const planDetails = [
        {
            name: "Arcade",
            price: {
                monthly: "$9/mo",
                yearly: "$90/yr"},
            img: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>    
    },
        {
            name: "Advanced",
            price: {
                monthly: "$12/mo",
                yearly: "$120/yr"},
            img: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg>    
    },
        {
            name: "Pro",
            price: {
                monthly: "$15/mo",
                yearly: "$150/yr"},
            img: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g></svg>    
    },
]

// let toggle = document.querySelector(".toggle");
function handleBack(){
    props.page(1)
}

function handleClick(){
let toggleSpan = document.querySelector(".toggle>span");
let monthly = document.querySelector(".monthly");
let yearly = document.querySelector(".yearly");
let freeSpan = document.querySelectorAll(".free-span");
let price = document.querySelectorAll(".plan-price");
let priceYearly = document.querySelectorAll(".plan-price-yearly");
let btnDiv = document.querySelectorAll(".plan-btn");
btnDiv.forEach( (element) => element.classList.remove("plan-btn-design"))
toggleSpan.classList.toggle("toggle-change");
toggleSpan.classList.toggle("on-left");
monthly.classList.toggle("grey");
yearly.classList.toggle("grey");
freeSpan.forEach( (element) => {element.classList.toggle("hide")});
priceYearly.forEach( (element) => {element.classList.toggle("hide")});
price.forEach( (element) => {element.classList.toggle("hide")});

let addOns = document.querySelectorAll(".add-ons")
addOns.forEach( (element) => {
    if(element.classList.contains("add-ons-design")){
        element.classList.remove("add-ons-design");
        element.querySelector("input").checked = false;
    }
})


}

function handleBtns(e){
    let btnDivs = document.querySelectorAll(".plan-btn");
    let btnDiv = e.target.closest(".plan-btn");
    btnDivs.forEach( (element) => {
        element.classList.remove("plan-btn-design")
    })
    btnDiv.classList.toggle("plan-btn-design")
    let planName = btnDiv.querySelector(".plan-name").innerText;
    let type;
    let price;
    let priceDiv = btnDiv.querySelector(".plan-price")
    let priceDivYearly = btnDiv.querySelector(".plan-price-yearly")
    if(priceDiv.classList.contains("hide")){
        type = "Yearly"
        price = priceDivYearly.innerText
    }else{
        type = "Monthly"
        price = priceDiv.innerText
    }
    setReqDetails({
        planName: planName,
        type: type,
        planPrice: price
    })
    
}

function handleNext(){
    let priceNeeded = (reqDetails.planPrice).match(/(\d+)/)[0]
    props.setTotal( (prev) => {
        return {
            planPrice: Number(priceNeeded),
            addOnsSum: prev.addOnsSum
        }
    })
    let planBtns = document.querySelectorAll(".plan-btn");
    props.planDetails(reqDetails)
    let reqArray = Array.from(planBtns);
    let last = reqArray.filter( (element) => {
        return element.classList.contains("plan-btn-design")
    })
    if(last.length === 1){
        props.page(3)
    }
}

let hide = props.hide;

    return (
        <div className={hide ? "right-side hide" : "right-side"}>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing</p>
            <div className="plan-list">
            {planDetails.map( (element) => {
            return (
            <div className="plan-btn" onClick={handleBtns}>
            <span className="plan-icon">{element.img}</span>
            <span className="plan-name">{element.name}</span>
            <span className="plan-price">{element.price.monthly}</span>
            <span className="plan-price-yearly hide">{element.price.yearly}</span>
            <span className="free-span hide">2 months free</span>
            </div> 
            )
            })}
            </div>
            <div className="choice-div">
                <span className="monthly">Monthly</span>
                <button className="toggle" onClick={handleClick}><span className="on-left"></span></button>
                <span className="yearly grey">Yearly</span>
            </div>
            <div className="navigation">
            <button onClick={handleBack} className="back-btn">Go back</button>
            <button onClick={handleNext} className="next-btn">Next</button>
            </div> 
        </div>
    )
}

export default Plan;