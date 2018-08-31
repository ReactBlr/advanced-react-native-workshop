import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import color from '../theme/color';

class PostCard extends React.Component {
  state = {};

  render() {
    const { navigation, item } = this.props;
    const { title, description } = item;
    const summary = description.length < 200
      ? description : `${description.slice(0, 200)}...`;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('SinglePost')}
        activeOpacity={0.8}
        style={styles.card}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{summary}</Text>
      </TouchableOpacity>
    );
  }
}

export default PostCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: color.greyLighter,
    marginTop: 16,
    borderRadius: 2,
    elevation: 1,
    padding: 16,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    color: color.greyDarkest,
  },
  content: {
    paddingTop: 16,
    fontSize: 16,
    color: color.greyDarker,
  },
});
