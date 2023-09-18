import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 1,
    };
  }

  render() {
    return (
      <div>
        <h2>This Is Class Component</h2>
        <h3>Name: {this.props.name}</h3>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Update
        </button>
        <h4>Count1: {this.state.count1}</h4>
        <h4>Count2: {this.state.count2}</h4>
      </div>
    );
  }
}

export default ProfileClass;
