import React, {Component} from 'react'

class Count extends React.Component {
    state= {
        count: 0
    };

    incrementCount = () => {
        this.setState(
            {count: this.state.count + 1}
        )
    };

    render() {
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.incrementCount}>Like</button>
            </div>
        )
    };
}

export default Count;