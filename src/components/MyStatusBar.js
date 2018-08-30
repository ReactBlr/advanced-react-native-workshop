import React from 'react';
import { StatusBar, View, Platform } from 'react-native';

const MyStatusBar = () => (
  <View>
    <StatusBar
      translucent
      backgroundColor="#133046"
      animated
      barStyle="light-content"
    />
    {Platform.OS === 'android' && Platform.Version >= 20 && (
      <View
        style={{
          height: 24,
          backgroundColor: '#133046',
        }}
      />
    )}
  </View>
);

export default MyStatusBar;
