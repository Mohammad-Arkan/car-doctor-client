import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContex } from '../../Providers/AuthProviders';
const Login = () => {
  const {signInUser} = useContext(AuthContex)
  console.log(signInUser)
    const handleSubmit =(event) =>{
        event.preventDefault()
        const form = event.target;       
        
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)

        signInUser(email, password)
        .then((result)=> {
          const loggedUser = result.user;
          console.log(loggedUser)
          form.reset()
        })
        .catch((error) => { 
          console.log(error)
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
            <h1 className="text-3xl font-bold py-5 text-center">Please Sign In</h1>
            <form onSubmit={handleSubmit}>
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
                <input className='btn btn-primary' type="submit" value="Sing In" />
              </div>
            </form> 
            <Link to="/signup"> <p className='text-center text-orange-500'>Or Sign Up with</p></Link>         
            
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;