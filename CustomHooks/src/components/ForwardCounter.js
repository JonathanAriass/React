import React from "react";
import useCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  // The state in useCounter will be tied to this ForwardCounter component
  const counter = useCounter(true);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
