import React from "react";
import { StyleSheet, View } from "react-native";
import TimerChangerView from "./components/TimeChangerView";

export default function TimeChange() {
  return (
    <View style={styles.generalWrapper}>
      <TimerChangerView underscorelabel="Tempo de Foco" />
      <TimerChangerView underscorelabel="Tempo de Pausa" />
    </View>
  );
}

const styles = StyleSheet.create({
  generalWrapper: {
    gap: 75,
  },
});
