import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View, TextInput, ScrollView, Image, StatusBar, TouchableOpacity, ImageBackground } from "react-native";
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IMAGENAME from "./assets/profile.png";

// import HomeScreen from './src/screens/';
// import DetailMovies from './src/screens/DetailMovies';
// import ProfileSaya from './src/screens/Profile';

const BASE_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=1ad77130';

const Profile = () => {
  return (
      <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle={'light-content'} backgroundColor="#212121" />
          <ImageBackground
              source={{
                  uri: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
              }}
              style={{ flex: 0.5 }}
              resizeMode={'cover'}>
              <View style={{ flex: 0.5 }}></View>
          </ImageBackground>
          <View style={{ flex: 1, backgroundColor: '#0BA2D7' }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                      source={
                          IMAGENAME
                      }
                      style={{
                          width: 100,
                          height: 100,
                          borderRadius: 100 / 2,
                          borderWidth: 3,
                          borderColor: '#FFFFFF',
                          position: 'absolute',
                          zIndex: 2,
                      }}
                  />
              </View>
              <View style={{ marginTop: 60 }}>
                  <Text
                      style={{
                          fontWeight: 'bold',
                          fontSize: 18,
                          backgroundColor: "#15122F",
                          textAlign: 'center',
                          color: 'white',
                      }}>
                      Naufal Rotif Dewanto
                  </Text>
                  <Text style={{ textAlign: 'center', backgroundColor: "#15122F", color: "white" }}>
                      120140107
                  </Text>
                  <View style={{
                      marginLeft: 80,
                      zIndex: 2,
                      alignSelf: 'center',
                  }}>
                      <View
                          style={{
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginTop: 20,
                          }}>
                          <View
                              style={{
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  width: 40,
                                  height: 40,
                              }}>
                              <Icon name="mobile-alt" size={25} color="#212121" />
                          </View>
                          <View style={{ justifyContent: 'center', marginLeft: 10, flex: 1 }}>
                              <Text style={{ fontWeight: 'bold' }}>+62895-1011-9506</Text>
                          </View>
                      </View>
                      <View
                          style={{
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                          }}>
                          <View
                              style={{
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  width: 40,
                                  height: 40,
                              }}>
                              <Icon name="map-marker-alt" size={25} color="#212121" />
                          </View>
                          <View style={{ justifyContent: 'center', marginLeft: 10, flex: 1 }}>
                              <Text style={{ fontWeight: 'bold' }}>Depok</Text>
                          </View>
                      </View>
                      <View
                          style={{
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                          }}>
                          <View
                              style={{
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  width: 40,
                                  height: 40,
                              }}>
                              <Icon name="envelope" size={25} color="#212121" />
                          </View>
                          <View style={{ justifyContent: 'center', marginLeft: 10, flex: 1 }}>
                              <Text style={{ fontWeight: 'bold' }}>
                                  naufal.120140107@student.itera.ac.id
                              </Text>
                          </View>
                      </View>
                  </View>
                  <View
                      style={{ flexDirection: 'row', marginTop: 40, marginHorizontal: 30, backgroundColor: "#15122F", }}>
                      <TouchableOpacity
                          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => Linking.openURL('https://www.facebook.com/naufal.dewanto.501/')}>
                          <Icon name="facebook" size={25} color="#bdbdbd" />
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => Linking.openURL('https://www.instagram.com/dewantonaufal/')}>
                          <Icon name="instagram" size={25} color="#bdbdbd" />
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => Linking.openURL('https://github.com/naufaldewanto37')}>
                          <Icon name="github" size={25} color="#bdbdbd" />
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => Linking.openURL('https://twitter.com/Naufaldewanto2')}>
                          <Icon name="twitter" size={25} color="#bdbdbd" />
                      </TouchableOpacity>
                      <TouchableOpacity
                          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => Linking.openURL('https://www.linkedin.com/in/naufal-rotif-dewanto-440b83251/')}>
                          <Icon name="linkedin" size={25} color="#bdbdbd" />
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
      </SafeAreaView>
  );
};

const DetailMovies = ({ route, navigation }) => {
  const { moviesId } = route.params;
  const [state, setState] = useState({
      s: "",
      results: [],
      selected: {}
  });
  const setup = moviesId => {
      axios("http://www.omdbapi.com/?i=" + moviesId + "&apikey=1ad77130").then(({ data }) => {
          let result = data;
          setState(prevState => {
              return { ...prevState, selected: result }
          });
      });
  }

  useEffect(() => {
      setup(moviesId);
  });

  return (
      <View style={stylesDetail.container}>
          <View style={stylesDetail.heading}>
              <Text style={{ color: "#FFF", fontWeight: "700", fontSize: 18 }}>{state.selected.Title} {'\n'}</Text>
              <Text style={stylesDetail.textHeading}>
                  {state.selected.Year} <View />
                  {state.selected.Rated} <View />
                  {state.selected.Runtime}
              </Text>
          </View>
          <View style={stylesDetail.content}>
              <Image
                  source={{ uri: state.selected.Poster }}
                  style={{
                      marginTop: 20,
                      marginBottom: 20,
                      width: 300,
                      height: 300
                  }}
                  resizeMode="cover"
              />
          </View>
          <View style={stylesDetail.results}>
              <Text style={stylesDetail.textResults}>Genre: {state.selected.Genre}</Text>
              <Text style={stylesDetail.textResults}>{state.selected.Plot}</Text>
              <Text style={stylesDetail.textResults}>Director: {state.selected.Director}</Text>
              <Text style={stylesDetail.textResults}>Writer: {state.selected.Writer}</Text>
              <Text style={stylesDetail.textResults}>Stars: {state.selected.Actors}</Text>
          </View>
      </View>
  );
};

function HomeScreen({ navigation }) {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const search = () => {
    axios(BASE_URL + "&s=" + state.s).then(({ data }) => {
      let results = data.Search
      setState(prevState => {
        return { ...prevState, results: results }
      })
    })
  }

  return (
    <View style={stylesHome.container}>
      <Text style={stylesHome.tittle}>ReviewFilm</Text>
      <Text style={{
        position: 'absolute',
        zIndex: 2,
        alignSelf: 'flex-end',
      }} 
      onPress={() => navigation.navigate('Profile')}><Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png" }}
        style={{
          width: 60,
          height: 60,
          borderRadius: 100 / 2,
          borderWidth: 3,
          borderColor: '#FFFFFF',
        }}
        /></Text>
      <TextInput
        style={stylesHome.kotaksearch}
        onChangeText={text => setState(prevState => {
          return { ...prevState, s: text }
        })}
        placeholder="Judul Film"
        onSubmitEditing={search}
        value={state.s}
      />

      <ScrollView style={stylesHome.results}>
        {state.results.map(hasil => (
          <View key={hasil.imdbID} style={stylesHome.result}>
            <Image
              source={{ uri: hasil.Poster }}
              style={{
                width: 300,
                height: 300
              }}
              resizeMode="cover"
            />
            <Text
              style={stylesHome.heading}
              key={hasil.imdbID}
              onPress={() => navigation.navigate("Detail", { moviesId: hasil.imdbID })}>
              {hasil.Title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const Stack = createStackNavigator();

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aeaeff',
  },
  tittle: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20
  },
  kotaksearch: {
    fontSize: 20,
    fontWeight: '300',
    padding: 20,
    width: 20,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 40,
    textAlign: 'center'
  },
  results: {
    flex: 1,
  },
  result: {
    flex: 1,
    width: 300,
    marginBottom: 20
  },
  heading: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    padding: 20,
    backgroundColor: '#445565'
  },
});

const stylesDetail = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#badaff',
  },
  tittle: {
      color: '#FFF',
      fontSize: 32,
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: 20
  },
  results: {
      backgroundColor: '#61afef',
  },
  textResults: {
      fontSize: 18,
      color: 'black',
      marginBottom: 8
  },
  heading: {
      flexDirection: 'column',
      flexWrap: 'wrap',
      padding: 20,
      backgroundColor: '#61afef'
  },
  textHeading: {
      color: 'gray',
      fontSize: 14,
  },
  content: {
      alignItems: 'center',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ReviewFilm' }} />
        <Stack.Screen name="Detail" component={DetailMovies} options={{ title: 'Detail Film' }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profiles'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
