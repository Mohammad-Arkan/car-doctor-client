import Swal from "sweetalert2";


const AddCar = () => {
    const handleAddCoffee=(event)=>{
        event.preventDefault()


        const form = event.target;


        const name = form.name.value;
        const price = form.price.value;
        const here = form.here.value;
        const type = form.type.value;
        const message = form.message.value;

        const newCar = { name, price, here, type, message}
        console.log(newCar)

        //send data to the server
        fetch('http://localhost:5000/services',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newCar)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
  title: 'Success!',
  text: 'User Added Successfully',
  icon: 'success',
  confirmButtonText: 'Ok'
})
            }

        })
    }

    return (
        <div className='bg-[#fff8e2]'>
         
            <form onSubmit={handleAddCoffee}>
                <div className='p-24'>
                <h2 className='text-3xl font-bold mb-4'>Add New CAR</h2>
                {/* coffee name, coffee quantity */}
                <div className='flex gap-4 mb-8'>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Service Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Service Name" name='name' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Service Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Service Price" name='price' className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                 {/*  Supplier, Taste quantity */}
                <div className='flex gap-4 mb-8'>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Text here</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Text here" name='here' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Service Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Service Type" name='type' className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
               
                <div className=' mb-8'>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-semibold text-xl">Product Description</span>
                    </label>
                    <label className="input-group">
                        {/* <input type="text" placeholder="Product Description " name='desc' className="input input-bordered w-full" /> */}
                        <textarea name="message" className="p-5" id="" cols="150" rows="10" placeholder="Product Description"></textarea>
                    </label>
                </div>
               
                </div>
                <input type="submit" value="Submit" className='btn btn-primary w-full' />
                </div>
               
               
               
            </form>
        </div>

    );
};

export default AddCar;