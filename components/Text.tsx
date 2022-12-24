import React from "react";
import { StyleSheet, Text as RNText } from "react-native";
import colors from "../constants/Color";
const styles = StyleSheet.create({
  defaultText: {
    color: colors.primary,
    fontSize: 18,
  },
});
export const Text = ({ children, style = {} }) => {
  const textStyles = [styles.defaultText];
  return <RNText style={textStyles}>{children}</RNText>;
};
