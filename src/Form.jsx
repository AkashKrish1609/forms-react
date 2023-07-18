import React from "react";


function Form(props){
let hide = props.hide;
function handleClick(e){
    let personName = document.querySelector("#name")
    let personEmail = document.querySelector("#mail-id")
    let personNumber = document.querySelector("#ph-no")
    props.personalDetails({
        name: personName.value,
        email: personEmail.value,
        number: personNumber.value
    })
    props.page(2);
    e.preventDefault();
}


    return (
        <form className={hide ? "right-side hide" : "right-side"} onSubmit={handleClick}>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number</p>
            <label for="name">Name</label>
            <input required name="name"  id="name" placeholder="e.g. Stephen King"></input>
            <label for="mail-id">Email Address</label>
            <input required type="email"  name="mail-id" id="mail-id" placeholder="e.g. stephenking@lorem.com"></input>
            <label for="ph-no">Number</label>
            <input type="tel"  name="ph-no" id="ph-no" placeholder="e.g. +1 234 567 890" required></input>
            <div className="navigation">
            <button className="first-form-next" type="submit">Next Step</button>
            </div> 
        </form>
    )

    
}

export default Form;