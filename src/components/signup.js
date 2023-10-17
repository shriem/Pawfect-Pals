import React from 'react';
import './style.css';
import DoggoIcon from './doggo.png';
import { UserCircleIcon, InboxIcon, LockClosedIcon } from '@heroicons/react/24/solid';

function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-100">
      <div className="text-center mb-8">
        <img src={DoggoIcon} alt="Pawfect Pals" className="w-20 h-20 mb-2 mx-auto" />
        <h2 className="text-orange-500 text-2xl font-semibold">Join Pawfect Pals</h2>
        <p className="text-brown-800 mt-2">A community for pet owners</p>
      </div>
      <form className="bg-orange-200 p-6 rounded-lg shadow-md w-60%">
        <div className="flex items-center mb-4">
          <UserCircleIcon className="text-brown-800 h-8 w-8" />
          <input type="text" placeholder="Username" className="ml-2 p-2 bg-white rounded-md focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center mb-4">
          <InboxIcon className="text-brown-800 h-8 w-8" />
          <input type="email" placeholder="Email" className="ml-2 p-2 bg-white rounded-md focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center mb-4">
          <LockClosedIcon className="text-brown-800 h-8 w-8" />
          <input type="password" placeholder="Password" className="ml-2 p-2 bg-white rounded-md focus:outline-none focus:shadow-outline" />
        </div>
        <button className="bg-brown-800 text-white py-2 px-4 rounded-full transition duration-300 hover:bg-brown-600 focus:outline-none focus:shadow-outline" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;