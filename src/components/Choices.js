import React, { useState } from "react";

const Choices = ({ choice, selectDiv, keyName, currentDiv }) => {
  // const [active, setActive] = useState(false);

  const onClick = () => {
    selectDiv(keyName);
    // setActive(!active);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        height: "100px",
        border: "3px solid red",
        borderRadius: "50%",
        textAlign: "center"
      }}
      onClick={onClick}
      className={keyName === currentDiv ? "active" : ""}
    >
      {choice.choice}
    </div>
  );
};

export default Choices;
