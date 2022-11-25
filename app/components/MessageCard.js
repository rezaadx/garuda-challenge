import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import AppText from './AppText';
import colors from '../config/colors';

function MessageCard({ title, subtitle, IconComponent, style }) {
  return (
    <LinearGradient 
      colors={colors.combination}
      style={[styles.card, style]} 
      >
      <View style={styles.iconContainer}>
        {IconComponent}
      </View>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subtitle}>{subtitle}</AppText>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 15,
    height: 350,
    width:'100%',
  },
  iconContainer: {
    flex:0.8,
    justifyContent: 'center',
  },
  title: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: colors.darkGray,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
    paddingHorizontal: 50,
    textAlign: 'center',
  }
})

export default MessageCard;