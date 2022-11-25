import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import MessageCard from '../components/MessageCard';
import Screen from '../components/Screen';
import AppSeparator from '../components/AppSeparator'
import AppText from '../components/AppText';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

function SuccessChangePasswordScreen() {
  return (
    <Screen style={styles.container}>
      <View style={styles.cardContainer}>
        <MessageCard 
          title="Your Password Has Been Changed"
          subtitle="Thank you, please make sure you are not sharing your private data with anyone"
        />
      </View>
      <AppSeparator style={styles.separator}>
        <AppText style={styles.text}>Need help? </AppText>
        <TouchableOpacity onPress={() => console.log('contact us')}>
          <AppText style={[styles.text, {color: colors.orange}]}>Contact Us</AppText>
        </TouchableOpacity>
      </AppSeparator>
      <AppButton 
        title="visit home" 
        uppercase 
        borderColor={colors.black} 
        color={colors.black} 
        style={styles.button}
        onPress={() => console.log('visit home')} 
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
    marginTop: 50
  },
  separator: {
    marginVertical: 20
  },
  text: {
    fontSize: 14,
    color: colors.mediumGray
  },
  button: {
    borderWidth: 1
  }
});

export default SuccessChangePasswordScreen;