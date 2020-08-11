import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'

/* CREAR NUEVOS PRODUCTOS */

export const crearNuevoProductoAction = () => {
    return () => { 
        /* manda REQUEST para insertar a la base de datos */
        console.log('desde action'); 
    }
}