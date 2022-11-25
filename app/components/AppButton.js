import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../config/colors';

function AppButton({ 
  color = 'primary', 
  backgroundColor = 'white',
  bold,
  borderColor, 
  disable,
  height = 45,
  IconComponent, 
  menuButton,
  onPress, 
  style,
  title, 
  uppercase, 
  width, 
}) {

  //to override font case
  const textTransform = uppercase ? 'uppercase' : 'capitalize'
  //to adjust when the button doesn't have icon
  const paddingRight = IconComponent ? 10 : 0
  //to override when button used as a menu
  const flex = menuButton ? 1 : 0
  //add border width when given border color
  const borderWidth = borderColor ? 0.2 : 0
  //to override fontweight when given
  const fontWeight = bold ? 'bold' : '500'
  //to override when button is disabled
  backgroundColor = disable ? colors.lightGray : colors[backgroundColor]
  color = disable ? colors.darkGray : colors[color]

  return (
    <TouchableOpacity
      disabled={disable}
      style={[ styles.button, { height, width, backgroundColor, borderColor: colors[borderColor], borderWidth }, style]}
      onPress={onPress}>
      <Text style={[{ textTransform, paddingRight, flex, color, fontWeight }]}>{title}</Text>
      {IconComponent}
    </TouchableOpacity>
  );
}

// default styles
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: "center",
    width: "100%",
  },
})

export default AppButton;