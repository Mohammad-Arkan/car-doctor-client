import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import AddCar from "../AddCar/AddCar";
import BookService from "../Pages/BookService/BookService";
// import Bookings from "../Pages/Bookings/Booking";
import PrivateRoute from "../Providers/PrivateRoute";
// import Booking from "../Pages/Bookings/Booking";
import Bookings from "../Pages/Bookings/Bookings";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:'/add',
          element:<AddCar></AddCar>
        },
        {
          path:"/bookservice/:id",
          element:<BookService></BookService>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
          
        },
        // {
        //   path:"/booking",
        //   element:<PrivateRoute><Booking></Booking></PrivateRoute>
        // },
        {
          path:"/bookings",
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
       
      ]
    },
  ]);
  export default router;