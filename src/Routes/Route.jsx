import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/SignUp_&_LogIn/Login";
import SignUp from "../Pages/SignUp_&_LogIn/SignUp";
import BookService from "../Pages/BookService";
import Bookings from "../Pages/Bookings";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children : [
                    {
                        path:'/',
                        element: <Home></Home>,
                    },
                    {
                        path:'/login',
                        element: <Login></Login>
                    },
                    {
                        path:'/signup',
                        element: <SignUp></SignUp>
                    },
                    {
                        path:'/book/:id',
                        element: <BookService></BookService>,
                        loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
                    },
                    {
                        path:'/bookings',
                        element: <Bookings></Bookings>,
                    },
                ]
    },
  ]);

export default router;