import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, Button } from 'react-native';
import { useEffect, useState } from 'react';
import {API_KEY} from "@env"

const Item = ({ id, title, releaseDate, image, navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Movie", {id: id})}>
      <View style={styles.item} >
          <Image style={styles.image} source={{uri: 'https://image.tmdb.org/t/p/w500' + image}}></Image>
          <Text>{title}</Text>
          <Text style={styles.date}>{releaseDate}</Text>
      </View>
    </TouchableOpacity>
)

export default function FindMovie({ navigation, route }) {
    const { query } = route.params;
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&language=en-US&query='+ query +'&page=1') 
          .then((res) => res.json())
          .then((json) => {
            setMovies(json.results)
          })
    }, [])

    const renderItem = ({ item }) => (
        <Item navigation={navigation} id={item.id} title={item.title} releaseDate={item.release_date} image={item.poster_path} />
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search Results</Text>
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 32,
    },
    image: {
        width: 150,
        height: 200,
        resizeMode: 'contain',
    }
  });