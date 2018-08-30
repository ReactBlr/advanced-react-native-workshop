import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';

class ProductScreen extends React.Component {
  handleBuyNow = () => {
    const { navigation: { state: { params } } } = this.props;
    alert(`Handle buy now for ${params.title}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1E4B3',
  },
});
