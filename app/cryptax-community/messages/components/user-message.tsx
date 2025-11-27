
'use client'
import { userConversation } from "@/data"
import { FaArrowRight } from "react-icons/fa6"
import MessageBubble from "./messgae-bubble"

const UserMessage = () => {
    return (
        <>
            {/* message screen */}
            <div className="w-full h-full py-3 flex gap-4 px-4 flex-col overflow-y-auto">
                {
                    userConversation?.map((message, i) => <MessageBubble message={message} key={i} />)
                }
            </div>
            {/* input screen */}
            <div className="px-4 py-3 flex shrink-0 justify-between items-center  bg-background w-full">
                <input type="text" className="w-full border-none outline-none h-full text-base font-medium placeholder:text-gray-500" name="message" id="message" placeholder="Type your message" />
                <button className="size-10 cursor-pointer -rotate-45 shrink-0 flex justify-center items-center p-1 bg-primary rounded-full text-white">
                    <FaArrowRight />
                </button>
            </div>

        </>
    )
}

export default UserMessage