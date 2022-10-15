import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const clearOnBoarding = async () => {
  try {
    await AsyncStorage.removeItem('@viewedOnBoarding');
  } catch (err) {
    console.log(err);
  }
};
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={clearOnBoarding}>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({});
