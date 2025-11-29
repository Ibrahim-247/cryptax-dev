
import MessageList from './components/message-list'
import { Metadata } from "next";
import MessageHeader from './components/message-header';
import SendMessage from './components/send-message';
import fakeDelay from '@/utils/fakeDelay';

export const metadata: Metadata = {
    title: 'Find a Crypto Tax Advisor – Netherlands | CRYPTAX',
    description: 'Connect with qualified Dutch tax advisors who specialize in crypto. Get clarity, guidance, and professional expertise — no hype, just structure.',
}
const TaxAdvisor = async () => {
    await fakeDelay(100);
    // main render
    return (
        <div className='w-full px-4 sm:px-6 pb-4 flex flex-col gap-3 justify-between items-center rounded-md h-[calc(100vh-140px)] bg-white'>
            {/* message header */}
            <MessageHeader />
            {/* message screen */}
            <div className="w-full h-full overflow-y-auto py-3">
                <MessageList />
            </div>
            {/* input screen */}
            <SendMessage />
        </div>
    )
}

export default TaxAdvisor
