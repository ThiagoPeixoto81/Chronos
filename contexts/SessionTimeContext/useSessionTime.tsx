import { useContext } from "react";
import { SessionTimeContext } from ".";

export function useSessionTime() {
  return useContext(SessionTimeContext);
}
