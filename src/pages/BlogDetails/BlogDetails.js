import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import UseAuth from '../../hooks/UseAuth';
import { Carousel } from 'react-bootstrap';
import Rating from 'react-rating';
import './BlogDetails.css'


const BlogDetails = () => {

    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams({});
    const { allContexts } = UseAuth()
    const { user } = allContexts
    const [selected, setSelected] = useState({});

    const [reviews, setReviews] = useState([])



    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setSelected(data)
                reset(data)

            });
    }, [id, reset]);




    useEffect(() => {
        fetch(`http://localhost:5000/review/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setReviews(data)
                reset(data)

            });
    }, [id, reset]);



    const onSubmit = data => {
        data.blogId = id
        data.userName = user.displayName
        data.email = user.email


        fetch(`http://localhost:5000/addReview`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)

                alert('order confirmed')
            });

    };



    return (
        <div className="container custom-body mt-5">
            <div className='row  align-items-center'>
                <div className=" col-md-12">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={selected.img} className="card-img-top w-100 mx-auto img-fluid " alt="..." />
                            </div>

                            <div class="col-md-8">
                                <div class="card-body">
                                    <h2 class="card-title">{selected.place}</h2>
                                    <p class="card-text">{selected.desc}</p>
                                    <p className="card-text"> <b>Transportation:</b>{selected.transportation}</p>
                                    <p className="card-text"><b>Rating :</b>{selected.rating}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>






            </div>












            <div className='row my-5'>
                <div className='col-md-6 add-service d-flex justify-content-center'>
                    <div className=" bg-dark text-white pb-5 pt-1">
                        <div className="text-center pt-5 pb-3">
                            <h1 >Customer Reviews</h1>
                        </div>
                        <hr />
                        <Carousel>
                            {
                                reviews?.map(
                                    review =>
                                        <Carousel.Item key={review._id}>
                                            <div className="d-flex justify-content-center text-center review-slider test">
                                                <div className="w-50">
                                                    <h3 className="color-white">{review?.name}</h3>
                                                    <br />


                                                    <Rating className="star"
                                                        initialRating={Number(review.rating)}
                                                        emptySymbol="far fa-star icon-color"
                                                        fullSymbol="fas fa-star icon-color"
                                                        readonly>

                                                    </Rating>
                                                    <br />

                                                    <p>  {review?.review}</p>
                                                </div>
                                            </div>
                                        </Carousel.Item>
                                )
                            }

                        </Carousel>

                    </div>
                </div>

                <div className='col-md-6 add-service d-flex justify-content-center'>

                    <br />
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="contact1-form validate-form">

                        <div className="wrap-input1 validate-input " data-validate="Name is required">
                            <input className="input1 " value={user.displayName} {...register("name")} />
                        </div>

                        <div className="wrap-input1 validate-input" data-validate="Message is required">
                            <textarea className="input1 " placeholder="Description"{...register("review",)} />
                            <span className="shadow-input1"></span>
                        </div><div className="wrap-input1 validate-input " data-validate="Name is required">
                            <input className="input1 " min="1" max="5" placeholder="rating" type="number" {...register("rating")} />
                        </div>

                        <div className="container-contact1-form-btn">
                            <button type='submit' className="contact1-form-btn">
                                <span>
                                    Post Review
                                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div >

    );
};


export default BlogDetails;

