import { FormContext } from "@/contexts/FormContext/FormContext";
import React, { useContext, useRef, useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { PauseIcon, PlayIcon, SkipIcon } from "../Icons";
import Timer from "./components/Timer";

export default function Actions() {
  const { PauseTime, SessionTime } = useContext(FormContext);

  const [pause, setPause] = useState<boolean>(false);
  const [timerRunning, setTimerRunning] = useState(false);
  const timerRef = useRef<null | number>(null);
  const [timer, setTimer] = useState<number | null>(SessionTime);

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
          if (pause) {
            return PauseTime;
          }
          return SessionTime;
        }

        return oldState! - 1;
      });
    }, 1000);
    timerRef.current = id;
  };

  return (
    <View style={{ width: "80%", gap: 36 }}>
      <ImageBackground
        style={styles.actions}
        imageStyle={styles.imgBack}
        source={require("../../assets/images/batman.jpg")}
      >
        <Timer totalseconds={timer}></Timer>
        <Text style={styles.quote}>vulgar display of power</Text>
      </ImageBackground>

      <View style={styles.buttonsWrapper}>
        <Pressable style={styles.button} onPress={toggleTimer}>
          {timerRunning ? <PauseIcon /> : <PlayIcon />}
        </Pressable>

        <Pressable style={styles.button} onPress={toggleTimerType}>
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

  imgBack: {
    borderRadius: 30,
    opacity: 0.4,
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
