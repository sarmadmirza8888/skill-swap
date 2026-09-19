import React from 'react'

const Images = () => {
  return (
    <div className="flex  gap-6 ml-20 translate-y-5">
     <div className='flex flex-col'> <img src="/handsonlaptop.jpg" alt="Skill 1" className="w-56 h-56 object-cover rounded-lg" /><p className="text-[#F8FAFC]">Begineer Python Coding </p><p className="text-[#94A3B8]">Mohsin</p><p className="text-[#94A3B8] ml-8 -translate-y-6 translate-x-30">⭐4.8</p><p className="border border-[#334155] text-[#94A3B8] -translate-y-4 h-7 w-14">Coding</p></div>
      <div className='flex flex-col'> <img src="/brushonpaint.jpg" alt="Skill 2" className="w-56 h-56 object-cover rounded-lg" /><p className="text-[#F8FAFC]">Beginner Digital Art</p><p className="text-[#94A3B8]">Aisha</p><p className="text-[#94A3B8] ml-8 -translate-y-6 translate-x-30">⭐4.9</p><p className="border border-[#334155] text-[#94A3B8] -translate-y-4 h-7 w-10">Art</p></div>
      <div className='flex flex-col'> <img src="/guitar.jpg" alt="Skill 3" className="w-56 h-56 object-cover rounded-lg" /><p className="text-[#F8FAFC]">Intermediate Guitar Playing</p><p className="text-[#94A3B8]">Ali</p><p className="text-[#94A3B8] ml-8 -translate-y-6 translate-x-30">⭐4.7</p><p className="border border-[#334155] text-[#94A3B8] -translate-y-4 h-7 w-12">Music</p></div>
      <div className='flex flex-col'> <img src="/publicspeaking.jpg" alt="Skill 4" className="w-56 h-56 object-cover rounded-lg" /><p className="text-[#F8FAFC]">Advanced Public Speaking</p><p className="text-[#94A3B8]">Sarah</p><p className="text-[#94A3B8] ml-8 -translate-y-6 translate-x-30">⭐4.8</p><p className="border border-[#334155] text-[#94A3B8] -translate-y-4 h-7 w-30">Communication</p></div>
     <button className='border border-[#334155] hover:bg-[#0D9488] rounded-2xl text-center text-[#94A3B8] h-20 w-20 translate-y-10'>Load more➡️</button>    
    </div> 
  )
}

export default Images
