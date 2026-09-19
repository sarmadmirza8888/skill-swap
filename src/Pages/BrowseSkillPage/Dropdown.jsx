import React from 'react'

const Dropdown = () => {
  return (
    <div className="flex translate-y-7.5 ">
      <input type="text" placeholder="🔍Search for a skill..." className="border border-black rounded-lg bg-[#1E293B] text-[#94A3B8]  ml-20 w-135 h-8" />
      <select className="border border-black rounded-lg ml-10 w-40 h-8 bg-[#1E293B] text-[#94A3B8]">
        <option value="">Choose Category⬇️</option>
        <option value="Art">Art</option>
        <option value="Python">Python</option>
        <option value="Data scientist">Data Scientist</option>
      </select>
      <select className="border border-black rounded-lg ml-16 w-40 h-8 bg-[#1E293B] text-[#94A3B8]">
        <option value="">Choose Location⬇️</option>
        <option value="Lahore">Online</option>  
      <option value="Faisalabad">Faisalabad</option>
     <option value="Burewala">Burewala</option>
     <option value="Mandi Bahuddin">Mandi bahuddin</option>
      </select>
      <select className="border border-black rounded-lg ml-6 w-40 h-8 bg-[#1E293B] text-[#94A3B8]">
        <option value="">Choose Rating⬇️</option>
        <option value="1">1⭐</option>
        <option value="2">2⭐</option>
        <option value="3">3⭐</option>
        <option value="4">4⭐</option>
        <option value="5">5⭐</option>
      </select>
    </div>
  )
}

export default Dropdown
