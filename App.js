import React from 'react';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import ModalScreen from './src/ModalScreen';
import TabHomeScreen from './src/TabHomeScreen';
import TabSettingsScreen from './src/TabSettingsScreen';
import TabDetailsScreen from './src/TabDetailsScreen';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

const MainStack = createStackNavigator(
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

const HomeStack = createStackNavigator({
  TabHome: TabHomeScreen,
  TabDetails: TabDetailsScreen
});

const SettingsStack = createStackNavigator({
  TabSettings: TabSettingsScreen,
  TabDetails: TabDetailsScreen
});

const TabStack = createBottomTabNavigator({
  TabHome: HomeStack,
  TabSettings: SettingsStack
});

const RootStack = createStackNavigator(
  {
    Main: MainStack,
    Tab: TabStack,
    MyModal: ModalScreen
  },
  { mode: 'modal', headerMode: 'none' }
);

export default (App = () => {
  return <RootStack />;
});
