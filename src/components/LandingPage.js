import React from 'react'

const LandingPage = () => {
    return (
    <div className= "landing-page-container">
        <h1>MY DREAM CAR GARAGE</h1>    
    </div>)
    };
    
function clickMe() {
    alert('clicked');
}


export default function landingPage() {
    return (
        <div>
            <button onClick={clickMe}>
                Car Inventory List
            </button>
        </div>
    )
}


    
    




 