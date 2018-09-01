import React from "react";
import { Text, View, Button } from "react-native";
export default class Counter extends React.Component {
  state = {
    count: 0
  };
  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };
  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };
  render() {
    return (
      <View>
        <Text>{this.state.count}</Text>
        <Button testId="increment" title="Increment" onPress={this.increment} />
        <Button testId="decrement" title="Decrement" onPress={this.decrement} />
      </View>
    );
  }
}
