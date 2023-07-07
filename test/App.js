import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.city}>
          <Text style={styles.cityname}>서울</Text>
        </View>
        <ScrollView style={styles.weather}>
          <View style={styles.day}>
            <View>
              <Text style={styles.temp}>27</Text>
              <Text style={styles.description}>sunny</Text>
            </View>
          </View>
          <View style={styles.day}>
            <View>
              <Text style={styles.temp}>27</Text>
              <Text style={styles.description}>sunny</Text>
            </View>
          </View>
          <View style={styles.day}>
            <View>
              <Text style={styles.temp}>27</Text>
              <Text style={styles.description}>sunny</Text>
            </View>
          </View>
          <View style={styles.day}>
            <View>
              <Text style={styles.temp}>27</Text>
              <Text style={styles.description}>sunny</Text>
            </View>
          </View>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  city: {
    flex: 1.2,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityname: {
    fontSize: 48,
    fontWeight: "500",
  },
  weather: {
    flex: 3,
  },
  day: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    marginTop: 50,
    fontSize: 178,
    fontWeight: "600",
  },
  description: {
    marginTop: -30,
    fontSize: 60,
    fontWeight: "600",
  },
});
