import React, {useState, useEffect} from 'react-native';
import { Text, View, StyleSheet, StatusBar, Dimensions, ImageBackground, TextInput, } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function SearchBar({fetchWeatherData}){
 const [cityName, setCityName] = useState('')

 return(

 <View style={styles.searchBar}>
     <TextInput placeholder="Please eneter city name" value={cityname} onChangeText={(text)=>{
         setCityName(text)
     }}/>
     <EvilIcons name="search" size={28} color="black" onPress={() => fetchWeatherData(cityName)}/>
 </View>

 )
 
}



const styles = StyleSheet.create({
})