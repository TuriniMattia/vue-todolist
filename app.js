

const { createApp } = Vue

const todoItems = [
    {
        text : 'devo fare i compiti',
        done : false,
    },
    {
        text : 'devo fare la spesa',
        done : false,
    },
    {
        text : 'devo pagare le bollette',
        done : false,
    },
]

createApp({
  data() {
    return {
      todos: todoItems,
      inputValue : ''
    }
  },
  methods: {
    deleteItem(index){
        this.todos.splice(index, 1)
    },
    addTodo(){
       

        if(this.inputValue !== ''){
            const item = {
                text : this.inputValue,
                done : false
            }
            this.todos.push(item);
            this.inputValue = ''

        }
        
    }
  }
}).mount('#app')


