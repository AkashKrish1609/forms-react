import React, { useState } from "react";
import Contents from "./Contents"
import Form from "./Form"
import Plan from "./Plan";
import AddOnPage from "./Addonform";
import Summary from "./Summary";
import Thanks from "./Thanks";

function App(){
const [pageNo, setPageNo] = useState(1);
const [data, setData] = useState({
    personalDetails: {},
    planDetails: {},
    addOns: []
})
const [total, setTotal] = useState({
    planPrice: "",
    addOnsSum: ""
});

function personalDetails(required){
    setData( (prevValue) => {
        return {
            ...prevValue,
            personalDetails: required
        }
    })
}

function planDetails(required){
    setData( (prevValue) => {
        return {
            ...prevValue,
            planDetails: required
        }
    })
    
}
function addOns(required){
    setData( (prevValue) => {
        return {
            ...prevValue,
            addOns: required
        }
    })
}

    return (
        <div className="slider">
        <Contents page={pageNo}/>
        <Form personalDetails={personalDetails} page={setPageNo} hide={pageNo !== 1 ? true : false}/>
        <Plan setTotal={setTotal} page={setPageNo} planDetails={planDetails} hide={pageNo !== 2 ? true : false}/>
        <AddOnPage setTotal={setTotal} planType={data.planDetails.type} addOns={addOns} page={setPageNo} hide={pageNo !== 3 ? true : false}/>
        <Summary data={data} page={setPageNo} hide={pageNo !== 4 ? true : false} total={total}/>
        <Thanks hide={pageNo !== 5 ? true : false}/>
        </div>
    )
}

export default App;