import React from 'react'


 function Car(props) {
     return (
      <div className="car">
        <h2>{props.make}</h2>
      <div><img className="image-car" width="100%" src={props.img } alt="" /></div>
        <p>{props.model}</p>
      </div>
    );
  }


export default Car;