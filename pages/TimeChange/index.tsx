import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import TimerChangerView from "./components/TimeChangerView";
import PaletteSelector from "./components/PaletteSelector";
import { useSessionTime } from "@/contexts/SessionTimeContext/useSessionTime";
import { useUserChoice } from "@/contexts/UserChoiceContext/useUserChoice";
import ImageButton from "./components/ImagePicker";

export default function TimeChange() {
  const { PauseTime, SessionTime } = useSessionTime();
  const { timerImage, saveTimerImage, timerPhrase, savePhrase } =
    useUserChoice();

  const handleChange = (p: any) => {
    savePhrase(p);
  };

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      saveTimerImage(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.generalWrapper}>
      <View style={styles.inputAndImageEntry}>
        <ImageButton onPress={pickImage} timerImage={timerImage} />

        <View>
          <TextInput
            style={styles.numberInput}
            keyboardType="default"
            value={timerPhrase ? timerPhrase : ""}
            maxLength={110}
            multiline={true}
            numberOfLines={4}
            onChangeText={handleChange}
          />

          <View style={styles.underscore}></View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.themeLabel}>Frase</Text>
            <Text style={styles.themeLabel}>{`${
              timerPhrase ? timerPhrase.length : "0"
            }/110`}</Text>
          </View>
        </View>
      </View>

      <View>
        <PaletteSelector />
        <Text style={styles.themeLabel}>Tema</Text>
      </View>

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
    gap: 55,
    width: "80%",
  },

  inputAndImageEntry: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
  },

  themeLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 100,
    fontStyle: "italic",
  },

  numberInput: {
    backgroundColor: "transparent",
    fontSize: 12,
    fontWeight: "500",
    color: "#fff",
    margin: 0,
    height: 96,
    width: 180,
    textAlignVertical: "top",
  },

  underscore: {
    width: 180,
    height: 2,
    backgroundColor: "#fff",
    marginBottom: 8,
  },
});
