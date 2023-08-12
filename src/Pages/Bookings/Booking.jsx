import  { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Providers/AuthProviders';
import BookingRow from './BookingRow';

const Booking = () => {
    const {user} = useContext(AuthContex);
    const [bookings, setBookings] = useState([])

    // const url = `http://localhost:5000/bookings/?email=${user.email}`;

    useEffect(()=> {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setBookings(data)
        })
    },[])
    return (
        <div>
            <h2>Your Booking: {bookings.length}</h2>
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
        <th>Email</th>
        <th>Price</th>
        <th>Service ID</th>
      </tr>
    </thead>
    <tbody>
    {
    bookings.map(booking => <BookingRow
    key={booking._id}
    booking= {booking}
    ></BookingRow>)
    }
     
     
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default Booking;