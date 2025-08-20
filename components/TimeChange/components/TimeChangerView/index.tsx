import { FormContext } from "@/contexts/FormContext/FormContext";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TimeInput from "../TimeInput";

interface TimerChanger {
  underscorelabel: string;
  InitialTimer: number | null;
  isSession: boolean;
}

export default function TimerChangerView({
  underscorelabel,
  InitialTimer,
  isSession,
}: TimerChanger) {
  const hoursInitial = String(Math.floor(InitialTimer! / 3600)).padStart(
    2,
    "0"
  );

  const minutesInitial = String(
    Math.floor((InitialTimer! % 3600) / 60)
  ).padStart(2, "0");

  const secondsInitial = String(InitialTimer! % 60).padStart(2, "0");

  const { setPauseTime, setSessionTime } = useContext(FormContext);
  const [hours, setHours] = useState<string>(hoursInitial);
  const [minutes, setMinutes] = useState<string>(minutesInitial);
  const [seconds, setSeconds] = useState<string>(secondsInitial);

  useEffect(() => {
    const totalSeconds =
      Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);

    if (isSession) {
      setSessionTime(totalSeconds);
    } else {
      setPauseTime(totalSeconds);
    }
  }, [hours, minutes, seconds, setSessionTime, setPauseTime, isSession]);

  return (
    <View style={styles.timerChanger}>
      <View style={styles.inputWrapper}>
        <TimeInput inputValue={hours} onChange={(e: string) => setHours(e)} />
        <Text style={styles.colon}>:</Text>

        <TimeInput
          inputValue={minutes}
          onChange={(e: string) => setMinutes(e)}
        />
        <Text style={styles.colon}>:</Text>

        <TimeInput
          inputValue={seconds}
          onChange={(e: string) => setSeconds(e)}
        />
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
