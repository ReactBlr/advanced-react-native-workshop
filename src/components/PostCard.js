import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

class PostCard extends React.Component {
  state = {};

  render() {
    const { navigation } = this.props;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('SinglePost')}
        activeOpacity={0.8}
        style={styles.card}
      />
    );
  }
}

export default PostCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginTop: 16,
    borderRadius: 2,
    elevation: 1,
    flexDirection: 'row',
    padding: 8,
  },
  image: {
    height: 120,
    width: 120,
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
  },
  price: {
    paddingTop: 8,
    fontSize: 16,
  },
  soldOutText: {
    paddingTop: 8,
    color: '#fc6c85',
    fontWeight: '500',
  },
});
