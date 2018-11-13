import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import LogoTitle from './LogoTitle';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: <LogoTitle />,
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#ffffff"
        />
      ),
      headerRight: (
        <Button onPress={params.increaseCount} title="+1" color="ffffff" />
      )
    };
  };

  componentDidMount() {
    // setParams: make changes to route's params
    this.props.navigation.setParams({ increaseCount: this._increseCount });
  }

  state = {
    count: 0
  };

  _increseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details');
          }}
        />
      </View>
    );
  }
}
