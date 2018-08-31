import React from 'react';
import { StatusBar, View, Platform } from 'react-native';
import color from '../theme/color';

const MyStatusBar = () => (
  <View>
    <StatusBar
      translucent
      backgroundColor={color.greyDarker}
      animated
      barStyle="light-content"
    />
    {Platform.OS === 'android' && Platform.Version >= 20 && (
      <View
        style={{
          height: 24,
          backgroundColor: color.greyDarker,
        }}
      />
    )}
  </View>
);

export default MyStatusBar;
