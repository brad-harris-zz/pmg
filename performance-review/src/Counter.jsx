import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = event => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = event => {
    const { count } = this.state;
    if (count > 0) {
      this.setState({count: count - 1});
    }
  }

  render() {
    return (
      <div className='counter'>
        <button onClick={this.decrement} id='decrement'>-</button>
        <span id='count'>{this.state.count}</span>
        <button onClick={this.increment} id='increment'>+</button>
      </div>
    )
  }
}

export default Counter;