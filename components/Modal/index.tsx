import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { ClockIcon, SoundOffIcon, SoundOnIcon } from "../Icons";
import { useUserChoice } from "@/contexts/UserChoiceContext/useUserChoice";
import useBell from "@/hooks/useBell";

interface Imodal {
  OnPress: () => void;
}

export default function Modal({ OnPress }: Imodal) {
  const [soundOn, setSoundOn] = useState(true);

  const { theme } = useUserChoice();
  const { playAlarm, stopAlarm } = useBell();

  useEffect(() => {
    if (!soundOn) return;

    const playsong = setInterval(() => {
      if (soundOn) {
        playAlarm();
      }
    }, 5000);

    return () => clearInterval(playsong);
  }, [soundOn, playAlarm]);

  const changeSound = () => {
    if (soundOn) {
      setSoundOn(false);
      stopAlarm();
    } else {
      setSoundOn(true);
    }
  };

  return (
    <View style={[styles.modal, { backgroundColor: theme.secondary }]}>
      <ClockIcon />
      <Text style={styles.timeIsOver}>TEMPO ESGOTADO</Text>

      <Pressable style={styles.nextSessionButton} onPress={OnPress}>
        <Text style={styles.nextSessionText}>Ir para proxima seção</Text>
      </Pressable>

      <Pressable onPress={() => changeSound()}>
        {soundOn ? <SoundOnIcon /> : <SoundOffIcon />}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: "auto",
    width: 270,
    display: "flex",
    alignItems: "center",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    position: "absolute",
    top: "40%",
    left: "50%",
    marginLeft: -135,
    zIndex: 999,
  },

  timeIsOver: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 900,
    marginTop: 12,
  },

  nextSessionButton: {
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 30,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    borderRadius: 5,
  },

  nextSessionText: {
    fontSize: 16,
    fontWeight: 900,
  },
});
