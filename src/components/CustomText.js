import React from "react";
import { Text } from "react-native";
export default class HeaderText extends React.Component {
  render() {
    const { header } = this.props;
    const fontFamily = header ? "Roboto" : "serif";
    return <Text style={{ fontFamily }}>{this.props.children}</Text>;
  }
}
