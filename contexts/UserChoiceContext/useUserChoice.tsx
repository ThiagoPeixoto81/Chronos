import { useContext } from "react";
import { UserChoiceContext } from ".";

export function useUserChoice() {
  return useContext(UserChoiceContext);
}
