import { Metadata } from "next";
import { FaRegMessage } from "react-icons/fa6";

export const metadata: Metadata = {
    title: 'Messages – Your Crypto & Tax Conversations | CRYPTAX',
    description: 'Manage your chats, conversations, and community interactions in a clean, professional messaging environment.',
}

export default function NoMessage() {
    return (
        <div className="w-full h-full  flex flex-col items-center justify-center p-4 2xl:p-6 bg-white">
            {/* Illustration */}
            <div className="2xl:size-36 size-26 text-4xl flex items-center justify-center rounded-full bg-gray-50 border border-gray-100">
                <FaRegMessage />
            </div>
            {/* Text */}
            <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="text-2xl font-semibold text-slate-800">No messages yet</h2>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                    Select a user from the left to start chatting, or start a new conversation to begin.
                    Conversations will appear here.
                </p>
            </div>
        </div>
    );
}
