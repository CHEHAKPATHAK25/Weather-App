import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground, SafeAreaView, Image, ActivityIndicator, Animated } from 'react-native';
import Constants from 'expo-constants';
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

const api_key = "3aaf73df1f2e5924cdfe9786e6e4db90";


export default function App() {

  /* create state*/
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  /*function to fetch api*/
  async function fetchWeatherData(cityName) {
    setLoaded(false);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${api_key}`

    try {
      var response = fetch(API);
      if (response.status == 200) {
        const data = await response.json()
        setWeatherData(data);
      }
      else {
        setWeatherData(null)
      }
      setLoaded(true)
    } catch (error) {
      console.log("Error")
    }

  }

  useEffect(() => {
    fetchWeatherData("Delhi")
  }, [])



  if (!loaded) {
    return (
      <View style={styles.container}><ActivityIndicator size="large" color="#982878" /></View>

    )
  }
  else if (weatherData===null){
    return(
      <View>
      <SearchBar fetchWeatherData={fetchWeatherData}/>
      <Text>The city does not exist..Please enter a valid city name</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeAreaView} />
      <ImageBackground source={require("./assets/BACKGROUND_IMAGE.jpeg")} style={styles.backgroundImage}>

<Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData}/>

        <View style-={styles.title}>
          <Text style={styles.titleText}>Weather App</Text>
          <Image source={require("./assets/WEATHER_IMAGE.png")} style={styles.titleImage} />
        </View>


      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    margin: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 30,
    fontFamily: "jokerman",
    color: "black",
    backgroundColor: "white",
    borderRadius: 10,
    fontWeight: "bold",
    marginLeft: 110,
    alignSelf: "center",
    marginTop: 50,

  },
  droidSafeAreaView: {
    //marginTop: Platform.OS ==== "android"? Statu
  },
  backgroundImage: {
    resizeMode: "contain",
    flex: 1,
  },
  titleImage: {
    marginTop: -65,
    marginLeft: 20,
    width: 80,
    height: 80,
    zIndex: -1,
    borderRadius: 30,
  },
});
