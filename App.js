// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from './components/OnBoarding';
import HomeScreen from './components/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();
const Loading = () => {
  return (
    <View style={styles.LoadingContainerStyle}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};
function App() {
  const [loading, setLoading] = useState(true);
  const [viewedOnBoarding, setViewedOnBoarding] = useState(false);
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnBoarding');

      if (value != null) {
        setViewedOnBoarding(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <NavigationContainer>
      {loading ? (
        <Loading />
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {viewedOnBoarding === false && (
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
          )}
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  LoadingContainerStyle: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
