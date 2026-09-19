import Nav from '../HomePage/Nav'
import Footer from '../HomePage/Footer'
import React from 'react'

const Community = () => {
  return (
    <div className='min-h-screen bg-[#0B1120]'>
      <Nav />
      <div className='px-6 py-5'>
        <h1 className='text-3xl font-bold text-white'> Top Contributors </h1>
        <p className='text-[#94A3B8] mt-1'> Our most active SkillSwap community members </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'> 
            <div className='bg-[#1E293B] border border-[#334155] rounded-xl p-5'>
                <h2 className='text-xl font-semibold mb-4 text-white'> LeaderBoard </h2>
                <div className='flex items-center justify-between border-b border-[#334155] py-3'>
                    <div className='flex items-center gap-3'>
                        <span className='font-bold text-white'>1</span>
                        <div className='w-9 h-9 rounded-full bg-[#14B8A6] flex items-center justify-center text-[0B1120] font-bold'>HT</div>
                        <div> <p className='font-semibold text-white'>Hadia Tanveer</p>
                        <p className='text-xs text-[#94A3B8]'> 28 swaps completed</p>
                        </div>
                    </div>
                    <span className='text-xs bg-[#14B8A6]/20 text-[#14B8A6] px-3 py-1 rounded-full'>Skill Master</span>
                </div>

                <div className='flex items-center justify-between border-b border-[#334155] py-3'>
                    <div className='flex items-center gap-3'>
                        <span className=' font-bold text-white'>2</span>
                        <div className='w-9 h-9 rounded-full bg-[#14B8A6] flex items-center justify-center text-[0B1120] font-bold'>SM</div>
                        <div> <p className='font-semibold text-white'>Sarmed Mirza</p>
                        <p className='text-xs text-[#94A3B8]'> 24 swaps completed</p>
                        </div>
                    </div>
                    <span className='text-xs bg-[#14B8A6]/20 text-[#14B8A6] px-3 py-1 rounded-full'>Top Mentor</span>
                </div>

                <div className='flex items-center justify-between border-b border-[#334155] py-3'>
                    <div className='flex items-center gap-3'>
                        <span className=' font-bold text-white'>3</span>
                        <div className='w-9 h-9 rounded-full bg-[#14B8A6] flex items-center justify-center text-[0B1120] font-bold'>HS</div>
                        <div> <p className='font-semibold text-white'>Hassan Salman</p>
                        <p className='text-xs  text-white'> 23 swaps completed</p>
                        </div>
                    </div>
                    <span className='text-xs bg-[#14B8A6]/20 text-[#14B8A6] px-3 py-1 rounded-full'>Rising star</span>
                </div>
            </div>
            <div className='bg-[#1E293B] border border-[#334155] rounded-xl p-5'>
                <h2 className='text-xl font-semibold mb-4 text-white'> Recent Activity </h2>
                <div className='border-b border-[#334155] py-4'>
                    <p className='text-sm text-white'> Hadia just completed a swap with Sarmed</p>
                    <p className='text-xs text-[#64748B] mt-1'> 10 minutes ago</p>
                </div>

                <div className='border-b border-[#334155] py-4'>
                    <p className='text-sm text-white'> Hassan just completed a swap with Sarmed</p>
                    <p className='text-xs text-[#64748B] mt-1'> 13 minutes ago</p>
                </div>

                <div className='border-b border-[#334155] py-4'>
                    <p className='text-sm text-white'> Sarmed just completed a swap with Hassan</p>
                    <p className='text-xs text-[#64748B] mt-1'> 10 minutes ago</p>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Community
