import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import color from '../theme/color';

class FeedScreen extends React.Component {
  state={};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            {'Ipsum Diary'}
          </Text>
        </View>
      </View>
    );
  }
}

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.greyLight,
  },
  headerContainer: {
    backgroundColor: color.greyDark,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
  },
  headerText: {
    color: color.greyLighter,
    marginLeft: 8,
    fontWeight: '600',
    fontSize: 24,
  },
});
