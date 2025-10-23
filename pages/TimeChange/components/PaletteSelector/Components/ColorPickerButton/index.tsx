import { Pressable, StyleSheet } from "react-native";
import React from "react";

interface IColorPicker {
  color: string;
  onPress: () => void;
}

export default function ColorPickerButton({ color, onPress }: IColorPicker) {
  return (
    <Pressable
      style={[styles.colorpickerButton, { backgroundColor: color }]}
      onPress={onPress}
    ></Pressable>
  );
}

const styles = StyleSheet.create({
  colorpickerButton: {
    height: 25,
    width: 25,
    borderRadius: 50,
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
  },
});
