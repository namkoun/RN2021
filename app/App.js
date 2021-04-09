import React, {Component} from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

class App extends Component{
    render() {
        return(
            <View style={Styles.container}>
                <ScrollView keyboardShouldPersistTaps='always'  style={Styles.content}>

                </ScrollView>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5'
    },
    content:{
        flex:1,
        paddingTop:60
    }
})
export default App