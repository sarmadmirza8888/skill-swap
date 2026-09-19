import React from 'react'

const Nav = () => {
  return (
    <div className="border border-blackml-20 ml-10 mr-20 auto rectangle flex-2 rounded-2xl bg-[#0B1120] flex justify-between items-center px-10 py-4 translate-y-2 ">
      <div className="text-3xl font-bold text-[#F8FAFC]"> SkillSwap</div>
      <button className="text-[#F8FAFC] ml-145 w-15 rounded-2xl hover:bg-[#0F766E]  ">Home</button>
      <button className="text-[#F8FAFC]  rounded-2xl w-20 hover:bg-[#0F766E] ">Browse</button>
      <button className="border border-white text-[#F8FAFC] rounded-2xl  bg-[#14B8A6] hover:bg-[#0F766E] bg-origin-padding w-35 ">Dashboard</button>
      <img src="/myimage.jpeg" alt="Profile"  className= " border border-black h-15 w-15 rounded-2xl  ml-2" />
    </div>
  )
}

export default Nav
