import React from "react";

export default class ExPropsChildren extends React.Component {
  render() {
    return (
      <div>
        <div>display: block</div>
        {this.props.children}
      </div>
    );
  }
}
