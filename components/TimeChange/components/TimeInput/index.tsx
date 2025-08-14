import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function TimeInput() {
  return (
    <TextInput
      style={styles.numberInput}
      keyboardType="numeric"
      placeholder="00"
      placeholderTextColor={"#fff"}
      maxLength={2}
    />
  );
}

const styles = StyleSheet.create({
  numberInput: {
    backgroundColor: "transparent",
    fontSize: 54,
    fontWeight: "800",
    color: "#fff",
    margin: 0,
  },
});
