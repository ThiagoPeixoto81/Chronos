import { Dispatch, JSX, createContext, useState } from "react";

export type FormContextType = {
  SessionTime: number | null;
  setSessionTime: Dispatch<React.SetStateAction<number | null>>;

  PauseTime: number | null;
  setPauseTime: Dispatch<React.SetStateAction<number | null>>;
};

export const FormContext = createContext<FormContextType>(
  {} as FormContextType
);

export function FormProvider({ children }: { children: JSX.Element }) {
  const [SessionTime, setSessionTime] = useState<number | null>(3600);
  const [PauseTime, setPauseTime] = useState<number | null>(60);

  return (
    <FormContext.Provider
      value={{ SessionTime, setSessionTime, PauseTime, setPauseTime }}
    >
      {children}
    </FormContext.Provider>
  );
}
