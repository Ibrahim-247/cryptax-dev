'use client';
import Image from "next/image";
import ai_icon from "@/public/images/ai_icon.png";
interface MessageBubbleProps {
    message: {
        id: number;
        role: string;
        message: string;
        response_type: string;
        image_url: string | null;
        created_at: string;
        time_ago: string;
    };
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
    const isAI = message.role === "assistant";

    return (
        <div className={`flex w-full items-start gap-3 ${isAI ? "justify-start" : "justify-end"}`}>
            {/* Avatar (only on left side for advisor) */}
            {isAI && (
                <div className="md:size-12 p-2 sm:p-3 sm:size-10 size-8 rounded-full border bg-black overflow-hidden shrink-0">
                    <Image
                        src={ai_icon.src || ""}
                        alt="avatar"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                    />
                </div>
            )}

            {/* Bubble */}
            <div className={` text-black sm:p-3 p-2 rounded-sm text-sm sm:text-base font-medium  ${isAI ? "bg-gray-100" : "bg-primary/70  "}`}>
                {message.message}
                <div className="text-sm opacity-60  text-right">
                    {message.time_ago}
                </div>
            </div>

            {/* Avatar for user on right side (optional) */}
            {!isAI && (
                <div className="md:size-12 sm:size-10 size-8 rounded-full overflow-hidden shrink-0">
                    <Image
                        src={message.image_url || ""}
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
