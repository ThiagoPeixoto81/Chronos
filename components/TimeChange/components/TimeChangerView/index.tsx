import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TimeInput from "../TimeInput";

interface TimerChanger {
  underscorelabel: string;
}

export default function TimerChangerView({ underscorelabel }: TimerChanger) {
  return (
    <View style={styles.timerChanger}>
      <View style={styles.inputWrapper}>
        <TimeInput />
        <Text style={styles.colon}>:</Text>
        <TimeInput />
        <Text style={styles.colon}>:</Text>
        <TimeInput />
      </View>

      <View style={styles.underscore}></View>
      <Text style={styles.underscoreText}>{underscorelabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timerChanger: {
    alignItems: "center",
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  numberInput: {
    backgroundColor: "transparent",
    fontSize: 54,
    fontWeight: "800",
    color: "#fff",
    margin: 0,
  },

  colon: {
    fontSize: 54,
    fontWeight: "800",
    color: "#fff",
    paddingBottom: 10,
  },

  underscore: {
    width: 180,
    height: 2,
    backgroundColor: "#fff",
    marginBottom: 8,
  },

  underscoreText: {
    color: "#fff",
    fontSize: 20,
    // fontWeight: "200", Lembrar de diminuir o peso da fonte
  },
});
