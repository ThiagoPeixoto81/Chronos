import React from "react";
import { StyleSheet, Text } from "react-native";

interface Itimer {
  totalseconds: number | null;
}

export default function Timer({ totalseconds }: Itimer) {
  const hours = String(Math.floor(totalseconds! / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalseconds! % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalseconds! % 60).padStart(2, "0");

  return (
    <Text style={styles.timerText}>{`${hours}:${minutes}:${seconds}`}</Text>
  );
}

const styles = StyleSheet.create({
  timerText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 64,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold.ttf",
  },
});
