import React from "react";
import ChildComponent from "./components/ChildComponent";
import GrandChild from "./components/GrandChild";
import GreatGrandChild from "./components/GreatGrandChild";

const App = () => {
  const msg = "Invitation for a function";
  return (
    <div>
      Hi I am Parent and I want to send {msg} to my greatgrandchild
      <ChildComponent msg={msg} />
      <GrandChild msg={msg} />
      <GreatGrandChild msg={msg} />
    </div>
  );
};

export default App;