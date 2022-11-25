import { Platform } from "react-native";

import colors from "./colors";

/**
 * Storing default style for text (AppText component)
 */

export default {
  colors,
  text: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
    // fontFamily: Platform.OS === 'android' ? "Roboto" : 'Helvetica Neue',
  }
}