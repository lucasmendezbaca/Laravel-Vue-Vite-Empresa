export default async function getCategorias() {
    const response = await axios.get('http://127.0.0.1:8000/api/categorias')
    return response.data.data
}