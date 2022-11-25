import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import AppSeparator from './AppSeparator';
import AppText from './AppText';

function ContactUs() {
  return (
    <AppSeparator>
      <AppText style={styles.text}>Need help? </AppText>
      <TouchableOpacity>
        <AppText style={[styles.text, {color: colors.orange}]}>Contact Us</AppText>
      </TouchableOpacity>
    </AppSeparator>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.mediumGray,
    fontSize: 14,
  }
})

export default ContactUs;