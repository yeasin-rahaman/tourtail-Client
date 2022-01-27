import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import './Services.css'
import spinner from './../../assets/Infinity-1s-200px.svg'
import ReactPaginate from 'react-paginate';




const Blogs = () => {
    const [services, setServices] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const [filter, setFilter] = useState('')
    const size = 5;


    useEffect(() => {
        fetch(`http://localhost:5000/blogs?page=${page}&&size=${size}&&filter=${filter}`)
            .then(res => res.json())
            .then(data => {
                setServices(data.blogs)
                const count = data.count;
                const pageNumber = Math.ceil(count / 5)
                setPageCount(pageNumber)
            })
    }, [page, filter])


    const handlePageChange = (data) => {
        setPage(data.selected);
    }
    const handleSelectValue = (e) => {
        setFilter(e.target.value.toLowerCase())
    }


    return (
        <div>
            <div className="row">
                <div >
                    <select onChange={handleSelectValue} className="pending p-2 ">
                        <option defaultValue=''>All</option>
                        <option defaultValue="air">Air</option>
                        <option defaultValue="cruise">cruise</option>
                        <option defaultValue="road">road</option>
                    </select>
                </div>

            </div>
            <h2>{services.desc}</h2>
            <div className="container text-black mt-5 mb-5" >
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.length === 0 ?
                            <div className=" justify-content-center w-100 d-flex">
                                <img src={spinner} alt="" />
                            </div>
                            :

                            services.map(service => <div className="col" key={service._id} >
                                <div className="card custom-cart h-100 hover">
                                    <img src={service.img} className="img-fluid rounded-start w-100" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{service.place}</h5>
                                        <h6 className="card-text"> {service.location}</h6>
                                        <h6 className="card-text"> {service.transportation}</h6>
                                        <h6 className="card-text"> {service.rating}</h6>
                                        <h5 className="card-text"> {service.price}</h5>
                                        <p className="card-text">{service.desc}</p>

                                    </div>
                                    <div className="card-footer  text-center">
                                        <h5 className="text-warning p-2 bg-danger my-2">Price $: {service.price}</h5>
                                        <NavLink to={`/blogs/${service._id}`} className="btn btn-danger btn-lg px-5 text-light   rounded-pill btn-block">BUY</NavLink>

                                    </div>
                                </div>
                            </div>)
                    }

                </div>

                {/* <div className="d-flex mt-5">
                    <div className='mx-auto'>
                        <ul class="pagination"></ul>
                        {
                            [...Array(pageCount).keys()].map(number => <button className={number === page ? 'selected' : ''}
                                key={number}
                                onClick={() => setPage(number)}>{number + 1}</button>)

                        }



                    </div>
                </div> */}


                <div className="d-flex mt-5">
                    <div className='mx-auto'>


                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={3}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            containerClassName='pagination'
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            previousClassName='page-link'
                            nextClassName='page-link'
                            breakClassName='page-item'
                            breakLinkClassName='page-link'
                            activeClassName='active'
                        />

                    </div>
                </div>
            </div >
        </div>
    );
};

export default Blogs;