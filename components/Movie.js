import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, Button, ScrollView, Linking, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';
import {API_KEY} from "@env"

export default function Movie({ navigation, route }) {
  const { id } = route.params;
  const [movie, setMovie] = useState([])
  useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/'+ id +'?api_key=' + API_KEY + '&language=en-US&page=1') 
        .then((res) => res.json())
        .then((json) => {
          setMovie(json)
        })
  }, [])


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.image} source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}}></Image>
        <Text style={styles.title}>{movie.title}</Text>
        <Text>{movie.release_date}</Text>
        <Text>{movie.overview}</Text>
        <Text></Text>
        {movie.budget != 0 && 
        <Text>Budget ${movie.budget}</Text>}
        <div style={styles.button}>
        <Button
          color={"#22a6b3"}
          onPress={() => Linking.openURL(movie.homepage)}
          title="Homepage"/>
        </div>
        <div style={styles.button}>
        <Button
          color={"#22a6b3"}
          onPress={() => navigation.navigate("Reviews", {id: id})}
          title="Reviews"/>
        </div>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: "20%",
      marginRight: "20%"
    },
    title: {
      fontSize: 32,
      color: "#22a6b3"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
    },
    date: {
        marginLeft: 5
    },
    scrollView: {
      marginHorizontal: 20
    },
    button: {
      margin: 10
    }
  });

  