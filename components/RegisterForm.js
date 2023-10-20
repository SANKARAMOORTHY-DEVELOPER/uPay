import { useStateContext } from '../context';
import React, { useState } from 'react'
import { useRouter } from 'next/router';

const RegisterForm = () => {
    const router=useRouter();
    const {addRegistration,setRegistering,registering}=useStateContext();
    // console.log(data);
    const [registrationState,setRegistrationState]=useState({
        "Name":'',
        "Token":''
    });
    const handleChange=(e)=>{
        const {name,value}=e.target;
        console.log(name,value);
        setRegistrationState({...registrationState,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addRegistration(registrationState);
        console.log("form is submitted");
        setRegistering(false);
        console.log(registering);
        router.push('/merchant')
    }
  return (
    <div className="max-w-md mx-auto mt-4 p-4 bg-[#00288a] text-neutral-white  rounded-lg ">
      <h2 className="text-2xl font-semibold mb-4 align-middle">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            value={registrationState.Name}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="token" className="block text-sm font-medium text-gray-600">
            Token:
          </label>
          <select
            id="token"
            name="Token"
            value={RegisterForm.Token}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          >
            <option value="">Select a token</option>
            <option value="Token 1">Token 1</option>
            <option value="Token 2">Token 2</option>
            <option value="Token 3">Token 3</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default RegisterForm