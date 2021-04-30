import React, {Component} from 'react'
import { View, Text } from 'react-native'

function DataTest(props){
    const {id,name,foo} = props

     fooList = foo.map((foos) => {
        return(
            <Text>{foos}</Text>
        )
    }
        
    );

    
    return(
        <View>
            <Text>학번:{id}</Text>
            <Text>이름:{name}</Text>
              {fooList}
        </View>

    )
}
export default DataTest;