import React from "react"
import { Metadata } from "next"
import RightSideBar from "@/components/shared/right-aside"
import MessageLayoutClient from "./components/message-layout-client"
import fakeDelay from "@/utils/fakeDelay"

export const metadata: Metadata = {
  title: 'Messages – Your Crypto & Tax Conversations | CRYPTAX',
  description: 'Manage your chats, conversations, and community interactions in a clean, professional messaging environment.',
}

const MessageLayout = async ({ children }: { children: React.ReactNode }) => {
  await fakeDelay(100);
  // main render
  return (
    <div className="w-full flex h-[calc(100vh-140px)] justify-between gap-6 items-start">
      {/* messages */}
      <MessageLayoutClient>{children}</MessageLayoutClient>
      {/* user list and most popular news */}
      <RightSideBar />
    </div>
  )
}

export default MessageLayout