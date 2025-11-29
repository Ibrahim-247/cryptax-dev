'use client';
import { Pagination, Post } from "@/types";
import PostCard from "../../components/post/post";

interface PostListProps {
    posts: Post[];
    pagination: Pagination;
}

const PostList = ({ posts, pagination }: PostListProps) => {
    console.log(posts);
    // main render
    return (
        <div className="w-full flex flex-col gap-4 md:gap-6">
            {
                posts?.map((post, i) => <PostCard post={post} key={i} />)
            }
        </div>
    )
}

export default PostList