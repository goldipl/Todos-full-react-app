import { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider, QueryClient } from "react-query";

import MainNavigator from "./src/navigation/MainNavigator";
import AuthProvider from "./src/providers/AuthProvider";

const client = new QueryClient();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(Entypo.font);
        // tutaj wszelkie strzaly do api, ktore sa potrzebne do startu apki
        // ewentualnie odzyskiwanie tokena auth
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        <NavigationContainer onReady={onLayoutRootView}>
          <StatusBar style="auto" />
          <MainNavigator />
        </NavigationContainer>
      </AuthProvider>
    </QueryClientProvider>
  );
}
