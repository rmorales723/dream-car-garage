import React from 'react'

class Car extends Component {
  render() {
    return (
      <div className="car">
        <h2>{ this.props.state.model}</h2>
      <div><img width="100%" src={ this.props.state.img } alt="" /></div>
        <p>{ this.props.state.make}</p>
        <p><strong>{ this.props.state.engine }</strong></p>
      </div>
    );
  }
}