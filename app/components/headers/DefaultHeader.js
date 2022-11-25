import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import colors from '../../config/colors';
import AppText from '../AppText';
import Icon from '../Icon';
import AppHeader from './AppHeader';

function DefaultHeader({ navigation, title }) {

  return (
    <AppHeader style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.iconContainer}>
        <Icon name="chevron-left" size={35} color={colors.navy} backgroundColor="white" borderColor='lightGray' style={styles.icon} />
      </TouchableOpacity>
      <View style={{flex: 0.8, alignItems: 'center'}}>
        <AppText style={styles.text}>{title}</AppText>
      </View>
    </AppHeader>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },
  iconContainer: {
    flex: 0.01,
    paddingLeft: 20,
    paddingRight: 70,
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    width: '100%',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textTransform: 'uppercase'
  }
});

export default DefaultHeader;