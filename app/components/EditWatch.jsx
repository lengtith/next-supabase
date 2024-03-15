'use client'
import React, { useState } from 'react'
import { updateWatch } from '../server-actions/updateWatch';

export default function EditWatch({ watch }) {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        id: watch.id,
        brand: watch.brand,
        model: watch.model,
        referenceNumber: watch.reference_number
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <button
                onClick={() => setShowModal(true)} className="bg-gray-600 hover:bg-gray-300 text-white hover:text-black font-bold px-3 py-2 rounded-md">Edit</button>
            {
                showModal && (
                    <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center p-5'>
                        <div className='modal-content bg-gray-900 p-6 rounded-lg w-full max-w-md'>
                            <span onClick={() => setShowModal(false)} className='close text-white text-xl leading-none hover:text-gray-300 cursor-pointer'>&times;</span>
                            <form action={updateWatch} onSubmit={() => setShowModal(false)} className='mt-4'>
                                <input type="hidden" name='id' value={watch.id} />
                                <div className='mb-5'>
                                    <label htmlFor="brand">Brand</label>
                                    <input type="text" id='brand' name='brand' value={formData.brand} onChange={handleChange} className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-4" />
                                </div>
                                <div className='mb-5'>
                                    <label htmlFor="model">Model</label>
                                    <input type="text" id='model' name='model' value={formData.model} onChange={handleChange} className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-4" />
                                </div>
                                <div className='mb-5'>
                                    <label htmlFor="referenceNumber">Reference Number</label>
                                    <input type="text" id='referenceNumber' name='referenceNumber' value={formData.referenceNumber} onChange={handleChange} className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-4" />
                                </div>
                                <button type='submit' className="bg-gray-600 hover:bg-gray-300 text-white hover:text-black font-bold px-3 py-2 rounded-md">Update Watch</button>
                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
