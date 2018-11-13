import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

// Pass params to a route by putting them in an object as a second parameter to the navigation.
// navigate function: this.props.navigation.navigate('RouteName', { /* params go here */ })

// Read the params in your screen component: this.props.navigation.getParam(paramName, defaultValue).

// In order to use params in the title, we need to make navigationOptions a function that returns a configuration object.

export default class DetailsScreen extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : 'A nested Details Screen',
      //   title: navigation.getParam('otherParam', 'A nested Details Screen')
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor
    };
  };
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100)
            })
          }
        />
        {/* It's often necessary to update the navigationOptions configuration
        for the active screen from the mounted screen component itself. */}
        <Button onPress={() => navigation.navigate('Tab')} title="YayTabs!" />
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: 'Updated!' })
          }
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
