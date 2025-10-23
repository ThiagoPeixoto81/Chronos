import { Dispatch, JSX, createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type UserChoiceContextType = {
  timerImage: string | null;
  setTimerImage: Dispatch<React.SetStateAction<string | null>>;

  timerPhrase: string | null;
  setTimerPhrase: Dispatch<React.SetStateAction<string | null>>;

  theme: {
    primary: string;
    secondary: string;
  };
  setTheme: Dispatch<
    React.SetStateAction<{
      primary: string;
      secondary: string;
    }>
  >;

  saveTimerImage: (arg: string) => void;

  savePhrase: (arg: string) => void;

  saveColors: (arg: { primary: string; secondary: string }) => void;
};

export const UserChoiceContext = createContext<UserChoiceContextType>(
  {} as UserChoiceContextType
);

export function UserChoiceProvider({ children }: { children: JSX.Element }) {
  const [timerImage, setTimerImage] = useState<string | null>(null);
  const [timerPhrase, setTimerPhrase] = useState<string | null>(null);
  const [theme, setTheme] = useState<{ primary: string; secondary: string }>({
    primary: "#212020",
    secondary: "#242424",
  });

  useEffect(() => {
    const loadUser = async () => {
      const storedImage = await AsyncStorage.getItem("timerImage");
      const storedPhrase = await AsyncStorage.getItem("phrase");
      const StoredThemePrimaryColor = await AsyncStorage.getItem(
        "primaryColor"
      );
      const StoredThemeSecondaryColor = await AsyncStorage.getItem(
        "secondaryColor"
      );

      if (StoredThemePrimaryColor && StoredThemeSecondaryColor) {
        setTheme({
          primary: StoredThemePrimaryColor,
          secondary: StoredThemeSecondaryColor,
        });
      }

      if (storedImage) {
        setTimerImage(storedImage);
      }

      if (storedPhrase) {
        setTimerPhrase(storedPhrase);
      }
    };

    loadUser();
  }, []);

  async function saveTimerImage(timerImage: string) {
    setTimerImage(timerImage);
    await AsyncStorage.setItem("timerImage", timerImage);
  }

  async function savePhrase(phrase: string) {
    setTimerPhrase(phrase);
    await AsyncStorage.setItem("phrase", phrase);
  }

  async function saveColors(colors: { primary: string; secondary: string }) {
    setTheme(colors);
    await AsyncStorage.setItem("primaryColor", colors.primary);
    await AsyncStorage.setItem("secondaryColor", colors.secondary);
  }

  return (
    <UserChoiceContext.Provider
      value={{
        timerImage,
        setTimerImage,
        timerPhrase,
        setTimerPhrase,
        theme,
        setTheme,
        saveTimerImage,
        savePhrase,
        saveColors,
      }}
    >
      {children}
    </UserChoiceContext.Provider>
  );
}
