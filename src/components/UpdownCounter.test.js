import React from "react";
import UpdownCounter from "./UpdownCounter";
import renderer from "react-test-renderer";

it("increment counter", () => {
  const rendered = renderer.create(<UpdownCounter />);
  const counter = rendered.getInstance();
  expect(counter.state.count).toBe(0);
  const button = rendered.root
    .findByProps({ testId: "increment" })
    .props.onPress();
  expect(counter.state.count).toBe(1);
});

it("decrement counter", () => {
  const rendered = renderer.create(<UpdownCounter />);
  const counter = rendered.getInstance();
  expect(counter.state.count).toBe(0);
  const button = rendered.root
    .findByProps({ testId: "decrement" })
    .props.onPress();
  expect(counter.state.count).toBe(-1);
});
