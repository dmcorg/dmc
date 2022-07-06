<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    methods: {
        
    },

    data() {
        return {
            url: "[db]://..."
        };
    }
});
</script>

<template>
    <h4 title="The database name">Name</h4>
    <input type="text" placeholder="Spiderman Fans Website" />
    <h4 title="Select database type">Database</h4>
    <select>
        <option>PostgreSQL</option>
        <option>Mongodb</option>
        <option>Redis</option>
        <option>Supabase</option>
        <option>Firebase</option>
    </select>
    <h4 title="The database password">Password</h4>
    <input type="password" placeholder="Password" />
    <h4 title="The database password">Database URL</h4>
    <span><input type="password" :placeholder="[[ url ]]" /></span>
    <br>
    <br>
    <button>Create</button>
</template>
