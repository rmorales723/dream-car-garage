import React, {Component} from 'react'
import Car from './Car'


class CarsContainer extends Component {

    state = {
        cars: []
    }
    
    componentDidMount() {
        fetch("http://localhost:5000/cars")
        .then(res => res.json())
        .then((cars => this.setState({cars})));
    }
    
    render() {
        return(
            <div>
                <h2>cars</h2>
                {this.state.cars.map(({make,model,img}) => (
                    <Car 
                    make= {make} 
                    model= {model} 
                    img={img}/>
                ))}
            </div>
        )
    }
}

export default CarsContainer;