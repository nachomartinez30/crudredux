import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import reducer from './reducers'

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
        /* HERRAMIENTAS PARA DEBUGGER REDUX https://github.com/zalmoxisus/redux-devtools-extension */
        /* si no es un objeto, y no esta instalado redux dev tools, retorna f */
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__()
            :
            f => f
    )
);

export default store;