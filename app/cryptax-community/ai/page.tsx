
import { Metadata } from "next"
import MessageList from "./components/message-list";
import SendMessage from "./components/send-message";

export const metadata: Metadata = {
  title: 'AI Crypto & Tax Search – Reliable Answers | CRYPTAX',
  description: 'Ask AI questions about crypto and taxation and receive structured answers from verified Dutch sources. Designed for clarity — not speculation.',
}

const AI = async () => {

  // main render
  return (
    <div className='w-full md:p-6 sm:p-4 px-3 py-4 flex flex-col gap-3 justify-between items-center rounded-md h-[calc(100vh-140px)] bg-white '>
      {/* message screen */}
      <MessageList />
      {/* input screen */}
      <SendMessage />
    </div>
  )
}

export default AI

