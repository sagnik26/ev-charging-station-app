import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import * as SecureStore from "expo-secure-store";

SplashScreen.preventAutoHideAsync();

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ClerkProvider
     tokenCache={tokenCache}
     publishableKey={'pk_test_YWNjZXB0ZWQtamF3ZmlzaC0xNS5jbGVyay5hY2NvdW50cy5kZXYk'}
    >
      <View style={styles.container} onLayout={onLayoutRootView}>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
      <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
      </SignedIn>

      <StatusBar style='auto' />
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 20,
    alignItems: 'center',
    width: 100
  },
});
