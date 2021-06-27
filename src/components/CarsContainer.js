import React from 'react'


class CarContainer extends Component {

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
                {this.state.cars.map((make,model,img) => {
                    <car 
                    make= {make} 
                    model= {model} 
                    img={img}/>
                })}
            </div>
        )
    }
}

export default CarsContainer;