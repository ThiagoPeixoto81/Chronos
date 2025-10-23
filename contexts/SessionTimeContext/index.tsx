import { Dispatch, JSX, createContext, useState } from "react";

export type SessionTimeContextType = {
  SessionTime: number | null;
  setSessionTime: Dispatch<React.SetStateAction<number | null>>;

  PauseTime: number | null;
  setPauseTime: Dispatch<React.SetStateAction<number | null>>;
};

export const SessionTimeContext = createContext<SessionTimeContextType>(
  {} as SessionTimeContextType
);

export function SessionTimeProvider({ children }: { children: JSX.Element }) {
  const [SessionTime, setSessionTime] = useState<number | null>(3600);
  const [PauseTime, setPauseTime] = useState<number | null>(60);

  return (
    <SessionTimeContext.Provider
      value={{ SessionTime, setSessionTime, PauseTime, setPauseTime }}
    >
      {children}
    </SessionTimeContext.Provider>
  );
}
