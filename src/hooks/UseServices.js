import { useEffect, useState } from 'react';

const UseServices = () => {
    const [services, setServices] = useState([])
    console.log(services)
    useEffect(() => {
        fetch('https://damp-sierra-91485.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setServices(data.blogs))

    }, [])


    return { services, setServices }
};

export default UseServices;