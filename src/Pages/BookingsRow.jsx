const BookingsRow = ({booking}) => {
    console.log('booking : ', booking);

    const {customerName, email, date, price, service, img} = booking;

    return (
        <div>   
            <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Image</th>
                        <th>Service</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <td>
                            <div className="avatar">
                                <div className="rounded w-20 h-20">
                                    {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                                </div>
                            </div>
                        </td>
                        <td>
                            {service}
                        </td>
                        <td>{email}</td>
                        <td>${price}</td>
                        <td>{date}</td>
                        <th>
                        <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
 

                    </tbody>
                    
                </table>            
        </div>
    );
};

export default BookingsRow;