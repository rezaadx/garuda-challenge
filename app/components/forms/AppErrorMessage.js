import React from 'react';
import { StyleSheet } from 'react-native';

import colors from '../../config/colors';
import AppText from '../AppText';

function AppErrorMessage({ error, visible }) {
  if (!visible || !error) return null

  return (
    <AppText style={styles.error}>{error}</AppText>
  );
}

const styles = StyleSheet.create({
  error: {
    color: colors.red,
    fontSize: 14,
    marginTop: 10,
    fontWeight: '400'
  }
})

export default AppErrorMessage;