import React from "react";
import Square from "./Square";

interface Props {}

const Index: React.FC<Props> = (props) => {
  return (
    <div>
      <h1>Square</h1>
      <Square n={3} width={500} />
    </div>
  );
};

export default Index;
