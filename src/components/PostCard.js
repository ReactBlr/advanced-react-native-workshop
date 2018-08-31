import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import color from '../theme/color';

class PostCard extends React.Component {
  state = {};

  onCardPress = () => {
    const { post, navigation } = this.props;
    navigation.navigate('SinglePost', post);
  }

  render() {
    const { post } = this.props;
    const { title, description } = post;
    const summary = description.length < 200
      ? description : `${description.slice(0, 200)}...`;

    return (
      <TouchableOpacity
        onPress={this.onCardPress}
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
