import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import Movies from './Movies';
import SearchBar from './SearchBar';
import {API_KEY} from "@env";
import { MovieContext } from './MovieProvider';

export default function Home({ navigation }) {    
    return (
        <View style={styles.container}>
            <SearchBar navigation={navigation}/>
            <Movies title="Popular Movies" navigation={navigation} url={'https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY + '&language=en-US&page=1'} context={MovieContext}/>
            <Movies title="Top Rated Movies" navigation={navigation} url={'https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=1'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 32,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    date: {
        marginLeft: 5
    },
    searchBar: {
      flexDirection: "row",
    },
    searchField: {
      width: "60%"
    }
  });