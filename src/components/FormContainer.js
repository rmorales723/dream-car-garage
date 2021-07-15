import React from 'react'


class FormContainer extends React.Component {
    state = {
       make : "",
       model: "",
       img: "",
    };

    handleOnChange = (event) => {
        console.log(event.target.name, event.target.value, event.target)
        this.setState({
            [event.target.name] : event.target.value
        });
        
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:5000/cars", this.addCar())
        .then(res => res.json())
        .then((cars => this.props.history.push("/cars"))
        )}

    addCar = () => {
        return {
            method: 'Post',
            headers: {
                'Content-type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify(this.state)
        }
    }
    

    render() {
        return(
            <>
            <button button class="btn danger" onClick={() => this.props.history.goBack()}>Back</button>
                <form className="new-car-form has-text-weight-bold has-text-black-bis" onSubmit= {this.handleOnSubmit}>
                <p>Add a Dream Car</p>
                
                    <label htmlFor = "make">Make</label>
                    <input 
                        
                        type="text" 
                        name="make" 
                        value={this.state.make}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor = "model">Model</label>
                    <input
                        type="text" 
                        name="model" 
                        value={this.state.model}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor = "img">Image Url</label>
                    <input
                        type="text" 
                        name="img" 
                        value={this.state.img}
                        onChange={this.handleOnChange}
                    />

                    <button type="submit">Submit</button>
                </form>   
                <div className= "form-container-container">
            </div>
            </>
        );
    }

}


export default FormContainer;