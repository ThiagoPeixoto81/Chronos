import Actions from "@/components/Actions";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { StatusBar, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Navbar />
      <Actions />
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
