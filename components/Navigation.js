import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Movie from "./Movie";
import Reviews from "./Reviews";
import FindMovie from "./FindMovie";

const Stack = createNativeStackNavigator();

const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      card: '#22a6b3',
      background: '#d3d3d3',
      text: "white"
    },
  };

export default function Navigation(props) {
    return (
        <NavigationContainer theme={Theme}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Movie" component={Movie}/>
                <Stack.Screen name="Reviews" component={Reviews} />
                <Stack.Screen name="Search Results" component={FindMovie}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}