import React from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import MyStatusBar from "./src/components/MyStatusBar";
import RootNavigation from "./src/navigation/RootNavigation";
import FlatListDemo from "./src/screens/FlatListScreen";
import color from "./src/theme/color";
import "./ReactotronConfig";

class App extends React.Component {
  constructor(props) {
    super(props);

    if (__DEV__) {
      console.disableYellowBox = true;
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MyStatusBar />
        {/* <RootNavigation /> */}
        <FlatListDemo />
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white
  }
});

TouchableOpacity.defaultProps = {
  ...TouchableOpacity.defaultProps,
  activeOpacity: 0.8
};
