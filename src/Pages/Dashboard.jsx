import React from 'react'

const Dashboard = () => {
    return (
        <div className='min-h-screen bg-[#0B1120] text-[#F8FAFC]'>
            <nav className='bg-[#1E293B] border-b border-[#334155] px-6 py-4'>
                <div className='max-w-6xl mx-auto flex justify-between items-center'>
                    <h1 className='text-2xl font-bold text-[#14B8A6]'> SkillSwap </h1>
                    <div className='flex items-center gap-4'>
                        <span className='text-[#94A3B8] '> </span>
                        <div className='w-10 h-10 rounded-full bg-[#14B8A6] flex items-center justify-center font-bold'> 👤 </div>
                    </div>
                </div>
            </nav>
            <div className=' px-4 py-6'>
                <h2 className='text-3xl md:text-4xl font-bold'> Welcome back</h2>
                <p className='text-[#94A3B8] mt-2'> Manage your skills, swaps and learning sessions. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
                <div className='bg-[#1E293B] border border-[#334155] rounded-2xl p-5 ml-2'>
                    <div className='flex justify-between items-start'>
                        <div>
                            <p className='text-[#94A3B8]'> Active Swap</p>
                            <h3 className='text-3xl font-bold mt-2'> 4 </h3>
                        </div>
                        <div className='w-10 h-10 rounded-xl bg-[#14B8A6]/15 text-[#14B8A6] flex items-center justify-center text-xl'> 🔄 </div>
                    </div>
                </div>
                <div className='bg-[#1E293B] border border-[#334155] rounded-2xl p-5'>
                    <div className='flex justify-between items-start'>
                        <div>
                            <p className='text-[#94A3B8]'> Pending </p>
                            <h3 className='text-3xl font-bold mt-2'> 4 </h3>
                        </div>
                        <div className='w-10 h-10 rounded-xl bg-[#14B8A6]/15 text-[#14B8A6] flex items-center justify-center text-xl'> ⌛ </div>
                    </div>
                </div>
                <div className='bg-[#1E293B] border border-[#334155] rounded-2xl p-5 mr-2'>
                    <div className='flex justify-between items-start'>
                        <div>
                            <p className='text-[#94A3B8]'> Rating </p>
                            <h3 className='text-3xl font-bold mt-2'> 4.8 </h3>
                        </div>
                        <div className='w-10 h-10 rounded-xl bg-[#14B8A6]/15 text-[#14B8A6] flex items-center justify-center text-xl'> ⭐</div>
                    </div>
                </div>
            </div>
            <div className='flex gap-8 border-b border-[#334155] mb-6'>
                <button className='pb-3 text-[#14B8A6] border-b-2 border-[#14B8A6] font-semibold ml-2'> Active</button>
                <button className='pb-3 text-[#94A3B8] hover:text-[#F8FAFC] '> Requests </button>
                <button className='pb-3 text-[#94A3B8] hover:text-[#F8FAFC] '> Completed </button>
            </div>
            <div className='space-y-4'>
                <div className='bg-[#1E293B] border border-[#334155] rounded-2xl p-5 ml-2 mr-2'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-5'>
                        <div> <p className='text-sm text-[#94A3B8]'> Skill Exchange</p>
                            <h3 className='text-xl font-semibold mt-1'> React , UI/UX Design </h3>
                            <p className='text-[#94A3B8] mt-2'> Partner: Ayesha </p>
                            <p className='text-[#94A3B8]'> Sessions: Saturday, 5:00 PM </p>
                        </div>
                        <span className='bg-[#14B8A6]/20 text-[#14B8A6] px-4 py-2 rounded-full text-sm font-semibold w-fit'> ACTIVE</span>
                    </div>
                </div>
                <div className='bg-[#1E293B] border border-[#334155] rounded-2xl p-5 ml-2 mr-2 '>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-5'>
                        <div> <p className='text-sm text-[#94A3B8]'> Skill Exchange</p>
                            <h3 className='text-xl font-semibold mt-1'> JAVA , Graphic Exchange </h3>
                            <p className='text-[#94A3B8] mt-2'> Partner: Hadia </p>
                            <p className='text-[#94A3B8]'> Sessions: Monday, 11:00 AM </p>
                        </div>
                        <span className='bg-[#14B8A6]/20 text-[#14B8A6] px-4 py-2 rounded-full text-sm font-semibold w-fit'> ACTIVE</span>
                    </div>
                </div>
                <div className='bg-[#1E293B] border border-[#334155] rounded-2xl p-5 ml-2 mr-2'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-5'>
                        <div> <p className='text-sm text-[#94A3B8]'> Skill Exchange</p>
                            <h3 className='text-xl font-semibold mt-1'> Python , Digital Marketing </h3>
                            <p className='text-[#94A3B8] mt-2'> Partner: Ali </p>
                            <p className='text-[#94A3B8]'> Sessions: Wednesday, 02:30 PM </p>
                        </div>
                        <span className='bg-[#14B8A6]/20 text-[#14B8A6] px-4 py-2 rounded-full text-sm font-semibold w-fit'> PENDING </span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Dashboard
