import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles'

/**
 * to encapsulate text
 * for increasing maintainability and consistency
 */
function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps} >
      {children}
    </Text>
  );
}

export default AppText;