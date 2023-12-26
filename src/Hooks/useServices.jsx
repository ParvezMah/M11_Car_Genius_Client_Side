import { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServeces] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServeces(data))
    },[])
    return services;
};

export default useServices;