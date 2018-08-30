import { createBottomTabNavigator } from 'react-navigation';
import TabBar from '../components/TabBar';

import FeedScreen from '../screens/FeedScreen';
import LoginScreen from '../screens/LoginScreen';

export default createBottomTabNavigator(
  {
    Home: {
      screen: FeedScreen,
    },
    Profile: {
      screen: LoginScreen,
    },
  },
  { tabBarComponent: TabBar },
);
