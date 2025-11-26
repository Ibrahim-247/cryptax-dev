'use client';
import Image from "next/image";

interface MessageBubbleProps {
    id: number;
    name: string;
    message: string;
    time: string;
    image: string | null;
}

const MessageBubble = ({ message }: { message: MessageBubbleProps }) => {
    const isOther = message.name === "John Doe";
    // main render
    return (
        <div className={`flex w-full items-start gap-3 ${isOther ? "justify-start" : "justify-end"}`}>
            {/* Avatar (only on left side for other users) */}
            {isOther && (
                <div className="size-9 border border-primary  rounded-full overflow-hidden shrink-0">
                    <Image
                        src={message.image || ""}
                        alt="avatar"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Bubble */}
            <div className={` text-black p-2 rounded-sm text-sm font-medium  ${isOther ? "bg-gray-100" : "bg-primary/70  "}`}>
                {message.message}
                <div className="text-xs opacity-60  text-right">
                    {message.time}
                </div>
            </div>

            {/* Avatar for user on right side (optional) */}
            {!isOther && (
                <div className="size-9 border border-primary rounded-full overflow-hidden shrink-0">
                    <Image
                        src={message.image || ""}
                        alt="avatar"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
        </div>
    );
};

export default MessageBubble;
