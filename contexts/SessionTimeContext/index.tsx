import { Dispatch, JSX, createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type SessionTimeContextType = {
  SessionTime: number | null;
  setSessionTime: Dispatch<React.SetStateAction<number | null>>;

  PauseTime: number | null;
  setPauseTime: Dispatch<React.SetStateAction<number | null>>;

  saveSessionTime: (arg: number) => void;
  savePauseTime: (arg: number) => void;

  isLoading: boolean;
};

export const SessionTimeContext = createContext<SessionTimeContextType>(
  {} as SessionTimeContextType
);

export function SessionTimeProvider({ children }: { children: JSX.Element }) {
  const [SessionTime, setSessionTime] = useState<number | null>(3600);
  const [PauseTime, setPauseTime] = useState<number | null>(60);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTimers = async () => {
      const storedSessionTime = await AsyncStorage.getItem("sessionTime");
      const storedPauseTime = await AsyncStorage.getItem("PauseTime");

      if (storedSessionTime && storedPauseTime) {
        setSessionTime(Number(storedSessionTime));
        setPauseTime(Number(storedPauseTime));
      }

      setIsLoading(false);
    };

    loadTimers();
  }, []);

  async function saveSessionTime(sessionTime: number) {
    setSessionTime(sessionTime);
    await AsyncStorage.setItem("sessionTime", String(sessionTime));
  }

  async function savePauseTime(PauseTime: number) {
    setPauseTime(PauseTime);
    await AsyncStorage.setItem("PauseTime", String(PauseTime));
  }

  return (
    <SessionTimeContext.Provider
      value={{
        SessionTime,
        setSessionTime,
        PauseTime,
        setPauseTime,
        saveSessionTime,
        savePauseTime,
        isLoading,
      }}
    >
      {children}
    </SessionTimeContext.Provider>
  );
}
