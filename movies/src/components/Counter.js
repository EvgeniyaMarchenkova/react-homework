import React from 'react';
import ReactDOM from 'react-dom/client';

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: 0 }
      this.increase = this.increase.bind(this);
      this.decrease = this.decrease.bind(this);
    }

    componentDidMount() {
      const root = ReactDOM.createRoot(
        document.getElementById('counter-block')
      );
      const increaseBtn = React.createElement('button', { onClick: this.increase }, 'Increase');
      const decreaseBtn = <button onClick={this.decrease}>Decrease</button>;
      root.render(
        <div>      
          {increaseBtn}
          {decreaseBtn}
        </div>        
      );
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
          <div id='counter-block'></div> 
        </div>
      );
    }
  }

export default Counter;
  