import React from 'react'

const Login = () => {
  return (
    <>
      <div className="w-full bg-black flex gap-5 h-screen items-center justify-center">
        <div className="w-1/2 flex items-center justify-center p-12">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg" alt="logo" className='w-[90%]' />
        </div>
        <div className="w-1/2 flex items-start justify-center flex-col gap-3">
          <h1 className='text-6xl font-bold pb-12'>Happening now</h1>
          <h1 className='text-3xl font-bold pb-4'>
            Join X today.
          </h1>
          <button className='bg-white text-black p-2 rounded-full w-[45%] flex items-center justify-center gap-2'>
            <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png" alt="google" className='w-5 h-5' />
            Sign in with Google</button>
          <button className='bg-white text-black p-2 rounded-full w-[45%] flex items-center justify-center gap-2'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png" alt="apple" className='w-5' />
            Sign in with Apple</button>
          <div className="flex w-[45%] items-center gap-1">
            <hr className='w-1/2' />
            <p className='text-white text-sm'>or</p>
            <hr className='w-1/2' />
          </div>
          <button className='bg-blue-400 text-white p-2 rounded-full w-[45%]'>Create Account</button>
          <p className='text-xs w-[45%]'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
          <p className='text-white font-semibold pt-10 '>Already have an account?</p>
          <button className='bg-black text-blue-400 border border-white p-2 rounded-full w-[45%]'>Sign in</button>
        </div>
      </div>
    </>
  )
}

export default Login