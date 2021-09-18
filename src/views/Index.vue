<template>
    <div class="page">
        <div class="todo-add-box">
            <input type="text" v-model="value" />
            <button @click="addTodo">Add</button>
        </div>
        <div class="todo-list-box">
            <div v-for="todo in todos" :key="todo.id" class="todo-item">
                <input type="checkbox" v-model="todo.done" />
                <span>{{ todo.todo }}</span>
                <button @click="deleteTodo(todo.id)">Delete</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
const log = console.log.bind(console)

export default defineComponent({
    components: {},
    setup() {
        let value = ref('')
        let todos = ref<Todo[]>([])
        
        const addTodo = (): void => {
            let t = {
                id: todos.value.length,
                todo: value.value,
                done: false,
            }
            todos.value.push(t)
        }

        const deleteTodo = (id:number): void => {
            todos.value = todos.value.filter((todo:Todo):boolean => {
                return todo.id !== id
            })
        }

        return {
            value,
            todos,
            addTodo,
            deleteTodo,
        }
    },
})
</script>

<style></style>
