import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AppForm, AppFormField, AppSubmitButton } from '../components/forms'
import { createPasswordSchema } from '../utils/validationSchemas';
import colors from '../config/colors';
import Screen from '../components/Screen';

function CreatePasswordScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{password: '', confirmPassword: ''}}
        onSubmit={value => console.log(value)}
        validationSchema={createPasswordSchema}
      >
        <View style={styles.formContainer}>
          <AppFormField 
            name='password'
            placeholder='Your password'
            secureTextEntry
            label="Create Password"
            description="Must be 8 or more characters and contain at least 1 uppercase, 1 number and 1 symbol"
          />
          <AppFormField 
            name='confirmPassword'
            placeholder='Verify your password'
            secureTextEntry
            label="Verify Password"
          />
        </View>
        <AppSubmitButton title="Next" uppercase backgroundColor='primary' color='white' width='100%' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white
  },
  formContainer:{
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.lightGray,
    padding: 15,
    backgroundColor: colors.white,
    shadowOpacity: 0.1,
    shadowOffset: { height: 3 },
    shadowRadius: 1,
    marginBottom: 5
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
    width: '70%',
    alignSelf: 'center',
    lineHeight: 25,
  }
})

export default CreatePasswordScreen;