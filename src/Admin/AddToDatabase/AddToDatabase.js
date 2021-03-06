import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import UseAuth from '../../hooks/UseAuth';
import dataImg from './../../assets/databaseupdate.gif';
import './AddToDatabase.css'


const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();

const addZero = (num) => `${num}`.padStart(2, '0');

const newTime =
    year +
    '-' +
    addZero(month + 1) +
    '-' +
    addZero(day) +
    ' ' +
    addZero(hours) +
    ':' +
    addZero(minutes);






const AddToDatabase = () => {
    const { allContexts } = UseAuth()
    const { user } = allContexts
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        data.time = newTime
        data.userName = user.displayName
        data.email = user.email
        data.status = 'approved'
        axios.post('https://damp-sierra-91485.herokuapp.com/blogs', data)

            .then(res => {
                if (res.data.insertedId) {
                    alert('Added to Database successfully')
                    reset()
                }
            })
    };





    return (
        <div className="add-service">
            <div className="contact1">
                <div className="container-contact1">
                    <div className="contact1-pic js-tilt" data-tilt="">
                        <img src={dataImg} alt="IMG" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="contact1-form validate-form">

                        <span className="contact1-form-title">
                            Add New Blog
                        </span>

                        <div className="wrap-input1 validate-input" data-validate="place is required">
                            <input className="input1" placeholder="Name" {...register("place", { required: true, })} />
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="wrap-input1 validate-input" data-validate="url">
                            <input className="input1" placeholder="Image URL"  {...register("img",)} />
                            <span className="shadow-input1"></span>
                        </div>
                        <div className="wrap-input1 validate-input" data-validate="location is required">
                            <input className="input1" placeholder="Location" {...register("location", { required: true, })} />
                            <span className="shadow-input1"></span>
                        </div>


                        <div className="wrap-input1 validate-input" data-validate="Subject is required">
                            <input className="input1" placeholder="Price" type="number" {...register("price")} />
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="wrap-input1 validate-input" data-validate="Message is required">
                            <textarea className="input1" placeholder="Description"{...register("desc",)} />
                            <span className="shadow-input1"></span>
                        </div>
                        <h3>Category: </h3>
                        <br />
                        <div className='d-flex align-items-center' >
                            <div className='mx-2'>
                                <label className='pe-2' htmlFor="">Air</label>
                                <input {...register("transportation", { required: true })} type="radio" value="air" />

                            </div>
                            <div className='mx-2'>
                                <label className='pe-2' htmlFor="">Cruise</label>
                                <input {...register("transportation", { required: true })} type="radio" value="cruise" />
                            </div>
                            <div className='mx-2'>
                                <label className='pe-2' htmlFor="">road</label>
                                <input {...register("transportation", { required: true })} type="radio" value="road" />
                            </div>



                        </div>





                        <div className="container-contact1-form-btn mt-4">
                            <button type='submit' className="contact1-form-btn">
                                <span>
                                    Send Data
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddToDatabase;

<input

/>