import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import colors from '../config/colors';

function Icon({ name, size = 25, color = 'white', backgroundColor='primary', borderColor = 'light' }) {
  return (
    <View style={[
      styles.icon, 
      {
        backgroundColor: colors[backgroundColor],
        borderColor: colors[borderColor],
        borderRadius: size * 0.5,
        height: size,
        width: size,
      }
    ]}
    >
      <MaterialIcons name={name} color={colors[color]} size={size * 0.5} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    borderWidth: 0.2,
    justifyContent: 'center',
    padding: 2,
  }
})

export default Icon;