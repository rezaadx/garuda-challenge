import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import colors from '../../config/colors';

function AppHeader({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.light,
    borderWidth: 1,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
  },
});

export default AppHeader;