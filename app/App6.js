/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// 예 2.19
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
  handleClick(){
      this._timeout = setTimeout(()=>{
          this.openWidget();
      },2000);
  
}
componentWillUnmount(){
    clearTimeout(this._timeout);
}
render(){
    return(
        //SomeComponent가 없어서 안됨
        <SomeComponent handleClick={()=> this.handleClick()}></SomeComponent>
    ) 
}
}
export default App;

