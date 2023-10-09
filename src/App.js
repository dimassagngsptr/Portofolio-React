import { HomePage } from "./pages/HomePage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { setData } from "./redux/regist";
import { DashboardPage } from "./pages/Dashboard";
import { Required } from "./components/required";

const router = createBrowserRouter([
   { path: "/", element: <HomePage /> },
   {
      path: "/dashboard",
      element: <Required />,
      children: [{ path: "/dashboard", element: <DashboardPage /> }],
   },
]);

function App() {
   const dispatch = useDispatch();
   let id = localStorage.getItem("id");

   const keepLogin = async () => {
      try {
         let response = await axios.get(`http://localhost:2000/users/${id}`);
         dispatch(setData(response.data));
         console.log(response.data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      keepLogin();
   }, []);
   console.log(id);

   // console.log(id);

   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
