import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { PlayIcon, SkipIcon } from "../Icons";

export default function Actions() {
  return (
    <View style={{ width: "80%", gap: 36 }}>
      <ImageBackground
        style={styles.actions}
        imageStyle={styles.imgBack}
        source={require("../../assets/images/batman.jpg")}
      >
        <Text style={styles.timerText}>1:59:00</Text>
        <Text style={styles.quote}>vulgar display of power</Text>
      </ImageBackground>

      <View style={styles.buttonsWrapper}>
        <Pressable style={styles.button}>
          <PlayIcon />
        </Pressable>

        <Pressable style={styles.button}>
          <SkipIcon />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    width: "100%",
    height: 330,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    // backgroundColor: "#fff",
  },

  navbarText: {
    fontSize: 20,
    fontWeight: "900",
    color: "#FFF",
  },

  imgBack: {
    borderRadius: 30,
    opacity: 0.4,
  },

  timerText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 64,
    fontWeight: "bold",
  },

  quote: {
    textAlign: "center",
    color: "#ffffff40",
    fontSize: 11,
    fontWeight: "400",
    position: "absolute",
    bottom: 50,
  },

  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    width: 145,
    height: 145,
    backgroundColor: "#242424",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
