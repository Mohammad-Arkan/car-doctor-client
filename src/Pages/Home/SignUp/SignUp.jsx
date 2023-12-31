import { useContext } from 'react';
import login from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../Providers/AuthProviders';
const SignUp = () => {
    const {creatUser} = useContext(AuthContex)
    console.log(creatUser)
    const handleSubmit =(event) =>{
        event.preventDefault()
        const form = event.target;       
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        creatUser(email, password)
        .then((result)=> {
            const signupUser = result.user;
            console.log(signupUser)
            form.reset()
        })
        .catch((error)=> {
            console.log(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div className="text-center lg:text-left w-1/2">
    <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl font-bold py-5 text-center">Sign Up</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="Your email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="text" name='password' placeholder="Your password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input className='btn btn-primary' type="submit" value="Sing Up" />
              </div>
            </form> 
            <Link to="/login"> <p className='text-center text-orange-500'>Or Sign in with</p></Link>         
            
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;