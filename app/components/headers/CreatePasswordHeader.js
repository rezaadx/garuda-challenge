import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import colors from '../../config/colors';
import AppText from '../AppText';
import Icon from '../Icon';
import AppHeader from './AppHeader';
import ProgressBar from './ProgressBar';

function CreatePasswordHeader({ navigation, appProgress }) {
  const { current, total } = appProgress
  
  return (
    <AppHeader style={styles.container}>
      <View style={styles.sectionWrapper}>
        <View style={styles.upperSection}>
          <TouchableOpacity onPress={navigation.goBack} style={styles.iconContainer}>
            <Icon name="chevron-left" size={35} color={colors.navy} backgroundColor="white" borderColor='lightGray' style={styles.icon} />
          </TouchableOpacity>
          <AppText style={styles.text}>create new password</AppText>
        </View>
        <ProgressBar current={current} total={total} />
      </View>
    </AppHeader>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: 'flex-start',
  },
  iconContainer: {
    paddingLeft: 20,
    paddingRight: 40
  },
  sectionWrapper:{
    paddingTop: 10
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    textTransform: 'uppercase'
  },
  upperSection:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
});

export default CreatePasswordHeader;