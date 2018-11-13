import React from 'react';
import { Image } from 'react-native';

export default (LogoTitle = () => {
  return (
    <Image
      source={require('../assets/images/spiro.png')}
      style={{ width: 30, height: 30 }}
    />
  );
});
