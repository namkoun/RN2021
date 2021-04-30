import React, {Component} from 'react'
import { View , Text } from 'react-native'
import DataTest from './DataTest'

class Midterm extends Component{
    constructor(){
        super()
        this.state={
            name:'김남경',
            id: 201740202,
           
        }

        
    }



    
    render() {
        const foo = [1,2,3,4,5]
        return(
            <View >
                
                <DataTest name={this.state.name} id={this.state.id} foo={foo} />
            </View>
        )
    }



}export default Midterm
