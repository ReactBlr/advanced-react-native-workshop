import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

// import Button from "./Button";
import CenterView from "./CenterView";
import Welcome from "./Welcome";
import { Button, Card } from "react-native-elements";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => <Button title="Submit" />)
  .add("with some icon", () => (
    <Button raised icon={{ name: "cached" }} title="Submit" />
  ));

storiesOf("Card", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("card with text", () => (
    <Card>
      <Text style={{ marginBottom: 10 }}>This is simple text in card</Text>
    </Card>
  ))
  .add("card with divider", () => (
    <Card title="HELLO WORLD">
      <Text style={{ marginBottom: 10 }}>
        The idea with React Native Elements is more about component structure
        than actual design.
      </Text>
    </Card>
  ));
