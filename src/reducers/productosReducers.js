// CADA REDUCER TIENE SU PROPIO STATE
const initialState = {
    productos: [],
    error: null,
    loading: false,
}

/* si no se pasa un state, se toma el state inicial */
export default (state = initialState, action) => {
    switch (action.type) {

        /* SI NO HAY ACCION, SE REGRESA EL STATE */
        default:
            return state;
    }
}