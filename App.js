import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './containers/Home';


const Stack = cre

// will be changed how does this work i have no idea ... = varargs maybe im lost ? 
const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    card: "rgb(1, 10, 19)",
    background: "rgb(37, 45, 50)",
    primary: "rgb(255, 255, 255)",
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome' }}
          />
      </Stack.Navigator>
    

    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
