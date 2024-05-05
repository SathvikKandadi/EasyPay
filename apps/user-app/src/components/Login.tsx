import React from 'react'

export default function Login() {
  return (
    <div className='w-full h-screen flex justify-center items-center '>
        <div className='w-[350px] rounded flex flex-col p-4 shadow-xl'>
            <h1 className='text-3xl font-semibold text-blue-500 flex justify-center my-2'>EasyPay</h1>
            <h1 className='text-xl flex justify-center my-2'>Log in</h1>
            <input className='p-2 border rounded my-2' placeholder='Enter email' type='text' required></input>
            <input className='p-2 border rounded my-2' placeholder='Password' type='password' required></input>
            <button className='border rounded p-2 bg-blue-500 text-white hover:bg-blue-600 my-2'>Login</button>
            <button className='border rounded p-2 text-blue-500 my-2  hover:bg-gray-100'>Sign up</button>
        </div>
    </div>
  )
}
