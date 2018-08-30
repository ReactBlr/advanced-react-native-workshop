import { createStackNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';
import ProductScreen from '../screens/ProductScreen';

export default createStackNavigator({
  Tabs: {
    screen: TabNavigator,
  },
  Product: {
    screen: ProductScreen,
  },
}, {
  headerMode: 'none',
  mode: 'modal',
});
