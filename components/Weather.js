import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, StatusBar, Dimensions, ImageBackground } from 'react-native';
import SearchBar from './SearchBar';
import { rainy, sunny, haze, snow } from '../assets/img/Index';

var backgroundImage

export default function Weather(weatherData, fetchWeatherData){
    const [backgroundImage, setBackgroundImage]=useState(null)
    const { weather,
        name,
        main: { temp, humidity },
        wind: { speed } }
        = weatherData
        const [{main}] = weather

    useEffect(()=>{
        setBackgroundImage(getBackgroundImage(main));
    },[weatherData])

    function getBackgroundImage(weather) {
        if(weather === 'Snow'){
            return snow
        }
        if(weather === "Rain"){
            return rainy
        }
        if(weather === "Haze"){
            return haze
        }
        if(weather === "Clear"){
            return sunny
        }
    }
    
    
var textColor= backgroundImage!==sunny ? "lavendar" : "gray"
return(
    <View style={styles.container}>
    <StatusBar backgroundColor='darkgray'/>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage} > 
        <SearchBar fetchWeatherData={fetchWeatherData}/>
        <View style={{alignItems:"center"}}>
            <Text>{name}</Text>
            <Text>{main}</Text>
            <Text>{tempt}</Text>
        </View>
        
        <View style={styles.extraInfo}>
            <Text>Humidity</Text>
            <Text>{humidity}</Text>
            <Text>Wind Speed</Text>
            <Text>{speed}</Text>
        </View>
        
        
        
        </ImageBackground>
</View>
)

}
const styles=StyleSheet.create({
    backgroundImage:{
        resizeMode:"cover",
    },
    container:{
        flex:1,
    }
})