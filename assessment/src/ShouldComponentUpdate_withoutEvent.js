import React from "react";

const areEqual = (prevProps, nextProps) => {
  console.log("areEqual called");
  return prevProps.title === nextProps.title;
};

const SubComponent = React.memo(({ title }) => {
  console.log("SubComponent is running and rendering");
  return <h2>{title}</h2>;
}, areEqual);

class ExampleOfMemo extends React.Component {
  state = {
    count: 0,
    title: "Sub component",
  };
  handelBtnClick = (event) => {
    event.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };

  handleBtnChangeTitle = (event) => {
    event.preventDefault();
    this.setState({ title: `Title changed, count: ${this.state.count}` });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.handelBtnClick}>Click Here!</button>
        <button onClick={this.handleBtnChangeTitle}>Change Title!</button>
        <SubComponent title={this.state.title} />
      </div>
    );
  }
}

export default ExampleOfMemo;
