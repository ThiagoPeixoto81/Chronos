import Actions from "@/pages/Actions";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TimeChange from "@/pages/TimeChange";
import { SessionTimeProvider } from "@/contexts/SessionTimeContext";
import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { UserChoiceProvider } from "@/contexts/UserChoiceContext";
import { useUserChoice } from "@/contexts/UserChoiceContext/useUserChoice";
import App from "./main";

export default function Index() {
  return (
    <UserChoiceProvider>
      <SessionTimeProvider>
        <App />
      </SessionTimeProvider>
    </UserChoiceProvider>
  );
}
