import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { CloseIcon, MenuIcon } from "../Icons";

interface INavbar {
  OnPress: () => void;
  open: boolean;
}

export default function Navbar({ OnPress, open }: INavbar) {
  return (
    <View style={styles.navbar}>
      <Image source={require("../../assets/images/logo.png")} />
      <Pressable onPress={OnPress}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </Pressable>
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
});
