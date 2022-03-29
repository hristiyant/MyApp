import React, { useEffect, useState } from 'react';
import {View, Text, Button, TextInput,ActivityIndicator, FlatList,} from 'react-native';
import axios from 'axios';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// function HomeScreen({ navigation, route }) {
//   React.useEffect(() => {
//     if (route.params?.post) {
//       // Post updated, do something with `route.params.post`
//       // For example, send the post to the server
//     }
//   }, [route.params?.post]);

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Create post"
//         onPress={() => navigation.navigate('CreatePost')}
//       />
//       <Button
//         title="Go to Movies"
//         onPress={() => navigation.navigate('Movies')}
//       />
//       <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
//     </View>
//   );
// }

// const CreatePostScreen = ({ navigation, route }) =>{
//   const [postText, setPostText] = React.useState('');

//   return (
//     <>
//       <TextInput
//         multiline
//         placeholder="What's on your mind?"
//         style={{ height: 200, padding: 10, backgroundColor: 'white' }}
//         value={postText}
//         onChangeText={setPostText}
//       />
//       <Button
//         title="Done"
//         onPress={() => {
//           // Pass and merge params back to home screen
//           navigation.navigate({
//             name: 'Home',
//             params: { post: postText },
//             merge: true,
//           });
//         }}
//       />
//     </>
//   );
// }

// const DetailsScreen = ({route, navigation}) => {
//   const { itemId, otherParam } = route.params;
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Text>itemId: {JSON.stringify(itemId)}</Text>
//       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() =>
//           navigation.push('Details', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

// const MoviesScreen = ({route, navigation}) => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
//       'X-RapidAPI-Key': '513670069fmsh0494a7ab3f665adp1f056cjsn495b094cd96c'
//     }
//   };

//   const getMovies = async () => {
//     try {
//      const response = await fetch('https://reactnative.dev/movies.json');
//      const json = await response.json();
//      setData(json.movies);
//    } catch (error) {
//      console.error(error);
//    } finally {
//      setLoading(false);
//    }
//  }

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <View style={{ flex: 1, padding: 24 }}>
//       {isLoading ? <ActivityIndicator/> : (
//         <FlatList
//           data={data}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//             <Text>{item.title}, {item.releaseYear}</Text>
//           )}
//         />
//       )}
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await axios.get('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>
  );
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen 
  //       name="Home" 
  //       component={HomeScreen}
  //       options={{ title: 'Overview' }} />
  //       <Stack.Screen name="Details" component={DetailsScreen} />
  //       <Stack.Screen name="CreatePost" component={CreatePostScreen} />
  //       <Stack.Screen name="Movies" component={MoviesScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
}

export default App;
