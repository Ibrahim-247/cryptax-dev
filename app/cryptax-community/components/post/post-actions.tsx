'use client'
import { FaRegComment } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { LuSend } from "react-icons/lu";

interface Props {
    toggleComments: () => void
}

const PostActions = ({ toggleComments }: Props) => {

    // main render
    return (
        <div className="w-full grid grid-cols-4 gap-2 lg:gap-4 px-3 lg:px-6 py-2 md:py-3">
            <button className="flex shrink-0 gap-3 justify-center items-center cursor-pointer">
                <AiOutlineLike className="text-xl shrink-0" /> <span className="hidden sm:block">Like</span>
            </button>
            <button onClick={toggleComments} type="button" className="flex shrink-0 gap-3 justify-center items-center cursor-pointer">
                <FaRegComment className="text-xl shrink-0" /> <span className="hidden sm:block">Comment</span>
            </button>
            <button className="flex shrink-0 gap-3 justify-center items-center cursor-pointer">
                <BiRepost className="text-2xl shrink-0" /> <span className="hidden sm:block">Repost</span>
            </button>
            <button className="flex shrink-0 gap-3 justify-center items-center cursor-pointer">
                <LuSend className="text-xl shrink-0" /> <span className="hidden sm:block">Send</span>
            </button>
        </div>
    )
}

export default PostActions