import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'
import clienteAxios from "../config/axios";


/* CREAR NUEVOS PRODUCTOS */

/* NOTAS:
    dispatch => es quien ejecuta las acciones en el reducer
        ->requiere tener un type,y un payload

    payload => siempre modifica al state
*/


/* DISPATCHES DISPONIBLES */
/* ESTRUCTURA PARA REDUCER
    funcion=()=>(*action*)
*/
const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})


export const crearNuevoProductoAction = (producto) => {
    return async (dispatch) => {
        dispatch(agregarProducto())
        /* INSERCION DE DATOS */
        try {
            await clienteAxios.post('/hola', producto);
            /* DISPATCH ENVIA  */
            dispatch(agregarProductoExito(producto))
        } catch (error) {
            debugger
            dispatch(agregarProductoError(true))
        }
    }
}



