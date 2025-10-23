import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useUserChoice } from "@/contexts/UserChoiceContext/useUserChoice";
import Actions from "@/pages/Actions";
import TimeChange from "@/pages/TimeChange";
import React, { useState } from "react";
import { View, StatusBar, StyleSheet } from "react-native";

export default function App() {
  const [open, setOpen] = useState(false);
  const { theme } = useUserChoice();

  const toggleOpen = () => {
    if (open) {
      setOpen(false);
      return;
    }

    setOpen(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.primary }]}>
      <StatusBar hidden />
      <Navbar OnPress={toggleOpen} open={open} />
      {open ? <TimeChange /> : <Actions />}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 60,
    // fontFamily: "Inter",
  },
});
