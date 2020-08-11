import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'


/* CREAR NUEVOS PRODUCTOS */

/* NOTAS:
    dispatch => es quien ejecuta las acciones en el reducer
        ->requiere tener un type,y un payload

    payload => siempre modifica al state
*/


/* DISPATCHES DISPONIBLES */

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

/* ESTRUCTURA PARA REDUCER
    funcion=()=>(*action*)
*/
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})
const agregarProductoError = () => ({
    type: AGREGAR_PRODUCTO_ERROR,
})


export const crearNuevoProductoAction = (producto) => {
    return (dispatch) => {
        dispatch(agregarProducto())
        /* INSERCION DE DATOS */
        try {
            /* DISPATCH ENVIA  */
            dispatch(agregarProductoExito(producto))
        } catch (error) {
            dispatch(agregarProductoError(true))
        }
    }
}



