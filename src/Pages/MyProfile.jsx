import React from 'react'
import ProfilePic from '../assets/ProfilePic.jpeg'

const MyProfile = () => {
    return (
        <div className='min-h-screen bg-[#0B1120] text-[#F8FAFC]'>
            <div className='max-w-5xl mx-auto px-6 py-10'>
                <div className='bg-[#1E293B] border border-[#334155] rounded-2xl p-6 mb-6'>
                    <div className='flex flex-col md:flex-row gap-6 items-center'>
                        <img src={ProfilePic} alt='Profile' className='w-28 h-28 rounded-2xl object-cover border border-[#334155]' />
                        <div className='flex-1'>
                            <p className='text-[#F8FAFC] text-2xl mb-2 font-bold'> Name:  </p>

                            <p className='text-[#F8FAFC] text-2xl mb-2 font-bold'> Bio:  </p>

                        </div>
                        <button className='text-[#14B8A6] font-semibold hover:text-[#F59E0B]'> Edit Profile</button>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                    <div className='bg-[#1E293B] border border-[#334155] rounded-2xl p-6'>
                        <h2 className='text-xl font-bold mb-5'> My Skills </h2>
                        <div className='flex flex-wrap gap-3'>
                            <span className='bg-[#14B8A6]/15 text-[#14B8A6] border border-[#14B8A6]/30 px-4 py-2 rounded-full'> React</span>
                            <span className='bg-[#14B8A6]/15 text-[#14B8A6] border border-[#14B8A6]/30 px-4 py-2 rounded-full'> UI/UX Design</span>
                            <span className='bg-[#14B8A6]/15 text-[#14B8A6] border border-[#14B8A6]/30 px-4 py-2 rounded-full'> JAVA</span>
                        </div>
                        <button className='mt-5 text-[#1A4B8A6] font-semibold hover:text-[#F59E08]'> + Add Skills</button>
                    </div>
                    <div className='bg-[#1E293B] border border-[#334155] rounded-2xl p-6'>
                        <h2 className='text-xl font-bold mb-5 '> Skills I want to Learn </h2>
                        <div className='flex flex-wrap gap-3'>
                            <span className='bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 px-4 py-2 rounded-full'>Python</span>
                            <span className='bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 px-4 py-2 rounded-full'>Digital Marketing</span>
                        </div>
                        <button className='mt-5 text-[#1A4B8A6] font-semibold hover:text-[#F59E08]'> + Add Skills</button>
                    </div>
                </div>
                <div className='bg-[#1E293B] border border-[#334155] rounded-2xl p-6 mb-6'>
                    <h2 className='text-xl font-bold mb-5'> Availability / Schedule </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='bg-[#111827] border border-[#334155] rounded-xl p-4'>
                            <p className='text-[#94A3B8] text-sm'> Monday</p>
                            <p className='text-[#F8FAFC] font-semibold mt-1'> 5:00 PM to 7:00 PM</p>
                        </div>
                        <div className='bg-[#111827] border border-[#334155] rounded-xl p-4'>
                            <p className='text-[#94A3B8] text-sm'> Wednesday</p>
                            <p className='text-[#F8FAFC] font-semibold mt-1'> 4:00 PM to 6:00 PM</p>
                        </div>
                        <div className='bg-[#111827] border border-[#334155] rounded-xl p-4'>
                            <p className='text-[#94A3B8] text-sm'> Friday </p>
                            <p className='text-[#F8FAFC] font-semibold mt-1'> 2:00 PM to 5:00 PM</p>
                        </div>
                        
                    </div>
                    <button className='mt-5 text-[#1A4B8A6] font-semibold hover:text-[#F59E08]'> + Edit Schedule </button>
                </div>
                <div className='flex justify-center mt-8'>
                    <button className='bg-[#14B8A6] text-[#F8FAFC] px-8 py-3 rounded-full font-semibold hover:bg-[#0D9488] transition duration-200'> Save Changes</button>
                </div>
            </div>

        </div>
    )
}

export default MyProfile