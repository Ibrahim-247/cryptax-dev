import MessageBubble from "./message-bubble"

const MessageList = () => {
    const messages = [
        {
            id: 289,
            role: "user",
            message: "Hello,How are you?",
            response_type: "text",
            image_url: "https://i.pravatar.cc/150?img=1",
            created_at: "2025-11-05 05:47:30",
            time_ago: "1 week ago",
        },
        {
            id: 290,
            role: "advisor",
            message: "Hi I am fine. ",
            response_type: "text",
            image_url: "https://i.pravatar.cc/150?img=2",
            created_at: "2025-11-05 05:47:30",
            time_ago: "1 week ago",
        },
        {
            id: 291,
            role: "advisor",
            message: "Tell me How can I help you?",
            response_type: "text",
            image_url: "https://i.pravatar.cc/150?img=3",
            created_at: "2025-11-05 05:47:30",
            time_ago: "1 week ago",
        },
        {
            id: 292,
            role: "user",
            message: "I need suggestion for tax planning and investment plan",
            response_type: "text",
            image_url: "https://i.pravatar.cc/150?img=4",
            created_at: "2025-11-05 05:47:30",
            time_ago: "1 week ago",
        },
        {
            id: 293,
            role: "advisor",
            message: "Tell me How can I help you?",
            response_type: "text",
            image_url: "https://i.pravatar.cc/150?img=5",
            created_at: "2025-11-05 05:47:30",
            time_ago: "1 week ago",
        },
        {
            id: 294,
            role: "user",
            message: "I need suggestion for tax planning and investment plan. I have company with 1000+ employees  and 5000+ customers and I need to know how can I plan my tax and investment plan for my company and my employees and my customers  I need suggestion for tax planning and investment plan. I have company with 1000+ employees and 5000+ customers and I need to know how can I plan my tax and investment plan for my company and my employees and my customers.I need suggestion for tax planning and investment plan. I have company with 1000+ employees and 5000+ customers and I need to know how can I plan my tax and investment plan for my company and my employees and my customers",
            response_type: "text",
            image_url: "https://i.pravatar.cc/150?img=6",
            created_at: "2025-11-05 05:47:30",
            time_ago: "1 week ago",
        }
    ]
    // main render
    return (
        <div className="w-full flex flex-col pr-2  gap-4 md:gap-8 justify-start h-full overflow-y-auto">
            {
                messages?.map((message, i) => <MessageBubble message={message} key={i} />)
            }
        </div>
    )
}

export default MessageList