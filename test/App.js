import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';



const SCREEN_WIDTH = Dimensions.get('window').width;
//API키 서버에 둬야 안전함 아래와 같은 방법은 안전하않은 그냥 테스트용임
const API_KEY = "28d036a118e483162e7538e1aa7464d0";

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
    // const response = await fetch(
    //   `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}`
    //   ); 이거 유료버전이라 안됨
    setCity(location[0].city);
    const json = await response.json();
    console.log(json);
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
