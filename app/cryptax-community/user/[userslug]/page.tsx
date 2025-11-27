import Image from "next/image"
import banner from "@/public/images/currency_image.png"
import CommonButton from "@/components/common/common-button"
import { FaPlus } from "react-icons/fa6"
import UserPostList from "../components/user-post-list"
import { PostsResponse } from "@/types"
import { BsSendPlus } from "react-icons/bs";

const perPage = 10;

async function fetchPosts(page = 1): Promise<PostsResponse> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-posts?page=${page}&limit=${perPage}`, {
        cache: "no-store", // fetch fresh data each request
    });

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    return res.json();
}

const UserDetails = async () => {
    // fetch posts
    let data: PostsResponse;
    try {
        data = await fetchPosts();
    } catch (err) {
        console.error(err);
        data = {
            success: false,
            code: 500,
            data: { posts: [], pagination: { total_page: 0, per_page: perPage, total_item: 0, current_page: 1 } },
            message: "Failed to load posts",
        };
    }
    // extract data
    const { posts, pagination } = data?.data || {};

    // main render
    return (
        <div className='w-full flex flex-col justify-start'>
            {/* profile banner and image */}
            <div className="w-full md:h-56 h-36 sm:h-44 rounded-primary relative ">
                <Image width={400} height={200} src={banner.src} alt="banner" className="w-full rounded-primary h-full hover:grayscale-20 ease-in-out transition-all object-cover" />
                <div className="md:size-32 size-24 xs:size-28 absolute -bottom-7 md:-bottom-10 left-6 shrink-0 rounded-full border-4 border-white">
                    <Image width={80} height={80} src={'https://i.pravatar.cc'} alt="user" className="w-full rounded-full h-full object-cover" />
                </div>
            </div>
            {/* profile details */}
            <div className="w-full mt-10 md:mt-14 flex justify-between flex-col items-center gap-3">
                {/* user details */}
                <div className="w-full flex justify-between items-center gap-3">
                    <div className="flex flex-col gap-0.5">
                        <p className="sm:text-2xl text-lg font-semibold capitalize">John Doe</p>
                        <p className="sm:text-lg text-sm line-clamp-1  xs:text-base text-gray-500">Software Development Manager</p>
                    </div>
                    <CommonButton className="w-fit flex justify-center items-center gap-2 min-h-auto! py-2 text-base bg-primary cursor-pointer">
                        <BsSendPlus />
                        <span className="sm:text-base text-sm">Message</span>
                    </CommonButton>
                </div>
                {/* followers counts */}
                <div className="w-full flex gap-6 justify-start items-center">
                    <div className="flex justify-center items-center flex-col">
                        <span className="font-medium text-gray-400">440</span>
                        <span className="text-sm text-black font-semibold capitalize">Followers</span>
                    </div>
                    <hr className="h-10 border-primary-border border" />
                    <div className="flex justify-center items-center flex-col">
                        <span className="font-medium text-gray-400">440</span>
                        <span className="text-sm text-black font-semibold capitalize">Following</span>
                    </div>
                    <button type="button" className="flex gap-2 bg-primary py-2 px-4 rounded-full text-white items-center justify-center cursor-pointer">
                        <FaPlus />
                        <span className="sm:text-base text-sm">Follow</span>
                    </button>
                </div>
            </div>
            {/* About */}
            <div className="w-full mt-4 md:mt-10 p-3 md:p-4 border border-primary-border rounded-md flex flex-col gap-1">
                <p className="text-base font-bold capitalize">About</p>
                <p className="text-[#4F4F4F] text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, natus.</p>
            </div>
            {/* user posts list */}
            <div className="w-full flex flex-col gap-4 mt-4 md:mt-6">
                <p className="sm:text-xl text-lg font-bold capitalize">Posts</p>
                <UserPostList posts={posts} pagination={pagination} />
            </div>
        </div>
    )
}

export default UserDetails