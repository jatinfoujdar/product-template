import React from "react";
import{createBrowserRouter, createRoutesFromElements, RouterProvider ,Route } from "react-router-dom";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element={<Layout />}>
      <Route index element = {<Home />}/>
      <Route path ="/cart" element={<Cart />}/>
      <Route path ="/login" element={<Login />}/>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
