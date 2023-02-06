import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList',{
    // state
    state: () =>({
        todoList: [],
        id: 0
    }),
    // getters

    // actions
    actions:{
        addTodo(item){
            this.todoList.push({item, id: this.id++, completed:false} )
        },
        toggleCompleted(idToFind){
            const todo = this.todoList.find((obj)=> obj.id == idToFind);
            if(todo){
                todo.completed = !todo.completed
            }
        },
        deleteTodo(itemId){
            this.todoList = this.todoList.filter((obj)=>{
                return obj.id != itemId
            })
        }
    }
})