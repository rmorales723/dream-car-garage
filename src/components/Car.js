import React from 'react'


 function Car(props) {
     return (
     <div className="car has-text-weight-bold">
        <h2>{props.make}</h2>
        <p>{props.model}</p>
      <div><img className="image-car" width="100%" src={props.img } alt=" " /></div>
        
      </div>
    );
  }


export default Car;