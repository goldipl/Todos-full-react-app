import {useState, useEffect, useCallback} from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo'

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync(Entypo.font);
      }
      catch (error) {
        console.warn(error)
      } finally {
        setAppIsReady(true)
      }
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if(appIsReady) {
     await SplashScreen.hideAsync()
    }
  }, [appIsReady])


  if(!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text>Open up App.js to start working on your app!</Text>
      <Entypo name={"forward"} size={30}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
