import { combineReducers } from "redux";
import productosReducers from './productosReducers'


/* CREA MULTIPLES REDUCERS */
export default combineReducers({
    productos: productosReducers
});