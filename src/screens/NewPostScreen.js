import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import color from '../theme/color';

class NewPostScreen extends React.Component {
  handleBuyNow = () => {
    const { navigation: { state: { params } } } = this.props;
    alert(`Handle buy now for ${params.title}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>
          New Post Screen
        </Text>
      </View>
    );
  }
}

export default NewPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.greyLighter,
  },
});
