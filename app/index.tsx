import { SessionTimeProvider } from "@/contexts/SessionTimeContext";
import { UserChoiceProvider } from "@/contexts/UserChoiceContext";
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
