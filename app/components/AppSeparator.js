import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';

function AppSeparator({children, width = '90%', borderWidth = 0.5, style}) {
  return (
    <View style={style}>
      <View style={[styles.line, { width, borderWidth }]} />
      <View style={styles.textContainer}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    alignSelf: 'center',
    borderColor: colors.lightGray
  },
  textContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: -10,
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
})

export default AppSeparator;