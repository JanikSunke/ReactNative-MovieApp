import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image, Button, ScrollView, Linking } from 'react-native';
import { useEffect, useState } from 'react';
import {API_KEY} from "@env"

const Item = ({ id, author, rating, content, navigation }) => (
    <View style={styles.item} >
        <Text style={styles.title}>{author}</Text>
        <Text style={styles.rating} >Rating {rating}/10</Text>
        <View style={styles.container}>
          <Text style={styles.text} >{content}</Text>
        </View>
    </View>
)



export default function Reviews({ navigation, route }) {
    const { id } = route.params;
  const [reviews, setReviews] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/'+ id +'/reviews?api_key=' + API_KEY + '&language=en-US&page=' + page) 
        .then((res) => res.json())
        .then((json) => {
          if (json.results != null) {
          setReviews(json.results)
          setTotalPages(json.total_pages)
          }
        })
  }, [])

  const renderItem = ({ item }) => (
    <Item navigation={navigation} id={item.id} author={item.author} rating={item.author_details.rating} content={item.content} />
  )

  return (
    <View style={styles.container}>
        {totalPages == 0 &&
        <Text style={styles.text}>No Reviews</Text>}
        <FlatList
                data={reviews}
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
      backgroundColor: '#d3d3d3'
    },
    item: {
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 32,
      color: "#22a6b3"
    },
    scrollView: {
      marginHorizontal: 20,
      margin: 10
    },
    rating: {
      fontSize: 22,
      fontWeight: 800,
    }
  });

  