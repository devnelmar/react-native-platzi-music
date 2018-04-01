/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const imagen = 'https://lastfm-img2.akamaized.net/i/u/300x300/31a51f6e3ec647c8997150ec837891c7.png'
    const name = 'David Guetta'
    const likes = 200
    const comentarios = 85

    return (
      <View style={styles.container}>
        <View style={styles.artistbox}>
          <Image style={styles.image} source={{uri: imagen}}/>
          <View style={styles.info}>
              <Text style={styles.name}>{name}</Text>
              <Icon name="heart" size={30} color="#900" />
              <Text>{likes}</Text>
              <Icon name="comments" size={30} color="#900" />
              <Text>{comentarios}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  artistbox: {
    backgroundColor: 'white',
    paddingTop: 50,
    flexDirection: 'row'
  },
  image: {
    width: 150,
    height: 150,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  name:{
    fontSize: 20,
    marginTop: 10,
  }
});
