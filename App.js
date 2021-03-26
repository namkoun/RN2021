/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class myComponent extends React.Component{
  constructor(){
  super()
  state = {
    year:2016,
    name: 'Nader Dabit',
    colors: ['blue']
  }
  }
  render(){
    return(
      <View>
        <Text>my name is: {this.state.name}</Text>
        <Text>the year is: {this.state.year}</Text>
        <Text>my colors: {this.state.colors[0]}</Text>
      </View>
    )
  }
}

export default App;
