import { PostsResponse } from "@/types";
import { Metadata } from "next"
import MyPostList from "../components/my-postlist";


export const metadata: Metadata = {
    title: 'My Posts – Your Crypto & Tax Contributions | CRYPTAX',
    description: 'View and manage all posts you’ve created on CRYPTAX. Organize your insights, discussions, and contributions to the crypto & tax community.',
}

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

const Profile = async () => {
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

    return (
        <div className='w-full'>
            <MyPostList posts={posts} pagination={pagination} />
        </div>
    )
}

export default Profile