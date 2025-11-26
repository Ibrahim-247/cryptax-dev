'use client'

import LikeIcon from "@/components/icons/like"
import { Post } from "@/types"

const PostReactions = ({ post }: { post: Post }) => {
    return (
        <div className="w-full flex justify-between items-center gap-2 md:gap-4 px-3 md:px-6 py-2 md:py-3 text-[#373737] border-b border-[#F3F4F6]">
            <div className="flex shrink-0 justify-start items-center gap-3">
                <LikeIcon />
                <span className="text-sm ">{post.reactions?.likes} others</span>
            </div>
            <p className="text-sm ">
                <span className="mr-2">{Math.floor(post.reactions?.likes / 2)}</span>
                <span>comments</span>
            </p>
            <p className="text-sm ">
                <span className="mr-2">{Math.floor(post.reactions?.likes / 3)}</span>
                <span>shares</span>
            </p>
        </div>
    )
}

export default PostReactions