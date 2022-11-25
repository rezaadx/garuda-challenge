import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function AppTextInput({ width = "100%", secureTextEntry, onChangeText, error, ...otherProps }) {
  const [ icon, setIcon ] = useState('visibility-off')
  const [ hidden, setHidden ] = useState(secureTextEntry)
  const [ iconColor, setIconColor ] = useState('lightGray')

  // set color when input is invalid/error
  const errorIndicator = error ? { borderColor: 'red', borderWidth: 1, backgroundColor: colors.yellow } : null
  
  // set color when value changes
  const checkValueChange = (value) => {
    if(value != '') return setIconColor('primary')
    setIconColor('lightGray')
  }
  const onChangeHandler = (value) => {
    if(onChangeText) onChangeText(value)
    checkValueChange(value)
  }

  // toggle visibility for password entry
  const toggle = () => {
    if(icon === 'visibility'){
      setIcon('visibility-off')
      setHidden(!hidden)
    } else {
      setIcon('visibility')
      setHidden(!hidden)
    }
  }

  return (
    <View style={[styles.container, errorIndicator]}>
      <TextInput 
        style={styles.textInput}
        secureTextEntry={hidden}
        onChangeText={onChangeHandler}
        {...otherProps}
      />
      {secureTextEntry && <MaterialIcons style={styles.icon} name={icon} size={20} color={colors[iconColor]} onPress={toggle} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 0.2,
    flexDirection: 'row',
    padding: 15,
  },
  icon: {
    marginRight:5
  },
  textInput:{
    flex:1
  }
})

export default AppTextInput;