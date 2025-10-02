import { Component } from 'react';

// When Component Mouning/showing in browser -> constructor -> render -> componentDidMount/APIcalling
// For Updating -> state/props -> shouldComponentUpdate -> render -> componentDidUpdate

export class LIfeCycle extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');

    this.state = {
      count: 0,
    };
  }

  componentDidMount = () => {
    console.log('componentDidMount');
  };
  shouldComponentUpdate = () => {
    console.log('shouldComponentUpdate');
    return true;
  };
  componentDidUpdate = () => {
    console.log('componentDidUpdate');
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    {
      console.log('render');
    }
    return (
      <div>
        Counter: {this.state.count}
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default LIfeCycle;
