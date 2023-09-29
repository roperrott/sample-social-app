import { RootNavigator } from "./src/navigation/RootNavigator";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}