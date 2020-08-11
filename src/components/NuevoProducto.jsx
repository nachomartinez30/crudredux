import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
/* ACTION de REDUX */
import { crearNuevoProductoAction } from '../actions/productoAction'

const NuevoProducto = () => {

    /* useDispatch , crea una funcion*/
    const dispatch = useDispatch() /* Dispatch se utiliza para usar la funciones importadas en los actions */
    const agregarProducto = () => dispatch(crearNuevoProductoAction())

    /* manejado de submit */
    const handleSubmit = evento => {
        evento.preventDefault()
        /* validacion de formulario */
        /* si no existen errores */
        /* crear nuevo producto */
        agregarProducto();
    }

    return (
        <div className='row justify-content-center pt-3'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h1 className='text-center mb-4 font-weight-bold'>
                            Agregar Nuevo Producto</h1>

                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className='form-group'>
                                <label className=''>Nombre Producto</label>
                                <input
                                    // required
                                    className='form-control'
                                    type='text'
                                    name='nombre'
                                    placeholder='Nombre producto...'
                                />
                                <label className=''>Precio del producto</label>
                                <input
                                    // required
                                    className='form-control'
                                    type='number'
                                    name='precio'
                                    placeholder='Precio del producto...'
                                />
                            </div>
                            <button
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                                type='submit'
                            >
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoProducto;