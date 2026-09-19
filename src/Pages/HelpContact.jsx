import React from 'react'
import Nav from './HomePage/Nav'
import Footer from './HomePage/Footer'

const HelpContact = () => {
    return (
        <div className="min-h-screen bg-[#0B1120] text-gray-400 flex flex-col">
            <Nav />
            <main className="flex-1 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-light text-gray-600">Contact & FAQs</h1>
                    <div className="mt-6 flex flex-col gap-4">
                        <button className="text-sm underline hover:text-teal-600"> Ask a Question</button>
                        <button className="text-sm underline hover:text-teal-600"> Send a Message</button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default HelpContact