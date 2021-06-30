import React from 'react'

class FormContainer extends React.Component {
    state = {
       make : "",
    };

    handleOnChange = (event) => {
        this.setState({
            make: event.target.value,
        });
        
    };

    handleOnSubmit = (event) => {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(event)
    };
    
        fetch("http://localhost:5000/cars")
        .then(res => res.json())
        .then((cars => this.setState({cars})));
}



    render() {
        return(
            <div>
                <form onSubmit= {this.handleOnSubmit}>
                    <input
                        type="text" 
                        make="name" 
                        value={this.state.make}
                        onChange={this.handleOnChange}
                    />
                    <button type="submit">Submit</button>
                </form>   
            </div>
            
        );
    }

}


export default FormContainer;