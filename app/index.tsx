import Actions from "@/components/Actions";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TimeChange from "@/components/TimeChange";

import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

export default function Index() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    if (open) {
      setOpen(false);
      return;
    }

    setOpen(true);
  };

  return (
    <View style={styles.container}>
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
    backgroundColor: "#212020",
    paddingVertical: 60,
    // fontFamily: "Inter",
  },
});
