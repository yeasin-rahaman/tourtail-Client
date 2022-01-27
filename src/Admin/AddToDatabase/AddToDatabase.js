import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import UseAuth from '../../hooks/UseAuth';
import dataImg from './../../assets/databaseupdate.gif';
import './AddToDatabase.css'


const AddToDatabase = () => {
    const { allContexts } = UseAuth()
    const { user } = allContexts
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.userName = user.displayName
        data.email = user.email
        data.status = 'approved'
        axios.post('http://localhost:5000/blogs', data)

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
                            Admin Database
                        </span>

                        <div className="wrap-input1 validate-input" data-validate="place is required">
                            <input className="input1" placeholder="Name" {...register("place", { required: true, })} />
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="wrap-input1 validate-input" data-validate="url">
                            <input type="text" />
                            <input className="input1" placeholder="Image URL"  {...register("img",)} />
                            <span className="shadow-input1"></span>
                        </div>
                        <div className="wrap-input1 validate-input" data-validate="location is required">
                            <input className="input1" placeholder="Location" {...register("location", { required: true, })} />
                            <span className="shadow-input1"></span>
                        </div>

                        <div className="wrap-input1 validate-input" data-validate="rating is required">
                            <input className="input1" placeholder="Rating" type="number" {...register("rating")} />
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

                        <label htmlFor="">air</label>
                        <input {...register("transportation", { required: true })} type="radio" value="air" />
                        <hr />
                        <label htmlFor="">XCruise</label>
                        <input {...register("transportation", { required: true })} type="radio" value="cruise" />

                        <hr />
                        <label htmlFor="">road</label>
                        <input {...register("transportation", { required: true })} type="radio" value="road" />




                        <div className="container-contact1-form-btn">
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