import { Pressable, StyleSheet } from "react-native";
import React from "react";

interface IColorPicker {
  color: string;
}

export default function ColorPickerButton({ color }: IColorPicker) {
  return (
    <Pressable
      style={[styles.colorpickerButton, { backgroundColor: color }]}
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
