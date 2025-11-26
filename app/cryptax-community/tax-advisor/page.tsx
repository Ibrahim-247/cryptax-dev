
import { FaArrowRight } from 'react-icons/fa6'
import MessageList from './components/message-list'
import Image from 'next/image'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Find a Crypto Tax Advisor – Netherlands | CRYPTAX',
    description: 'Connect with qualified Dutch tax advisors who specialize in crypto. Get clarity, guidance, and professional expertise — no hype, just structure.',
}
const TaxAdvisor = () => {

    // main render
    return (
        <div className='w-full px-6 pb-4 flex flex-col gap-3 justify-between items-center rounded-md h-[calc(100vh-140px)] bg-white'>
            {/* message header */}
            <div className='w-full px-2 py-4 border-b border-blue-100 flex justify-between items-center'>
                <div className='flex justify-start items-center gap-4'>
                    <Image
                        width={56}
                        height={56}
                        src={'https://i.pravatar.cc/150?img=1'}
                        alt="user"
                        className="w-14 h-14 rounded-full border border-gray-200 shrink-0"
                    />
                    <div>
                        <p className='text-base font-semibold'>Anand Kashi</p>
                        <div className='text-sm flex gap-2 items-center justify-start text-black/80'>
                            <span className='size-2 block shrink-0 rounded-full animate-ping bg-green-600'></span>
                            <span>Active Now</span>
                        </div>
                    </div>
                </div>
                <p className='text-3xl font-semibold text-primary'>Tax Advisor</p>
                <div className='text-sm flex gap-2 items-center justify-start text-black/80'>
                    <span className='size-3 flex justify-center items-center border rounded-full animate-pulse border-red-400'>
                        <span className='size-2 block shrink-0 rounded-full bg-red-600'></span>
                    </span>
                    <span className='text-lg font-medium'>Live Chat</span>
                </div>
            </div>
            {/* message screen */}
            <div className="w-full h-full overflow-y-auto py-3">
                <MessageList />
            </div>
            {/* input screen */}
            <div className="w-full flex flex-col gap-3 justify-center items-center  shrink-0 ">
                <div className="p-4 flex justify-between items-center rounded-md bg-background w-full">
                    <input type="text" className="w-full border-none outline-none h-full text-base font-medium placeholder:text-gray-500" name="message" id="message" placeholder="Type your message" />
                    <button className="size-10 cursor-pointer -rotate-45 shrink-0 flex justify-center items-center p-1 bg-primary rounded-full text-white">
                        <FaArrowRight />
                    </button>
                </div>
                <p>Ask our tax advisor</p>
            </div>
        </div>
    )
}

export default TaxAdvisor
