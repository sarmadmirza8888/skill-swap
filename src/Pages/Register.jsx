import React from 'react'
import Nav from './HomePage/Nav'
import Footer from './HomePage/Footer'

const Register = () => {
    return (
        <div className='min-h-screen bg-[#0B1120] px-6 py-10'>
            <Nav />
            <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]'>
                <div className='px-5 lg:px-8'>
                    <h1 className='text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-tight'> Share Skill  <br /> Learn Together. </h1>
                    <p className='text-[#94A3B8] text-lg leading-8 mt-6 max-w-lg'> SkillSwap is a community where peaople can share their skills, learn from others and grow together.</p>
                </div>
                <div className='bg-[#1E293B] rounded-3xl border border-[#334155] shadow-lg p-8 w-full max-w-md'>
                    <div className='mb-7'>
                        <h2 className='text-3xl font-bold text-white'> Create Your Account</h2>
                        <p className='text-[#94A3B8] mt-2'> Join SkillSwap and start learning new skills.</p>
                    </div>
                    <div>
                        <div> <label className='block text-sm font-semibold  text-[#F8FAFC] mb-2 '> Full Name
                        </label>
                            <input type="text" className='w-full bg-[#111827] border  border-[#334155] text-[#F8FAFC] rounded-xl px-4 py-3 outline-none focus:border-[#14B8A6]' />
                        </div>
                    </div>
                    <div>
                        <div> <label className='block text-sm font-semibold  text-[#F8FAFC] mb-2 '> Email
                        </label>
                            <input type="email" className='w-full bg-[#111827] border-[#334155] text-[#F8FAFC] rounded-xl px-4 py-3 outline-none focus:border-[#14B8A6]' />
                        </div>
                    </div>
                    <div>
                        <div> <label className='block text-sm font-semibold  text-[#F8FAFC] mb-2 '> What you want to learn?
                        </label>
                            <input type="text" className='w-full bg-[#111827] border-[#334155] text-[#F8FAFC] rounded-xl px-4 py-3 outline-none focus:border-[#14B8A6]' />
                        </div>
                    </div>
                    <div className='space-y-5'>
                        <div> <label className='block text-sm font-semibold  text-[#F8FAFC] mb-2 '> Password
                        </label>
                            <input type="Password" className='w-full bg-[#111827] border-[#334155] text-[#F8FAFC] rounded-xl px-4 py-3 outline-none focus:border-[#14B8A6]' />
                        </div>
                    </div>
                    <div>
                        <div> <label className='block text-sm font-semibold  text-[#F8FAFC] mb-2 '> Confirm Password
                        </label>
                            <input type="Password" className='w-full bg-[#111827] border-[#334155] text-[#F8FAFC] rounded-xl px-4 py-3 outline-none focus:border-[#14B8A6]' />
                        </div>
                    </div>
                    <button type='submit' className='w-full bg-[#14B8A6] text-[[#F8FAFC] py-3.5 rounded-full font-semibold hover:bg-[#0D9488] transition duration-200'>
                        Create Account
                    </button>

                    <p className='text-center text-sm text-[#94A3B8] mt-6'> Already have an account? {' '}
                        <a href="/Login" className='text-[#14B8A6] font-semibold hover:text-[#F59E0B]'> Login</a>
                    </p>

                </div>

            </div>
            <Footer />

        </div>
        
    )
}

export default Register
