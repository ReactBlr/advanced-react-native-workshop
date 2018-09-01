import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
  Platform,
  Linking,
} from 'react-native';
import PostCard from '../components/PostCard';
import color from '../theme/color';
import config from '../config';
// import shuffle from '../utils/shuffle';

const GET_DATA_URL = `${config.baseUrl}/posts`;

class FeedScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      url: '',
      data: [],
    };
  }

  async componentDidMount() {
    this.callApi();

    if (Platform.OS === 'android') {
      const url = await Linking.getInitialURL();
      this.setUrlText(url);
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }

  handleOpenURL = (event) => {
    this.setUrlText(event.url);
  }

  setUrlText = (url) => this.setState({ url })

  callApi = async () => {
    try {
      const response = await fetch(GET_DATA_URL);
      const data = await response.json();
      // data = shuffle(data);
      this.setState({ isLoading: false, data });
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    const { navigation } = this.props;
    const { isLoading, data, url } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            {'Ipsum Diary'}
          </Text>
          <Text style={styles.urlText}>
            {url}
          </Text>
        </View>
        {
          isLoading ? (
            <ActivityIndicator
              style={styles.activityIndicator}
              size="large"
            />
          ) : (
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <PostCard
                  navigation={navigation}
                  post={item}
                />
              )}
              onRefresh={this.callApi}
              refreshing={isLoading}
            />
          )
        }
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
    justifyContent: 'space-between',
  },
  headerText: {
    color: color.greyLighter,
    marginLeft: 8,
    fontWeight: '600',
    fontSize: 24,
  },
  urlText: {
    color: color.greyLighter,
    marginRight: 8,
  },
  activityIndicator: {
    paddingTop: 40,
  },
});
