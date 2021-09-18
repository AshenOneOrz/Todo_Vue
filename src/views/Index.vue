<template>
    <div class="page">
        <div class="todo-add-box">
            <input type="text" v-model="content" />
            <button @click="addTodo">Add</button>
        </div>
        <div class="todo-list-box">
            <div v-for="todo in todos" :key="todo.id" class="todo-item">
                <input type="checkbox" v-model="todo.done" />
                <span>{{ todo.content }}</span>
                <button @click="deleteTodo(todo.id)">Delete</button>
            </div>
        </div>
        <todo-list :todos='todos'></todo-list>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import Storage from '../storage/storage'
import TodoList from '../components/TodoList.vue'
const log = console.log.bind(console)

export default defineComponent({
    components: {
        TodoList,
    },
    setup() {
        let content = ref('')
        let todos = ref<Todo[]>(Storage.get('todos') || [])

        watch(todos, (newValue, oldValue) => {
            Storage.set('todos', newValue)
        }, {
            deep: true,
            immediate: true,
        })

        const addTodo = (): void => {
            let t = {
                id: todos.value.length,
                content: content.value,
                done: false,
            }
            todos.value.push(t)
        }

        const deleteTodo = (id: number): void => {
            todos.value = todos.value.filter((todo: Todo): boolean => {
                return todo.id !== id
            })
        }

        return {
            content,
            todos,
            addTodo,
            deleteTodo,
        }
    },
})
</script>

<style></style>
