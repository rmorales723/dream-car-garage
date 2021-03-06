import React, { Component } from 'react'
import Car from './Car'
import { Link } from 'react-router-dom';
import Count from './Count'


class CarsContainer extends React.Component {

    state = {
        cars: []
    };


    componentDidMount() {
        fetch("http://localhost:5000/cars")
            .then(res => res.json())
            .then((cars => this.setState({ cars })));
    }

    render() {

        return (
            <div>
                <button class="btn danger" onClick={() => this.props.history.goBack()}>Back</button>
                <div>
                    <Link to="/cars/new">Add a Dream Car</Link>
                    {this.state.cars.map(car => (
                        <div>
                            <Car
                                make={car.make}
                                model={car.model}
                                img={car.img} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default CarsContainer;