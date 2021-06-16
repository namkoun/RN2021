import React, {Component} from 'react'
import { View, Text } from 'react-native'
import {styles} from './Styles'

function DataTest(props){
    const {id,name,foo} = props

     
        
 

    
    return(
        <View style={styles.container}>
         <View style={styles.containerbox}>
            <Text style={styles.texth2}>{foo}</Text>
            <Text style={styles.textbox}>==============</Text>
            <Text style={styles.textbox}>학번: {id}</Text>
            <Text style={styles.textbox}>이름: {name}</Text>
         </View>
        </View>

    )
}
export default DataTest;