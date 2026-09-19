import React from 'react'
const Bar = () => {
    return (
        <div className="flex bg-[#0b1120]">
            <div className="flex flex-col translate-y-3.5 ml-12 " >
                <div className="text-[#94A388] text-lg font-semibold bg-[#111827]">
                    <span className="text-[#94A388]">Browser</span>
                    <span className="text-[#94A388]">&gt;</span>
                    <span className="text-[#94A388]">Programming</span>
                    <span className="text-[#94A388]">&gt;</span>
                    <span className="text-[#F8FAFC]">Beginner Python Coding</span>
                </div>
                <img src="/pythoncode.jpg" alt="code-on-laptop" className="border border-[#545454]  bg-[#111827] rounded-lg mt-4 h-50 w-240" />
                <div className="text-2xl text-[#F8FAFC] bg-[#111827]">Beginner Python Coding</div>
                <div className="flex gap-25 ">
                    <div className="border border-[#334155] text-[#94A388] bg-[#111827] h-8 w-24">Programming</div>
                    < div className="border border-[#334155] text-[#94A388] bg-[#111827] h-8 w-18">Beginner</div>
                    <div className="border border-[#334155] text-[#94A388] bg-[#111827] h-7 w-14">Online</div>
                    <div className="text-[#94A388] bg-[#111827]">⭐⭐⭐⭐⭐4.8</div>
                    <div className="text-[#94A388] bg-[#111827]">(23 reviews)</div>
                </div>
                <div className="border border-[#545454]  bg-[#111827] h-40 w-240 mt-2 ">
                    <div className=" flex flex-col text-[#F8FAFC] text-lg  mt-2 ml-2">
                        <div className="flex gap-100">
                            <div className="text-[#94A388]">✅Variables and data types</div>
                            <div className="text-[#94A388]">✅functions and loops</div>
                        </div>
                        <div className="flex gap-99">
                            <div className="text-[#94A388]">✅Reading and writing files</div>
                            <div className="text-[#94A388]">✅A essential project</div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex border border-[#545454]  h-25 w-40 ml-8 rounded-2xl">
                                <div className=" ml-10 translate-y-5 text-[#F8FAFC]">
                                    Duration
                                </div>
                                <div className=" translate-y-15 -translate-x-17 text-[#F8FAFC]">
                                    1hour
                                </div>
                            </div>
                            <div className="flex border border-[#334155]  h-25 w-40 ml-30 rounded-2xl">
                                <div className=" ml-10 translate-y-5 text-[#F8FAFC]">
                                    Sessions
                                </div>
                                <div className=" translate-y-15 -translate-x-17 text-[#F8FAFC]">
                                    10
                                </div>
                            </div>
                            <div className="flex border border-[#334155]  h-25 w-40 ml-30 rounded-2xl">
                                <div className=" ml-10 translate-y-5 text-[#F8FAFC]">
                                    Language
                                </div>
                                <div className=" translate-y-15 -translate-x-22 text-[#F8FAFC]">
                                    Urdu/English
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-52  ml-3 border border-[#545454] bg-[#111827]'>
                <div className="flex  gap-1.5" >
                    <img src="/hadia.jpeg" alt="hadia picture" className="h-12 w-12 ml-2 mt-2 " />
                    <div className="flex flex-col text-[#F8FAFC] text-lg mt-2">
                        Hadia
                        <div className="text-[#94A388] text-sm">⭐4.8</div>
                    </div>
                </div>
                <button className="mr-25 hover:bg-[#0D9488] text-[#94A388]">View Profile</button>
                <div className="border border-[#334155] flex flex-col h-23 w-39 ml-2 rounded-2xl ">
                    <div className="ml-2 text-[#F8FAFC] ">looking for in return</div>
                    <div className="flex  gap-4">
                        <button className="rounded-2xl border border-[#334155] hover:bg-[#0D9488] text-[#94A388] h-10 ml-2">guitar</button>
                        <button className="rounded-2xl border border-[#334155] hover:bg-[#0D9488] text-[#94A388] h-14 mr-2">Graphic Design</button>
                    </div>
                </div>
                <div className="ml-2 text-[#F8FAFC]">Availability</div>
                <div className="flex">
                    <button className=" rounded-2xl border border-[#334155] hover:bg-[#0D9488] text-[#94A388] h-12   ml-2">Mon evening</button>
                    <button className=" rounded-2xl border border-[#334155] hover:bg-[#0D9488] text-[#94A388] h-12 ml-2">Wed evening</button>
                </div>



                <div className="flex flex-col">
                    < button className="border border-[#334155] hover:bg-[#0D9488] text-[#94A388] h-10 w-40 ml-3 mt-3 rounded-2xl">⇆ Request a swap</button>
                    <button className="border border-[#334155] hover:bg-[#0D9488] text-[#94A388] h-10 w-40 ml-3 mt-3 rounded-2xl">💬 Message</button>
                </div>
                <div className="flex">
                    <button className="border border-[#334155] hover:bg-[#0D9488] text-[#94A388] h-10 w-40 ml-3 mt-3 rounded-2xl">♡Save</button>
                    <button className="border border-[#334155] hover:bg-[#0D9488] text-[#94A388] h-10 w-40 ml-3 mt-3 rounded-2xl">🔗Share</button>
                </div>
            </div>

        </div>
    )
}

export default Bar
