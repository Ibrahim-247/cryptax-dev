import Image from "next/image";

interface MessageBubbleProps {
    message: {
        id: number;
        role: string;
        message: string;
        response_type: string;
        image_url: string;
        created_at: string;
        time_ago: string;
    };
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
    const isAdvisor = message.role === "advisor";

    return (
        <div
            className={`flex w-full items-start gap-3 ${isAdvisor ? "justify-start" : "justify-end"
                }`}
        >
            {/* Avatar (only on left side for advisor) */}
            {isAdvisor && (
                <div className="size-12 rounded-full overflow-hidden shrink-0">
                    <Image
                        src={message.image_url}
                        alt="avatar"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Bubble */}
            <div
                className={` text-black p-3 rounded-sm text-base font-medium  
          ${isAdvisor ? "bg-gray-100" : "bg-primary/70  "}
        `}
            >
                {message.message}
                <div className="text-sm opacity-60  text-right">
                    {message.time_ago}
                </div>
            </div>

            {/* Avatar for user on right side (optional) */}
            {!isAdvisor && (
                <div className="size-12 rounded-full overflow-hidden shrink-0">
                    <Image
                        src={message.image_url}
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
