import React from "react"
import { Metadata } from "next"
import { CiSearch } from "react-icons/ci"
import { conversations } from "@/data"
import ConversationBubble from "./components/conversation-bubble"
import RightSideBar from "@/components/shared/right-aside"

export const metadata: Metadata = {
  title: 'Messages – Your Crypto & Tax Conversations | CRYPTAX',
  description: 'Manage your chats, conversations, and community interactions in a clean, professional messaging environment.',
}

const MessageLayout = ({ children }: { children: React.ReactNode }) => {

  // main render
  return (
    <div className="w-full flex h-[calc(100vh-140px)] justify-between gap-6 items-start">
      {/* messages */}
      <div className="w-full overflow-hidden h-full border flex flex-col justify-start border-primary-border rounded-primary bg-white">
        {/* header */}
        <div className="border-b shrink-0 w-full flex justify-between items-center gap-3 px-5 py-4 border-primary-border">
          <p className="text-2xl font-medium">Messages</p>
          <div className="flex items-center gap-2 w-72 px-3 py-2.5 border border-black/60 bg-[rgba(243,244,246,0.70)] rounded-full focus-within:ring-2 focus-within:ring-primary/40 transition">
            <CiSearch size={22} className="text-gray-600" />
            <input
              type="text"
              placeholder="Search contacts"
              className="w-full bg-transparent outline-none text-sm placeholder:text-gray-500"
            />
          </div>
        </div>
        {/* body conversations and messages */}
        <div className="w-full h-full overflow-hidden flex">
          {/* conversations */}
          <div className="border-r bg-white w-60 shrink-0 border-primary-border h-full overflow-y-auto">
            {
              conversations.map((conversations) => (
                <ConversationBubble key={conversations.id} conversation={conversations} />
              ))
            }
          </div>
          {/* messages */}
          <div className="w-full h-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>
      {/* user list and most popular news */}
      <RightSideBar />
    </div>
  )
}

export default MessageLayout