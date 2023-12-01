import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";

const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    // const url = `http://localhost:5000/bookings?email=parvezmahmudaa100@gmail.com&sort=1`
    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data=>{
            console.log(data);
        })
    },[])

    return (
        <div>
            <h3 className="text-3xl text-center font-bold my-10">Bookings Page : </h3>
        </div>
    );
};

export default Bookings;