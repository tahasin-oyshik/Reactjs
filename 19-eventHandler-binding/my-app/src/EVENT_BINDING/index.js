// // Always Follow ES6, Next One Just for Learning
// import { Component } from 'react';

// export class EVENT_BINDING extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   handleClick = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>increase</button>
//       </div>
//     );
//   }
// }

// export default EVENT_BINDING;

// // Bind Needed If U don't Use Es6 or Arrow function
// import { Component } from 'react';

// export class EVENT_BINDING extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   handleClick() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick.bind(this)}>increase</button>
//       </div>
//     );
//   }
// }

//export default EVENT_BINDING;

// // Bind Needed If U don't Use Es6 or Arrow function
import { Component } from 'react';

export class EVENT_BINDING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>increase</button>
      </div>
    );
  }
}

export default EVENT_BINDING;
