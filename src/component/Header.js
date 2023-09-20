import React from 'react';

export default function Header() {
  return (
    <div className='bg-warning text-center p-3'>
        <h3>Malabar Gold And Diamond</h3>
        <div className='row justify-content-center pt-2 pb-2'>
            <div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex'>
                <button className='btn btn-primary me-4'>Home</button>
                <input
                className='form-control'
                type='search'
                placeholder='Search....' />
                    <button className='btn btn-primary ms-4'>Cart</button>
            

                </div>
        </div>
    </div>
    
  )
}
