// import { Component } from 'react';
// import HomePage from './HomePage';
// import LogInPage from './LogInPage';

// export class CONDITIONAL_RENDERING extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoggedIn: true,
//     };
//   }
//   render() {
//     const { isLoggedIn } = this.state;
//     let element;

//     if (isLoggedIn) {
//       element = <HomePage />;
//     } else {
//       element = <LogInPage />;
//     }

//     return <div>{element}</div>;
//   }
// }

// export default CONDITIONAL_RENDERING;

// // Same Thing But in Advance Way (ternary operator)
import { Component } from 'react';
import HomePage from './HomePage';
import LogInPage from './LogInPage';

export class CONDITIONAL_RENDERING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    const { isLoggedIn } = this.state;
    let element;

    element = isLoggedIn ? <HomePage /> : <LogInPage />;
    return <div>{element}</div>;
  }
}

export default CONDITIONAL_RENDERING;

// import { Component } from 'react';
// import HomePage from './HomePage';
// import LogInPage from './LogInPage';

// export class CONDITIONAL_RENDERING extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoggedIn: true,
//     };
//   }
//   render() {
//     const { isLoggedIn } = this.state;
//     return <div>{isLoggedIn ? <HomePage /> : <LogInPage />}</div>;
//   }
// }

// export default CONDITIONAL_RENDERING;

// // Same Thing But in Advance Way (short circuit)
// import { Component } from 'react';
// import HomePage from './HomePage';

// export class CONDITIONAL_RENDERING extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoggedIn: true,
//     };
//   }
//   render() {
//     const { isLoggedIn } = this.state;
//     return <div>{isLoggedIn && <HomePage />}</div>;
//   }
// }

// export default CONDITIONAL_RENDERING;
