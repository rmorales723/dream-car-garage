import React from 'react'


 function Car(props) {
     return (
      <div className="car">
        <h2>{props.model}</h2>
      <div><img width="100%" src={props.img } alt="" /></div>
        <p>{props.make}</p>
      </div>
    );
  }


export default Car;