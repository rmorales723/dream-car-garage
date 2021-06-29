import React, { Component } from 'react'

class FormContainer extends React.Component {
    state = {
       make : ""
    };

    handleOnChange = (event) => {
        this.setState({
            name: event.target.value
        });
        console.log(this.state);
    };

    render() {
        return(
            <div>
                <form>
                    <input type="text" make="name" model=" " img=" "
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