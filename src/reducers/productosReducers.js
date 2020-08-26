import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    DESCARGAR_PRODUCTOS,
    DESCARGAR_PRODUCTOS_EXITO,
    DESCARGAR_PRODUCTOS_ERROR,
} from '../types';

// CADA REDUCER TIENE SU PROPIO STATE
const initialState = {
    productos: [],
    error: null,
    loading: false,
}

/* si no se pasa un state, se toma el state inicial */
export default (state = initialState, action) => {
    switch (action.type) {
        case DESCARGAR_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: [
                    ...state.productos,
                    action.payload
                ]
            }
        case DESCARGAR_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        /* ACTIONS PARA CONSULTA DE PRODUCTOS */
        case DESCARGAR_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }
        /* SI NO HAY ACCION, SE REGRESA EL STATE */
        default:
            return state;
    }
}