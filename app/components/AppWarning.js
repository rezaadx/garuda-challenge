import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function AppWarning({ text }) {
  return (
    <View style={styles.container} >
      <AppText style={styles.text}>{text}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pink,
    borderRadius: 5,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  text: {
    color: colors.darkGray,
    fontSize: 14,
    textAlign: 'center',
  }
})

export default AppWarning;