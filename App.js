import React, { Component } from 'react';
import HomeScreen from './src/HomeScreen';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: HomeScreen
});

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
