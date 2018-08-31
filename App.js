import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import MyStatusBar from './src/components/MyStatusBar';
import RootNavigation from './src/navigation/RootNavigation';
import color from './src/theme/color';

const showApiCalls = () => {
  const baseUrl = 'http://www.mocky.io/';
  global._fetch = fetch;
  global.fetch = async (uri, options, ...args) => {
    const response = await global._fetch(uri, options, ...args);
    if (uri.includes(baseUrl)) {
      console.log(
        '🔵 API Call: ',
        uri,
        { request: { uri }, response },
      );
    }
    return response;
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);

    if (__DEV__) {
      console.disableYellowBox = true;
      showApiCalls();
    }
  }

  componentDidMount() {
    Linking.addEventListener('url', this._handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleOpenURL);
  }

  _handleOpenURL = (event) => {
    alert('Opened Via Deep Link', event);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MyStatusBar />
        <RootNavigation />
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.greyDarker,
  },
});

TouchableOpacity.defaultProps = {
  ...TouchableOpacity.defaultProps,
  activeOpacity: 0.8,
};
