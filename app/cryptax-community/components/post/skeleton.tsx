// components/post/PostCardSkeleton.tsx
import { FiHeart, FiMessageCircle, FiRepeat, FiShare } from "react-icons/fi";

export default function PostCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Blue Header */}
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500 to-blue-600">
                <div className="w-12 h-12 rounded-full bg-blue-400 animate-pulse" />
                <div className="flex-1 space-y-2">
                    <div className="h-5 w-36 bg-blue-400 rounded animate-pulse" />
                    <div className="h-4 w-28 bg-blue-300 rounded animate-pulse" />
                </div>
            </div>

            {/* Body */}
            <div className="p-5 pt-4 space-y-5">
                {/* User Info */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse" />
                        <div className="space-y-2">
                            <div className="h-4 w-40 bg-gray-300 rounded animate-pulse" />
                            <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                        </div>
                    </div>
                    <div className="h-9 w-24 bg-blue-100 rounded-full animate-pulse" />
                </div>

                {/* Post Text */}
                <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-9/12 bg-gray-200 rounded animate-pulse" />
                </div>

                {/* Image (rain + mushroom style) */}
                <div className="w-full h-96 bg-gray-200 rounded-xl animate-pulse" />

                {/* Hashtags */}
                <div className="flex gap-3 flex-wrap">
                    <div className="h-7 w-20 bg-gray-200 rounded-full animate-pulse" />
                    <div className="h-7 w-24 bg-gray-200 rounded-full animate-pulse" />
                    <div className="h-7 w-16 bg-gray-200 rounded-full animate-pulse" />
                </div>

                {/* Reaction Bar - Using react-icons/fi */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-8 text-gray-400">
                        <div className="flex items-center gap-2">
                            <FiHeart className="w-5 h-5" />
                            <div className="h-3 w-12 bg-gray-300 rounded animate-pulse" />
                        </div>
                        <div className="flex items-center gap-2">
                            <FiMessageCircle className="w-5 h-5" />
                            <div className="h-3 w-10 bg-gray-300 rounded animate-pulse" />
                        </div>
                        <div className="flex items-center gap-2">
                            <FiRepeat className="w-5 h-5" />
                            <div className="h-3 w-8 bg-gray-300 rounded animate-pulse" />
                        </div>
                        <div className="flex items-center gap-2">
                            <FiShare className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="h-3 w-20 bg-gray-300 rounded animate-pulse" />
                </div>
            </div>
        </div>
    );
}