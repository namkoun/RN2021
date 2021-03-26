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

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      year: 2021,
      leapYear: true,
      name: 'Sang Jun Park',
      topics: ['React', 'React Native', 'JavaScript'],
      info: {
        paperback: true,
        length: '335 pages',
        type: 'programming',
      }
    }
  }
  
  render() {
    let leapyear = <Text>this is not a leapyear!</Text>
    if (this.state.leapYear) {
      leapyear = <Text>this is a leapyear</Text>
    }
    return(
      <View>
        <Text>
        the year is : { this.state.year }

        </Text>
        <Text>length: {this.state.info.length} </Text>
        <Text>type: {this.state.info.type} </Text>     
        <Text>topics: {this.state.topics[1]} </Text>  
        {leapyear}  
      </View>
    )
  }
}

export default App;
