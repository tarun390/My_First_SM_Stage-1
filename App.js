import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FaceBookScreen from './screens/fb';
import Ins from './screens/ins';

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop:600 }}>
        <AppContainer style={{ backgroundColor: 'red' }} />
      </View>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  FaceBook: { screen: FaceBookScreen },
  Instagram: { screen: Ins },
});
const AppContainer = createAppContainer(TabNavigator);
