import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Messages – Your Crypto & Tax Conversations | CRYPTAX',
    description: 'Manage your chats, conversations, and community interactions in a clean, professional messaging environment.',
}

export default function NoMessage() {
    return (
        <div className="w-full h-full  flex flex-col items-center justify-center  p-6 bg-white">
            {/* Illustration */}
            <div className="w-36 h-36 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    className="w-20 h-20 opacity-90"
                    aria-hidden
                >
                    <g fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M10 44c0 3.314 5.373 6 12 6s12-2.686 12-6" strokeLinecap="round" />
                        <path d="M14 22a6 6 0 110 12 6 6 0 010-12z" strokeLinecap="round" />
                        <path d="M38 22a6 6 0 110 12 6 6 0 010-12z" strokeLinecap="round" />
                        <path d="M22 18l20-6v28l-8 6-12-6V18z" strokeLinejoin="round" />
                    </g>
                </svg>
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
