'use client'

import { MessageConversation } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
    conversation: MessageConversation
    onClick: () => void
}


const ConversationBubble = ({ conversation, onClick }: Props) => {

    const pathname = usePathname()
    const isActive = pathname === `/cryptax-community/messages/${conversation.id}`

    return (
        <Link
            href={`/cryptax-community/messages/${conversation.id}`}
            className={`w-full flex justify-start items-center gap-3 border-b border-primary-border py-2 px-3 transition
                ${isActive ? "bg-primary/10" : ""}`}
            onClick={onClick}
        >
            <div className={`size-10 border-2 shrink-0 rounded-full overflow-hidden 
                ${isActive ? "border-primary" : "border-primary-border"}`}>
                <Image
                    width={40}
                    height={40}
                    src={conversation.image}
                    alt={conversation.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col justify-start items-start">
                <p className={`text-sm font-bold ${isActive ? "text-primary" : ""}`}>
                    {conversation.name}
                </p>
                <p className="text-xs line-clamp-1 text-gray-500">
                    {conversation.message}
                </p>
            </div>
        </Link>
    )
}

export default ConversationBubble
