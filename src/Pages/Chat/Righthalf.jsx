import React from 'react'

const Righthalf = () => {
    return (
        <div>
            <div className="border border-[#545454] bg-[#111827] h-110 mr-30 mt-2 rounded-2xl">
                <div className="flex flex-col">
                    <div className="border border-[#111827] flex   ">
                        <div><img src="/hadia.jpeg" alt="code-on-laptop" height="40" width="40" className="border border-[#545454]   bg-[#111827] rounded-lg " /></div>
                        <div className="flex flex-col ">
                            <div className="text-[#F8FAFC]">Hadia</div>
                            <div className="text-[#94A388]">Guitar playing swap</div>
                        </div>
                        <div className="border border-[#334155] text-[#94A388] rounded-full p-1.5  ml-18 mt-2">Pending</div>
                        <button className="border border-[#334155] hover:bg-[#0D9488] text-[#94A388] rounded-2xl p-3 h-12 w-20 ml-4 mt-2">Accept</button>
                        <button className="border border-[#334155] hover:bg-[#0D9488] text-[#94A388] rounded-2xl p-3 h-12 w-20 ml-4 mt-2">Decline</button>
                    </div>
                    <div className="border border-[#334155] flex-col ">
                        <div className=" flex ">
                            <div className="text-[#94A388]">Hadia wants</div>
                            <div className="border border-[#be955b] text-[#94A388] rounded-full p-2 ml-4">Guitar playing</div>
                            <div className="ml-5">⇆ </div>
                            <div className="text-[#94A388] ml-5">she teaches</div>
                            <div className="border border-[#be955b] text-[#94A388] rounded-full p-2 ml-4">python</div>
                        </div>
                        <div className="ml-90 text-[#F8FAFC] ">Proposed:Sat morning</div>

                    </div>

                    <div className="text-[#6f7070] ml-40 ">Request sent on 19 Sep</div>
                    <div className=" border border-[#334155] bg-[#2b4177] text-[#F8FAFC] mt-4 h-15 w-72 p-1 rounded-2xl">Hi Ali,I'd love to learn guitar from you in exchange of python lessons.</div>
                    <div className=" border border-[#334155] bg-[#2b4177] text-[#F8FAFC] mt-2 h-10 w-72 p-1 rounded-2xl">Saturday morning works best for me.</div>
                    <div className="flex gap-4">
                        <div className=" border border-[#334155] bg-[#0B1120] text-[#F8FAFC] mt-2 h-10 w-30  p-1 rounded-2xl">Sounds good</div>
                        <div className=" border border-[#334155] bg-[#0B1120] text-[#F8FAFC] mt-2 h-10 w-40  p-1 rounded-2xl">Can we do Sunday?</div>
                    </div>
                    <div className="flex gap-2">
                        <input className=" border border-[#334155] bg-[#1e2026] text-[#a1a7ae] ml-1  mt-2 h-10 w-110  p-1 rounded-2xl" placeholder="Write a message" />
                        <button className=" hover:bg-[#0D9488] border border-[#334155] bg-[#1e2026] text-[#a1a7ae] mt-2 h-10 w-10  p-2 rounded-2xl">➤</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Righthalf
