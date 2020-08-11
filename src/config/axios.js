import axios from 'axios'

const configuraciones = {
    baseURL: 'http://localhost:4000',
}
const clienteAxios = axios.create(configuraciones)

export default clienteAxios