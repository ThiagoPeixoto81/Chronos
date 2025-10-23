import { Dispatch, JSX, createContext, useState } from "react";

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

  return (
    <UserChoiceContext.Provider
      value={{
        timerImage,
        setTimerImage,
        timerPhrase,
        setTimerPhrase,
        theme,
        setTheme,
      }}
    >
      {children}
    </UserChoiceContext.Provider>
  );
}
