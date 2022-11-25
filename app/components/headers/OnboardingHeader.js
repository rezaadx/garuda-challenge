import React from 'react';
import { StyleSheet, Image } from 'react-native';

import AppText from '../AppText';
import AppHeader from './AppHeader';

function OnboardingHeader() {
  return (
    <AppHeader>
      <Image source={require('../../assets/Logogram.png')} style={styles.image} />
      <AppText style={styles.text}>Garuda</AppText>
    </AppHeader>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 30,
    marginVertical: 5,
    width: 30, 
  },
  text: {
    fontSize: 24,
    fontWeight: '300'
  }
});

export default OnboardingHeader;