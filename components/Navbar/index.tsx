import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MenuIcon } from "../Icons";

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarText}>Chronos</Text>
      <MenuIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: "80%",
    padding: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#212020",
  },

  navbarText: {
    fontSize: 20,
    fontWeight: "900",
    color: "#FFF",
  },
});
