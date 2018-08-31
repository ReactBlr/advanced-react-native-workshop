import { createStackNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';
import SinglePostScreen from '../screens/SinglePostScreen';
import NewPostScreen from '../screens/NewPostScreen';

export default createStackNavigator({
  Tabs: {
    screen: TabNavigator,
  },
  SinglePost: {
    screen: SinglePostScreen,
  },
  NewPost: {
    screen: NewPostScreen,
  },
}, {
  headerMode: 'none',
  mode: 'modal',
});
