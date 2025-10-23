import { ImageIcon } from "@/components/Icons";
import React from "react";
import {
  View,
  Pressable,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";

interface IimagePicker {
  onPress: () => void;
  timerImage: string | null;
}

export default function ImageButton({ onPress, timerImage }: IimagePicker) {
  return (
    <View style={{ gap: 5 }}>
      {timerImage ? (
        <>
          <Pressable onPress={onPress}>
            <ImageBackground
              source={{ uri: timerImage }}
              style={styles.addImageButton}
              imageStyle={styles.addImageButton}
            >
              <ImageIcon />
            </ImageBackground>
          </Pressable>
          <Text style={styles.themeLabel}>Image</Text>
        </>
      ) : (
        <>
          <Pressable style={styles.addImageButton} onPress={onPress}>
            <ImageIcon />
          </Pressable>
          <Text style={styles.themeLabel}>Image</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  addImageButton: {
    width: 105,
    height: 105,
    borderRadius: 10,
    backgroundColor: "#ffffff20",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  themeLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 100,
    fontStyle: "italic",
  },
});
