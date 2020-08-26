import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    DESCARGAR_PRODUCTOS,
    DESCARGAR_PRODUCTOS_EXITO,
    DESCARGAR_PRODUCTOS_ERROR,
} from '../types';

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";


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
/* Funciones para CREARNUEVOPRODUCTOACTION */
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

/* Funciones para OBTENERPRODUCTOSACTION */
const descargarProductos = () => ({
    type: DESCARGAR_PRODUCTOS,
    payload: true,
})
const descargarProductosExito = (productos) => ({
    type: DESCARGAR_PRODUCTOS_EXITO,
    payload: productos,
})
const descargarProductosError = () => ({
    type: DESCARGAR_PRODUCTOS_ERROR,
    payload: true,
})

/* ACTIONS */
export const obtenerProductosAction = () => {
    return async (dispatch) => {
        dispatch(descargarProductos())
        try {
            const resp = await clienteAxios.get('/productos');
            /* DISPATCH ENVIA DATOS A PRODUCTOS EXITOSA */
            dispatch(descargarProductosExito(resp.data))
            Swal.fire(
                'Correcto',
                'se cargaron exitosamente',
                'success'
            )
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Intente de nuevo...',
            })
            dispatch(descargarProductosError(true))
        }
    }
}

export const crearNuevoProductoAction = (producto) => {
    return async (dispatch) => {
        dispatch(agregarProducto())
        /* INSERCION DE DATOS */
        try {
            await clienteAxios.post('/productos', producto);
            /* DISPATCH ENVIA  */
            dispatch(agregarProductoExito(producto))
            Swal.fire(
                'Correcto',
                'el producto se agregó correctamente',
                'success'
            )
        } catch (error) {
            dispatch(agregarProductoError(true))
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Intente de nuevo...',
            })
        }
    }
}



