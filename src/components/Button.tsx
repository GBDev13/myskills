import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps;

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: 'bold'
  }
});