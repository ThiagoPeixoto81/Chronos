import { View, StyleSheet } from "react-native";
import React from "react";
import ColorPickerButton from "./Components/ColorPickerButton";

export default function PaletteSelector() {
  const palette = [
    { primary: "#212020", secondary: "#242424" },
    { primary: "#8B0000", secondary: "#B70404" },
    { primary: "#B7410E", secondary: "#E84E0B" },
    { primary: "#B8860B", secondary: "#E6A912" },
    { primary: "#006400", secondary: "#029C02" },
    { primary: "#0D3B66", secondary: "#165C9E" },
    { primary: "#4B0082", secondary: "#7404C7" },
    { primary: "#4A0E25", secondary: "#73173B" },
    { primary: "#0E4C57", secondary: "#136978" },
  ];

  return (
    <View style={styles.colorPickerView}>
      {palette.map((colorPair, index) => (
        <ColorPickerButton key={index} color={colorPair.primary} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  colorPickerView: {
    height: 50,
    backgroundColor: "#242424",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 12,
  },
});
