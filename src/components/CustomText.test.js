import React from "react";
import CustomText from "./CustomText";
import renderer from "react-test-renderer";

it("normal test", () => {
  const rendered = renderer.create(<CustomText />).toJSON();
  expect(rendered).toMatchSnapshot();
});

it("header test", () => {
  const rendered = renderer.create(<CustomText header />).toJSON();
  expect(rendered).toMatchSnapshot();
});
