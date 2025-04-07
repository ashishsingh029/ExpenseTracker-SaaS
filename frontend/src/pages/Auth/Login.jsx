import React, { useState } from 'react'
import Input from '../../components/Inputs/Input'
import AuthLayout from "../../layout/AuthLayout"
import { Link } from 'react-router-dom'
const Login = () => {
  const [ error, setError ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const handleLogin = event => {
    event.preventDefault()
  }
  return (
    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please Enter your details to log in
        </p>
        <form onSubmit={handleLogin}>
          <Input 
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label="Email Address"
            placeholder="example@mail.com"
            type="text"
          />
          <Input 
            value={password}
            onChange={({target}) => setPassword(target.value)}
            label="Password"
            placeholder=""
            type="password"
          />
          { error && 
            <p className='text-red-500 text-xs pb-2.5'>
              {error}
            </p>
          }
          <button type='submit' className='btn-primary'>
            Login
          </button>
          <p className='text-[13px] text-slate-800  mt-3'>
            Don't have an account?{" "}
            <Link className='font-medium text-primary-underline' to="/signup">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  )
}
export default Login
