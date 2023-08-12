import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../../Providers/AuthProviders";
const BookService = () => {
    const serviecs = useLoaderData()
    const { title, price, _id, img } = serviecs
    const { user } = useContext(AuthContex)
    const handleBookService = (event) => {
      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const date = form.date.value;
      const email = form.email.value;
      const price = form.price.value;
      const booking = { name, date, email, price, img, serviec_id: _id }
      console.log(booking)
  
      fetch('http://localhost:5000/bookings/', {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.insertedId){
            alert('Service book successfully')
          }
        })
  
  
  
    }
    return (
        <div>
        <h2 className="text-center text-xl font-bold pb-10">Book service:{title} </h2>
        <form onSubmit={handleBookService}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
  
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" defaultValue={user?.email} name="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due to Amount</span>
              </label>
              <input type="text" defaultValue={'$' + price} name="price" className="input input-bordered" />
  
            </div>
          </div>
  
  
          <div className="form-control mt-6">
            <input className="btn btn-block btn-primary" type="submit" value="Submit" />
          </div>
        </form>
  
      </div>
    );
};

export default BookService;