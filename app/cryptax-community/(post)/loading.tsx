
import { FaRegImage } from 'react-icons/fa'
import { IoVideocamOutline } from 'react-icons/io5'
import PostCardSkeleton from '../components/post/skeleton'

const PostListLoading = () => {
    return (
        <div className="w-full flex flex-col gap-4 sm:gap-6">
            {/* create post */}
            <div className="w-full border border-primary-border px-3 py-4  md:px-4 md:py-6 gap-4 sm:gap-5 flex flex-col bg-white rounded-primary">
                {/* user info */}
                <div className="w-full flex gap-3 justify-start items-center">
                    <div className="size-10 shrink-0 bg-slate-300 sm:size-12 2xl:size-14 rounded-full overflow-hidden animate-pulse" />
                    <div className="px-5 text-nowrap overflow-hidden cursor-pointer text-gray-500 py-2 sm:py-6 border border-gray-200 rounded-full w-full text-base animate-pulse" />
                </div>
                {/* post options */}
                <div className="pl-4 md:pl-6 flex gap-4 md:gap-8 justify-start items-center">
                    <button type="button" className="flex cursor-pointer gap-3 justify-start items-center">
                        <IoVideocamOutline className="text-2xl shrink-0 animate-pulse text-primary" />
                        <span className="text-sm w-10 h-1 bg-slate-300 animate-pulse " />
                    </button>
                    <button type="button" className="flex cursor-pointer gap-3 justify-start items-center">
                        <FaRegImage className="text-2xl animate-pulse shrink-0 text-[#00A63E]" />
                        <span className="text-sm w-10 h-1 bg-slate-300 animate-pulse " />
                    </button>
                </div>
            </div>
            {/* posts list */}
            <div className="w-full flex flex-col gap-4 md:gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                    <PostCardSkeleton key={i} />
                ))}
            </div>
        </div>
    )
}

export default PostListLoading