import React, { Component } from 'react'
import Count from './Count'

 function Car(car){
  
  
   return (
     <>
      <div className="car has-text-weight-bold">
        <h2>{car.make}</h2>
        <p>{car.model}</p>
      <div><img className="image-car" width="100%" src={car.img } alt=" " /></div>
      <Count/>
    </div>
    </>
    )
  };


export default Car;