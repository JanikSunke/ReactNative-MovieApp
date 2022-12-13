import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';


const Item = ({ id, title, releaseDate, image, navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Movie", {id: id})}>
      <View style={styles.item} >
          <Image style={styles.image} source={{uri: 'https://image.tmdb.org/t/p/w500' + image}}></Image>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.date}>{releaseDate}</Text>
      </View>
    </TouchableOpacity>
)

export default function Movies({ navigation, url, context, title }) {
    const [popularMovies, setPopularMovies] = useState(context ?? [])
    useEffect(() => {
        fetch(url) 
          .then((res) => res.json())
          .then((json) => {
            setPopularMovies(json.results)
          })
    }, [])

    const renderItem = ({ item }) => (
        <Item navigation={navigation} id={item.id} title={item.title} releaseDate={item.release_date} image={item.poster_path} />
    )
    
    return (
        <>
            <Text style={styles.title}>{title}</Text>
            <FlatList style={styles.flatList}
                showsHorizontalScrollIndicator={false} //Ugly scroll on pc
                horizontal
                data={popularMovies}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>
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
      justifyContent: 'center'
    },
    title: {
      fontSize: 32,
      color: "#22a6b3"
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    flatList: {
      width: "100%",
    }
  });