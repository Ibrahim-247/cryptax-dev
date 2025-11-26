import Image from "next/image"
import banner from "@/public/images/currency_image.png"
import CommonButton from "@/components/common/common-button"
import { FaPlus } from "react-icons/fa6"
import UserPostList from "../components/user-post-list"
import { PostsResponse } from "@/types"


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
            <div className="w-full h-56 rounded-primary relative ">
                <Image width={400} height={200} src={banner.src} alt="banner" className="w-full rounded-primary h-full hover:grayscale-20   ease-in-out transition-all object-cover" />
                <div className="size-32 absolute -bottom-10 left-6 shrink-0 rounded-full border-4 border-white">
                    <Image width={80} height={80} src={'https://i.pravatar.cc'} alt="user" className="w-full rounded-full h-full object-cover" />
                </div>
            </div>
            {/* profile details */}
            <div className="w-full mt-14 flex justify-between flex-col items-center gap-3">
                {/* user details */}
                <div className="w-full flex justify-between items-center gap-3">
                    <div className="flex flex-col gap-0.5">
                        <p className="text-2xl font-semibold capitalize">John Doe</p>
                        <p className="text-lg text-gray-500">Software Development Manager</p>
                    </div>
                    <CommonButton className="max-w-fit min-h-auto! py-2 text-base bg-primary cursor-pointer">Message</CommonButton>
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
                        <span>Follow</span>
                    </button>
                </div>
            </div>
            {/* About */}
            <div className="w-full mt-10 p-4 border border-primary-border rounded-md flex flex-col gap-1">
                <p className="text-base font-bold capitalize">About</p>
                <p className="text-[#4F4F4F] text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, natus.</p>
            </div>
            {/* user posts list */}
            <div className="w-full flex flex-col gap-4 mt-6">
                <p className="text-xl font-bold capitalize">Posts</p>
                <UserPostList posts={posts} pagination={pagination} />
            </div>
        </div>
    )
}

export default UserDetails