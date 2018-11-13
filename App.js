import React, { Component } from 'react';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import ModalScreen from './src/ModalScreen';
import { StackNavigator } from 'react-navigation';

const MainStack = StackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const RootStack = StackNavigator(
  {
    Main: MainStack,
    MyModal: ModalScreen
  },
  { mode: 'modal', headerMode: 'none' }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
