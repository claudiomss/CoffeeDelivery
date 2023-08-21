import React from "react";
import { Route, Routes  } from "react-router-dom";

import  { Home } from "./pages/home/index.jsx";
// import {Checkout} from "./pages/checkout/index";


export const Routes2 = () => {
   return(
       
       <Routes>
       <Route component = { Home }  path="./home"  />
       {/* <Route component = { Checkout }  path="checkout" /> */}
       </Routes>
       
       
     
   )
}


