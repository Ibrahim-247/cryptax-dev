"use client"

import { Post } from "@/types"
import { Popover } from "antd"
import Image from "next/image"
import { BsThreeDots } from "react-icons/bs"
import { FaPlus, FaTrash } from "react-icons/fa6"
import { FaLink } from "react-icons/fa";


// post actions
const PostActionsContent = () => {
    return (
        <div className="bg-white w-56 p-3 rounded flex flex-col gap-2">
            <button type="button" className="w-full cursor-pointer flex justify-start items-center gap-3">
                <FaLink />
                <span>Copy link to share</span>
            </button>
            <button type="button" className="w-full cursor-pointer flex justify-start items-center gap-3">
                <FaTrash />
                <span>Delete</span>
            </button>
        </div>
    )
}



const PostHeader = ({ post }: { post: Post }) => {

    // main render
    return (
        <div className="w-full p-3 md:p-4 gap-2 2xl:gap-4 flex flex-col justify-start items-start">
            {/* user info */}
            <div className="w-full flex justify-between gap-4">
                {/* user info */}
                <div className="flex justify-start items-start gap-3">
                    <div className="shrink-0 size-10 sm:size-12 2xl:size-14 rounded-full overflow-hidden border border-primary">
                        <Image
                            width={56}
                            height={56}
                            src="https://i.pravatar.cc/150?img=1"
                            alt="user"
                            loading="eager"
                            className="size-full rounded-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="2xl:text-lg text-sm md:text-base font-semibold line-clamp-1">User Name</span>
                        <span className="text-sm line-clamp-1 text-[#4F4F4F]">
                            Manager Business Tax at Deloitte Nederland
                        </span>
                        <time className="text-xs">{new Date().toDateString()}</time>
                    </div>
                </div>
                {/* post actions */}
                <div className="flex justify-end items-center shrink-0 gap-2 2xl:gap-4">
                    <button
                        type="button"
                        className="sm:border cursor-pointer sm:border-primary font-medium h-fit flex justify-center items-center gap-3 text-base sm:px-3 md:px-6 sm:py-1 md:py-2 rounded-full text-primary"
                    >
                        <FaPlus className="sm:block hidden" />
                        <span>Follow</span>
                    </button>
                    <Popover placement="left" content={<PostActionsContent />}>
                        <button type="button" className="shrink-0 cursor-pointer text-[#4F4F4F]">
                            <BsThreeDots size={22} />
                        </button>
                    </Popover>
                </div>
            </div>
            {/* post title and tags */}
            <p className="text-[#373737] line-clamp-4 sm:line-clamp-none sm:text-base">{post.body}</p>
            {/* tags */}
            <div className="flex gap-2 flex-wrap">
                {post?.tags.map((tag, i) => (
                    <span key={i} className="text-sm text-primary font-medium">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default PostHeader