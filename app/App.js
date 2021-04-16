import React, {Component} from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Button from './Button'
import Heading from './Heading'
import Input from './Input'
import TodoList from './TodoList'

let todoIndex = 0

class App extends Component{
    constructor(){
        super()
        this.state={
            inputValue:'',
            todos:[],
            type:'All',
            
        }
        this.submitTodo=this.submitTodo.bind(this)
        this.toggleComlete = this.toggleComlete.bind(this)
    }
    inputChange(inputValue){
        console.log('input: ',inputValue)
        this.setState({inputValue})
    }
    submitTodo (){
        if (this.state.inputValue.match(/^\s*$/)){
            return //비워있으면 아무것도 반환하지 않고
        }
        const todo = { // 비어있지 않으면 todo 변수를 생성해서 다음의 객체를 할당한다
            title:this.state.inputValue,
            todoIndex,
            complete:false
        }
        todoIndex++ //인덱스 증가
        const todos=[...this.state.todos, todo] //새로운 todo를 기존 배열에 추가
        this.setState({todos, inputValue:''},()=>{ //todo의 state를 지정해 갱신된 배열의
            console.log('State: ',this.state)       // inputvalue를 빈 문자열로 재지정
        })
    }
    

    
    
    deleteTodo (todoIndex){
        let {todos}= this.state
        todos = todos.filter((todo) => todo.todoIndex !==todoIndex)
        this.setState({todos})
    }
    toggleComlete (todoIndex){
        let todos = this.state.todos

todos.forEach((todo) =>{
    if(todo.todoIndex ===todoIndex){
        todo.complete = !todo.complete
    }
})    
this.setState({todos})
}

    render() {
        const {inputValue, todos}=this.state
        return(
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='always' 
                 style={styles.content}>
                <Heading />
                <Input 
                inputValue={inputValue}
                inputChange={(text) => this.inputChange(text)} />
                <TodoList todos={todos} />
                <Button submitTodo={this.submitTodo}></Button>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5'
    },
    content:{
        flex:1,
        paddingTop:50
    }
})
export default App