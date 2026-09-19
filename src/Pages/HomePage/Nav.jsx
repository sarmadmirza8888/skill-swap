import React from 'react'
const Nav = () => {
    return (
        <div >
            <div className="ml-20 mr-20 auto rectangle flex-2 rounded-2xl bg-[#0B1120] flex justify-between items-center px-10 py-4 translate-y-2 ">
                <div className="text-3xl font-bold text-white"> SkillSwap</div>
                <button className="text-[#F8FAFC] ml-145 w-15 rounded-2xl hover:bg-[#0D9488] ">Browse</button>
                <button className="text-[#F8FAFC]  rounded-2xl w-20 hover:bg-[#0D9488] ">How it works</button>
                <button className="border border-[#334155] text-white rounded-2xl w-15 bg-[#14B8A6] hover:bg-[#0D9488] bg-origin-padding">Login</button>
                <button className= " border border-[#334155] text-white hover:bg-[#0D9488] bg-[#14B8A6] rounded-2xl w-20 bg-origin-padding">Sign Up</button>
            </div>
        </div>
    )
}

export default Nav
