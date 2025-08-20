import React from "react";
import { StyleSheet, TextInput } from "react-native";

interface ItimeInput {
  inputValue: string;
  onChange: (e: any) => void;
}

export default function TimeInput({ inputValue, onChange }: ItimeInput) {
  return (
    <TextInput
      style={styles.numberInput}
      keyboardType="numeric"
      placeholderTextColor={"#fff"}
      maxLength={2}
      value={`${inputValue}`}
      onChangeText={(e) => onChange(e)}
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
