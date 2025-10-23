import React, { useContext, useRef, useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { PauseIcon, PlayIcon, SkipIcon } from "../../components/Icons";
import { useSessionTime } from "@/contexts/SessionTimeContext/useSessionTime";
import Timer from "./components/Timer";
import useBell from "@/hooks/useBell";
import { useUserChoice } from "@/contexts/UserChoiceContext/useUserChoice";

export default function Actions() {
  const { PauseTime, SessionTime } = useSessionTime();
  const [pause, setPause] = useState<boolean>(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const timerRef = useRef<null | number>(null);
  const [timer, setTimer] = useState<number | null>(SessionTime);
  const { playAlarm } = useBell();
  const { theme, timerPhrase, timerImage } = useUserChoice();

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toggleTimerType = () => {
    setTimerRunning(false);

    if (pause) {
      setTimer(SessionTime);
      setPause(false);
      return;
    }

    setPause(true);
    setTimer(PauseTime);
    clear();
  };

  const toggleTimer = () => {
    if (timerRef.current) {
      clear();
      return;
    }

    setTimerRunning(true);

    const id = setInterval(() => {
      setTimer((oldState) => {
        if (oldState === 0) {
          clear();
          playAlarm();
          if (pause) {
            return PauseTime;
          }
          return SessionTime;
        }

        return oldState! - 1;
      });
    }, 1000);
    timerRef.current = Number(id);
  };

  return (
    <View style={{ width: "80%", gap: 36 }}>
      <View style={[styles.actions, { backgroundColor: theme.secondary }]}>
        <Timer totalseconds={timer}></Timer>
        <Text style={styles.quote}>{timerPhrase}</Text>
      </View>

      <View style={styles.buttonsWrapper}>
        <Pressable
          style={[styles.button, { backgroundColor: theme.secondary }]}
          onPress={toggleTimer}
        >
          {timerRunning ? <PauseIcon /> : <PlayIcon />}
        </Pressable>

        <Pressable
          style={[styles.button, { backgroundColor: theme.secondary }]}
          onPress={toggleTimerType}
        >
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
  },

  imgBack: {
    borderRadius: 30,
    opacity: 0.4,
  },

  quote: {
    textAlign: "center",
    color: "#ffffff60",
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
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
