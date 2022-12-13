import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Navigation } from './components/Index';
import { MovieProvider } from './components/MovieProvider';

export default function App() {
  
  return (
    <View style={styles.container}>
      <MovieProvider>
        <Navigation />
        <StatusBar style="auto" />
      </MovieProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
