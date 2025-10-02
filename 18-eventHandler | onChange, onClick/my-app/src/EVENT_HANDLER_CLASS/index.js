import { Component } from 'react';

export class EVENT_HANDLER_CLASS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeValue: '',
    };
  }

  handleOnChange = (e) => {
    this.setState(
      {
        changeValue: e.target.value,
      },
      () => {
        console.log(this.state.changeValue);
      },
    );
  };

  render() {
    const { changeValue } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleOnChange} />
        <p>{changeValue}</p>
      </div>
    );
  }
}

export default EVENT_HANDLER_CLASS;
