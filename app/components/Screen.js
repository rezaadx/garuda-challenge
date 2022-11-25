import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Platform, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import colors from "../config/colors";

/**
 * To encapsulate other components
 * and make sure they are in the safe area and appropriately positioned
 */
function Screen({ children, style }){
  const [isKeyboardShown, setIsKeyboardShown] = useState(false)

  // these functions are separated on purpose
  // due to onKeyboardDidShow/Hide behaviour triggered multiple times
  const showKeyboard = () => setIsKeyboardShown(true)
  const hideKeyboard = () => setIsKeyboardShown(false)

  return (
    <>
      <SafeAreaView 
        style={styles.screen}
        >
        <KeyboardAwareScrollView 
          contentContainerStyle={styles.scrollable} 
          onKeyboardDidShow={showKeyboard} 
          onKeyboardDidHide={hideKeyboard} 
          scrollEnabled={isKeyboardShown}
          extraScrollHeight={30}
        >
          <ExpoStatusBar style="auto" />
          <View style={[styles.view, style]}>
            { children }
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollable: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
})

export default Screen