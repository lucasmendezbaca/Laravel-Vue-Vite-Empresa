<script setup>
    import { ref, onMounted } from 'vue'

    const categorias = ref([])

    const getCategorias = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/categorias')
        categorias.value = response.data.data
    }

    onMounted(getCategorias)
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