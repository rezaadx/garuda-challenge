import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';

import colors from '../../config/colors';

const { width: windowWidth } = Dimensions.get('window')

function ProgressBar({ current, total }) {
  const BarComponents = []
  for(let index = 1; index <= total; index++){
    const backgroundColor = index <= current ? colors.purple : colors.lightPurple
    const width = (windowWidth/total) - 30

    BarComponents.push(
      <TouchableOpacity style={[styles.bar, { width, backgroundColor }]} key={index.toString()} />
    )
  }
  
  return (
    <View style={styles.container}>{BarComponents}</View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.lightPurple,
    borderRadius: 50,
    height: 8,
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 50,
    width: '100%',
  },
});

export default ProgressBar;