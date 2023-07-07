import React from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const SCREEN_WIDTH = Dimensions.get('window').width;
// console.log(SCREEN_WIDTH);
export default function App() {
  return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.city}>
          <Text style={styles.cityname}>서울</Text>
        </View>
        {/* 페이지 넘기는 좋은 기능 */}
        <ScrollView 
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          // indicatorStyle='white'
          contentContainerstyle={styles.weather}>
             {/* 페이지 넘기는 좋은 기능 */}
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
  },
  day: {
    width: SCREEN_WIDTH,
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
