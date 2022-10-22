import React from 'react';

// const increaseBtn = React.createElement('button', {}, 'INCREASE');
// const decreaseBtn = React.createElement('button', {}, 'DECREASE');

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 }
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
      }

    increase() {
        const newValue = this.state.value + 1;
        this.setState({value: newValue});
    }

    decrease() {
        if (this.state.value === 0) {
            return;
        }
        const newValue = this.state.value - 1;
        this.setState({value: newValue});
    }

    render() {
        return (
          <div>
            <h1>Counter value: {this.state.value}</h1>
            <button onClick={this.increase}>Increase</button>
            <button onClick={this.decrease}>Decrease</button>
          </div>
        );
      }

  }

export default Counter;
  