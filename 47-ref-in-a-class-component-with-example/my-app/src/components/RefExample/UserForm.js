import { Component, createRef } from 'react';

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.userNameRef = createRef();

    this.state = {};
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.userNameRef.current.value);
    this.userNameRef.current.style.color = 'green';
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-field">
          <label htmlFor="userName">UserName: </label>
          <input
            type="text"
            id="userName"
            name="userName"
            ref={this.userNameRef}
            placeholder="Enter your user name"
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default UserForm;
