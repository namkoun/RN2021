import React, { Component } from 'react'
import {View, StyleSheet,Text } from 'react-native'


export default class App extends Component {
    render(){
        return(

            <View style={styles.container}>
                <Example style={{borderRadius: 20}}>
                    <CenterText>Example 1:{"\n"}4 Rounded Corners</CenterText>
                </Example>
                <Example style={{borderTopRightRadius: 60,borderBottomRightRadius: 60}}>
                    <CenterText>Example 2:{"\n"}D Shape</CenterText>
                </Example>

                <Example style={{borderTopLeftRadius: 30,borderBottomRightRadius: 30}}>
                    <CenterText>Example 3:{"\n"}Leaf Shape</CenterText>
                </Example>

                <Example style={{borderRadius:60}}>
                    <CenterText>Example 4:{"\n"}Circle</CenterText>
                </Example>

            </View>
        )
    }
}
const Example = (props) =>(
    <View style={[styles.example,props.style]}>
        {props.children}
    </View>
)
const CenterText = (props)=>(
    <Text style={[styles.centerText,props.style]}>
        {props.children}
    </Text>
)
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:75
    },
    example:{
       width:120,
       height:120,
       marginLeft:20,
       marginBottom:20,
       backgroundColor:'grey',
       borderWidth:2,
       justifyContent:'center'
    },
    centerText:{
        textAlign:'center',
        margin:10
    }
})