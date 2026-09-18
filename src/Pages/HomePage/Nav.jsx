import React from 'react'
const Nav = () => {
    return (
        <div >
            <div className="ml-20 mr-20 auto rectangle flex-2 rounded-2xl bg-[#0B1120] flex justify-between items-center px-10 py-4 translate-y-2 ">
                <div className="text-3xl font-bold text-white"> SkillSwap</div>
                <button className="text-white ml-145 w-15 rounded-2xl hover:bg-[#0F766E] ">Browse</button>
                <button className="text-white  rounded-2xl w-20 hover:bg-[#0F766E] ">How it works</button>
                <button className="border border-white text-white rounded-2xl w-15 bg-[#14B8A6] hover:bg-[#0F766E] bg-origin-padding">Login</button>
                <button className= " border border-white text-white hover:bg-[#0F766E] bg-[#14B8A6] rounded-2xl w-20 bg-origin-padding">Sign Up</button>
            </div>
        </div>
    )
}

export default Nav
