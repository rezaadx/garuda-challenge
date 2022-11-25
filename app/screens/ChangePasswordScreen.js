import React from 'react';
import { StyleSheet, View } from 'react-native';

import { AppForm, AppFormField, AppSubmitButton } from '../components/forms'
import { changePasswordSchema } from '../utils/validationSchemas';
import AppText from '../components/AppText';
import colors from '../config/colors';
import Screen from '../components/Screen';
import routes from '../navigation/routes';

function ChangePasswordScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.title}>Enter Password</AppText>
      <AppText style={styles.subtitle}>Fill your new password on the field below</AppText>
      <AppForm
        initialValues={{oldPassword: '', newPassword: '', confirmPassword: ''}}
        onSubmit={value => navigation.navigate(routes.SUCCESS_CHANGE_PASSWORD)}
        validationSchema={changePasswordSchema}
      >
        <View style={styles.formContainer}>
          <AppFormField 
            name='oldPassword'
            placeholder='Enter Old Password'
            secureTextEntry
            label="Enter Old Password"
          />
          <AppFormField 
            name='newPassword'
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
          <AppSubmitButton title="Change" backgroundColor='primary' color='white' width='40%' icon='ios-key-outline' />
        </View>
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
    shadowRadius: 1
  },
  title: {
    textAlign: 'center',
    marginBottom: 5,
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

export default ChangePasswordScreen;