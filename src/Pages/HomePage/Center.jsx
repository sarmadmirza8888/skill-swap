import React from 'react'

const Center = () => {
  return (
    <div className='border border-white bg-[#6A5ACD] rounded-2xl w-277 h-80 ml-20 translate-y-4 flex-col text-align-center justify-center items-center '>
       <div className="text-[#F8FAFC] text-2xl translate-x-100 translate-y-20">Swap skills.No money,just knowledge</div>
       <div className="text-[#94A3B8] translate-x-110 translate-y-25 ">Teach what you know. Learn what you don't.</div>
       <button className="border border-[#2F4F4F] flex-2 rounded-2xl bg-[#2F4F4F] hover:bg-[#0F766E] text-white translate-x-120 translate-y-30 p-1 gap-3.5 ">Offer a skill</button>
    <button className="border border-[#2F4F4F] flex-2 rounded-2xl bg-[#2F4F4F]  hover:bg-[#0F766E] text-white translate-x-130 translate-y-30 p-1 gap-3.5">Find a skill</button>
    </div>
  )
}

export default Center
