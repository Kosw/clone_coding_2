import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const SCREEN_WIDTH = Dimensions.get('window').width;

export default function App() {
  const [city, setCity] = useState('Loading...');
  const [ok, setOk] = useState(true);
  const [days, setDays] = useState([]);
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });
    setCity(location[0].city);
  };
  


  useEffect(() => {
    ask();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityname}>{city}</Text>
      </View>
      {/* 페이지 넘기는 좋은 기능 */}
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}>
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
  weather: {},
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
