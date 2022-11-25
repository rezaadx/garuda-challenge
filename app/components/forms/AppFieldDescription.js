import React from 'react';
import { StyleSheet } from 'react-native';

import colors from '../../config/colors';
import AppText from '../AppText';

function AppFieldDescription({ description, visible }) {
  if(!visible || !description) return null

  return (
    <AppText style={styles.description}>{description}</AppText>
  );
}

const styles = StyleSheet.create({
  description: {
    fontWeight: '400',
    fontSize: 14,
    color: colors.darkGray,
    marginTop: 5
  }
})

export default AppFieldDescription;