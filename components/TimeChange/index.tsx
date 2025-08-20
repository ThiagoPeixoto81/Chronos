import { FormContext } from "@/contexts/FormContext/FormContext";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import TimerChangerView from "./components/TimeChangerView";

export default function TimeChange() {
  const { PauseTime, SessionTime } = useContext(FormContext);

  return (
    <View style={styles.generalWrapper}>
      <TimerChangerView
        underscorelabel="Tempo de Foco"
        InitialTimer={SessionTime}
        isSession={true}
      />

      <TimerChangerView
        underscorelabel="Tempo de Pausa"
        InitialTimer={PauseTime}
        isSession={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  generalWrapper: {
    gap: 75,
  },
});
