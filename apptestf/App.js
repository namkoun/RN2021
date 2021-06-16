import React, {Component} from 'react'

import RenderCom from './RenderCom'

class App extends Component{
    constructor(){
        super()
        this.state={
            name:'김남경',
            id: 201740202,   
        }  
    }

    render() {
      
        return( 
            <RenderCom name={this.state.name} id={this.state.id} foo={'기말 평가'} />
            )
    }



}export default App