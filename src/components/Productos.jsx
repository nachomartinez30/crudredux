import React, { Fragment, useEffect } from 'react'
/* REDUX */
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { obtenerProductosAction } from '../actions/productoAction'
import Producto from './Producto'

const Productos = () => {
    /* DISPATCH PARA CONSULTAR PRODUCTOS */
    const dispatch = useDispatch()
    /* SELECTOR PARA REDUX */
    const productos = useSelector(state => state.productos.productos)
    const error = useSelector(state => state.productos.error)

    /* consultar API */
    const cargarProductos = () => dispatch(obtenerProductosAction())

    /* CUANDO EL COMPONENTE CARGA TRAE LOS PRODUCTOS */
    useEffect(() => {
        cargarProductos()
    }, [])


    /* MANEJO VER PRODUCTOS */
    const handleVerProductos = () => {

    }

    return (
        <Fragment>
            <h2 className='text-center my-5'>
                Listado de Productos
           </h2>
            <table className='table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length === 0 ?
                        <p className='text-center'>No Hay Productos</p>
                        : (productos.map(item => <Producto key={item.id} data={item} />)
                        )}
                </tbody>
            </table>
        </Fragment>
    );
}

export default Productos;