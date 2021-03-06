import React from 'react';
import { Text, View, Button } from 'react-native';

export default (TabHomeScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('TabDetails')}
      />
    </View>
  );
});
