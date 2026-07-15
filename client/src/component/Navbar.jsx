import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <>
  <header className="border-b bg-white shadow-sm">
  <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
    <img
    onClick={()=>{navigate('/')}}
      src="/logo.png"
      alt="MindScribe"
      className="h-24 w-auto object-contain"
    />

    <button  onClick={()=>{navigate('/admin')}}  className="rounded-lg bg-black px-6 py-3 text-base font-medium text-white hover:bg-gray-800 transition">
      Login
    </button>
  </div>
</header>
</>
  );
};

export default Navbar;
