'use client'
import { CiSearch } from "react-icons/ci"
import ConversationBubble from "./conversation-bubble"
import { conversations } from "@/data"
import { IoIosArrowBack } from "react-icons/io";
import { Tooltip } from "antd";
import { useState } from "react";
const MessageLayoutClient = ({ children }: { children: React.ReactNode }) => {
    const [isContactsOpen, setIsContactsOpen] = useState<boolean>(true)
    const toggleContacts = () => {
        setIsContactsOpen(!isContactsOpen)
    }

    // main render
    return (
        <div className="w-full  overflow-hidden h-full border flex flex-col justify-start border-primary-border rounded-primary bg-white">
            {/* header */}
            <div className="border-b shrink-0 w-full flex justify-between items-center gap-3 md:px-5 px-3 py-3 md:py-4 border-primary-border">
                <div className="flex justify-start items-center gap-2">
                    {/* back button */}
                    {
                        !isContactsOpen &&
                        <Tooltip title="Open Contacts">
                            <button onClick={toggleContacts} className="size-8 cursor-pointer flex md:hidden border border-gray-200 bg-primary text-white justify-center items-center text-lg sm:text-xl rounded-full">
                                <IoIosArrowBack className='' />
                            </button>
                        </Tooltip>
                    }
                    <p className="md:text-2xl shrink-0 text-base sm:text-xl font-medium">Messages</p>
                </div>
                {/* search input */}
                <div className="flex items-center gap-2 md:w-72 px-3 py-1 sm:py-2.5 border border-black/60 bg-[rgba(243,244,246,0.70)] rounded-full focus-within:ring-2 focus-within:ring-primary/40 transition">
                    <CiSearch size={22} className="text-gray-600" />
                    <input
                        type="text"
                        placeholder="Search contacts"
                        className="w-full bg-transparent outline-none text-sm placeholder:text-gray-500"
                    />
                </div>
            </div>
            {/* body conversations and messages */}
            <div className="w-full h-full overflow-hidden relative flex">
                {/* conversations */}
                <div className={`border-r bg-white md:static transform 
        ${isContactsOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 z-20 inset-0 absolute w-full 
        md:w-52 2xl:w-60 shrink-0 border-primary-border h-full 
        overflow-y-auto transition-transform duration-300`} >
                    {
                        conversations.map((conversations) => (
                            <ConversationBubble key={conversations.id} conversation={conversations} onClick={toggleContacts} />
                        ))
                    }
                </div>
                {/* messages */}
                <div className="w-full h-full overflow-hidden">
                    {children}
                </div>
            </div>
        </div >
    )
}

export default MessageLayoutClient