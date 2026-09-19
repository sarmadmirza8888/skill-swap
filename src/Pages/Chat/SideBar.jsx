import React from 'react'
import Righthalf from './Righthalf'

const SideBar = () => {
    return (
        <div>
            <div className="grid grid-cols-2 bg-[#0B1120]">
                <div className="border border-[#545454] bg-[#111827] w-1/2 h-110 rounded-2xl ml-20 mt-5 ">
                    <div className="flex flex-col">
                        <div className="text-[#F8FAFC]">Requests</div>
                        <div className="flex ">
                            <div className="border border-[#334155] text-[#94A388] hover:bg-[#0D9488] rounded-2xl ml-2 p-2 mt-2 ">Incoming</div>
                            <div className="border border-[#334155] text-[#94A388] hover:bg-[#0D9488] rounded-2xl ml-3 p-2 mt-2 ">Sent</div>
                        </div>
                        <div className="flex p-3 ">
                            <div className="flex border border-[#334155] bg-[#111827] p-3 rounded-2xl h-35 w-65">
                                <div><img src="hadia.jpeg" alt="hadiapicture" height="40" width="40" className="rounded-full mt-8" />
                                </div>
                                    <div className="flex flex-col  ">
                                    <div className="text-[#F8FAFC] ml-5">Hadia</div>
                                    <div className="text-[#94A388] ml-5">Guitar for</div>
                                    <div className="text-[#94A388] ml-5">Python</div>
                                </div>
                                <div className="border border-[#334155] text-[#94A388] rounded-2xl p-3 h-12 w-15 ml-18 mt-6">New</div>
                            </div>

                        </div>
                          <div className="flex p-3 ">
                            <div className="flex border border-[#334155] bg-[#111827] p-3 rounded-2xl h-35 w-65">
                                <div><img src="randomgirl.png" alt="hadiapicture" height="40" width="40" className="rounded-full mt-8" />
                                </div>
                                    <div className="flex flex-col  ">
                                    <div className="text-[#F8FAFC] ml-5">Aisha</div>
                                    <div className="text-[#94A388] ml-5">Design for</div>
                                    <div className="text-[#94A388] ml-5">Photo</div>
                                </div>
                                <div className="border border-[#334155] text-[#94A388] rounded-2xl p-3 h-12 w-15 ml-18 mt-6">Active</div>
                            </div>

                        </div>
                        

                    </div>

                </div>
               <Righthalf/>
            </div>
        </div>
    )
}

export default SideBar
