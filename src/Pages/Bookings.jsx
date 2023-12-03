import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/Authprovider";
import BookingsRow from "./BookingsRow";

const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    console.log('Bookings : ', bookings);

    // const url = `http://localhost:5000/bookings?email=parvezmahmudaa100@gmail.com&sort=1`
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data=> setBookings(data))
    },[])

    return (
        <div>
            <h3 className="text-3xl text-center font-bold my-10">Your Bookings : {bookings.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingsRow
                                    key={booking._id}
                                    booking={booking}
                            >
                            </BookingsRow>)
                        }
                    </tbody>
                 </table>
            </div>
        </div>
    );
};

export default Bookings;