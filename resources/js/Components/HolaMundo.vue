<script setup>
    import { ref, onMounted } from 'vue'
    import getCategorias from '../Services/BackendService'

    const categorias = ref([])

    onMounted(async () => {
        categorias.value = await getCategorias()
    })
</script>

<template>
    <div>
        Hola Mundo

        <div>
            <template v-for="categoria in categorias" :key="categoria.id">
                <h3>{{ categoria.nombre }}</h3>
            </template>
        </div>
    </div>
</template>