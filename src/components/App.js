import React from "react";
import Choices from "./Choices";

const choices = [
  { id: 1, choice: "swimming" },
  { id: 2, choice: "gaming" },
  { id: 3, choice: "working" }
];

const renderChoices = (selectDiv, currentDiv) => {
  const choicesJsx = choices.map(choice => {
    return (
      <Choices
        currentDiv={currentDiv}
        selectDiv={selectDiv}
        choice={choice}
        key={choice.id}
        keyName={choice.id}
      />
    );
  });

  return choicesJsx;
};

class App extends React.Component {
  state = {
    selectedDiv: null
  };

  selectDiv = id => {
    this.setState({ selectedDiv: id });
  };
  render() {
    return <div>{renderChoices(this.selectDiv, this.state.selectedDiv)}</div>;
  }
}

export default App;
