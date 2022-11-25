import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppWarning from '../components/AppWarning';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon'
import routes from '../navigation/routes';

function SecurityAccessScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.menu}>
      <AppText style={styles.text}>Edit Your Information</AppText>
      <AppButton 
        title="Change My PIN" 
        menuButton 
        bold
        color='black'
        borderColor='lightGray'
        style={styles.button} 
        IconComponent={<Icon name='mode-edit' backgroundColor={colors.white} color='blue' />} />
      <AppButton 
        title="Change My Password" 
        menuButton
        bold
        color='black'
        borderColor='lightGray'
        style={styles.button} 
        onPress={() => navigation.navigate(routes.CHANGE_PASSWORD)}
        IconComponent={<Icon name='mode-edit' backgroundColor={colors.white} color='blue' />} />
      </View>
      <AppWarning style={styles.warning} text="Please be sure to keep your information to yourself only" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 20
  },
  text: {
    fontSize: 14,
    color: colors.mediumGray,
    fontWeight: '600',
    paddingBottom: 15
  },
  button: {
    height: 55,
    marginVertical: 5
  },
  warning: {
    alignSelf: 'flex-end'
  },
  menu: {
    flex: 1
  },
})

export default SecurityAccessScreen;