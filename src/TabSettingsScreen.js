import React from 'react';
import { Text, View, Button } from 'react-native';

export default (TabSettingsScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('TabDetails')}
      />
    </View>
  );
});
