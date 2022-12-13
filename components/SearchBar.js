import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from 'react-native';


export default function searchBar({ navigation }) {
    const [search, setSearch] = useState('')
    return (
        <View style={styles.searchBar}>
            <TextInput style={styles.searchField}
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
            />
            <Button color="#22a6b3" title="Search" onPress={() => navigation.navigate("Search Results", {query: search})} />
        </View>
    )
  }

  
const styles = StyleSheet.create({
    searchBar: {
      flexDirection: "row",
    },
    searchField: {
      width: "60%"
    }
  });