import React from 'react'

const EditarProducto = () => {

    const handleSubmit = event => {
        event.preventDefault()
    }

    return (
        <div className='row justify-content-center pt-3'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h1 className='text-center mb-4 font-weight-bold'>
                            Editar Producto</h1>

                        <form
                            onSubmit={handleSubmit}
                        >
                        {/* FORMULARIO */}
                            <div className='form-group'>
                                <label className=''>Nombre Producto</label>
                                <input
                                    required
                                    className='form-control'
                                    type='text'
                                    name='nombre'
                                    placeholder='Nombre producto...'
                                />
                                <label className=''>Precio del producto</label>
                                <input
                                    required
                                    className='form-control'
                                    type='number'
                                    name='precio'
                                    placeholder='Precio del producto...'
                                />
                            </div>
                            {/* BOTON ENVIO */}
                            <button
                                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                                type='submit'
                            >
                                Editar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default EditarProducto;