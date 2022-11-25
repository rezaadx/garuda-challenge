import React from 'react';
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput';
import AppText from '../AppText';
import AppErrorMessage from './AppErrorMessage';
import { StyleSheet, View } from 'react-native';
import AppFieldDescription from './AppFieldDescription';

function AppFormField({ name, width, label, description, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext()

  return (
    <View style={styles.container}>
      <AppText style={styles.label}>{label}</AppText>
      <AppTextInput 
        error={errors[name] && touched[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <AppFieldDescription description={description} visible={!errors[name]} />
      <AppErrorMessage style={styles.error} error={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 10,
    paddingBottom: 15,
  },
  label: {
    marginBottom: 10,
  },
  error:{
    marginTop:10
  }
})

export default AppFormField;