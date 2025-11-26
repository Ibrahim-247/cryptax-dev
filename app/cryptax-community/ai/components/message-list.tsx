'use client'
import { ai_messages } from "@/data"
import MessageBubble from "./message-bubble"

const MessageList = () => {

    // main render
    return (
        <div className="w-full flex flex-col pr-2 gap-4 md:gap-8 justify-start h-full overflow-y-auto">
            {
                ai_messages?.map((message, i) => <MessageBubble message={message} key={i} />)
            }
        </div>
    )
}

export default MessageList