<template>
    <div class="page">
        <div class="todo-list-box">
            <div v-for="todo in todos" :key="todo.id" class="todo-item">
                <input type="checkbox" v-model="todo.done" />
                <span>{{ todo.content }}</span>
                <button @click="deleteTodo(todo.id)">Delete</button>
            </div>
        </div>
        1
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import Storage from '../storage/storage'
const log = console.log.bind(console)

export default defineComponent({
    components: {},
    props: {
        todos: {
            type: Array,
            default :():Todo[] => [] 

        },
    },
    setup(props) {
        log('props', props.todos)
        let todos = props.todos
        return {
            todos
        }
    },
})
</script>

<style></style>
