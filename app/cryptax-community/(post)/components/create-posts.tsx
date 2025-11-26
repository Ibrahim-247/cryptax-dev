"use client"
import Image from "next/image";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
const CreatePost = () => {
    const router = useRouter();
    const handleCreatePost = () => {
        router.push('/cryptax-community/create-post');
    }

    // main render
    return (
        <div className="w-full px-3 py-4 md:px-4 md:py-6 gap-4 sm:gap-5 flex flex-col bg-white rounded-primary">
            <div className="w-full flex gap-3 justify-start items-center">
                <Link href={`/cryptax-community/profile`} className="shrink-0 border border-primary size-10 sm:size-12 2xl:size-14 rounded-full overflow-hidden">
                    <Image width={56} height={56} src="https://i.pravatar.cc/150?img=1" alt="user" className="w-full h-full object-cover" />
                </Link>
                <div onClick={handleCreatePost} className="px-5  text-nowrap overflow-hidden cursor-pointer text-gray-500 py-2 sm:py-3 border border-gray-200 rounded-full w-full text-base">
                    Start a post , share your thoughts....
                </div>
            </div>
            <div className="pl-4 md:pl-6 flex gap-4 md:gap-8 justify-start items-center">
                <button type="button" onClick={handleCreatePost} className="flex cursor-pointer gap-3 justify-start items-center">
                    <IoVideocamOutline className="text-2xl shrink-0 text-primary" />
                    <span className="text-sm ">Video</span>
                </button>
                <button type="button" onClick={handleCreatePost} className="flex cursor-pointer gap-3 justify-start items-center">
                    <FaRegImage className="text-2xl shrink-0 text-[#00A63E]" />
                    <span className="text-sm ">Image</span>
                </button>
            </div>
        </div>
    )
}

export default CreatePost