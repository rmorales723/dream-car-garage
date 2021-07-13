import React, {Component} from 'react'
import Car from './Car'
import {Link} from 'react-router-dom';


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
            <> 
            <button class="btn danger" onClick={() => this.props.history.goBack()}>Back</button>
            <div>
                <Link to="/cars/new">Add a Dream Car</Link><h2></h2>
                {this.state.cars.map(({make,model,img}) => (
                    <Car 
                    make= {make} 
                    model= {model} 
                    img= {img}/>
                ))}
            </div>
            </>
        )
    }
}

export default CarsContainer;