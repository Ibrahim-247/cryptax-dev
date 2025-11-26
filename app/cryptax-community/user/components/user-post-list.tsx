'use client'

import { Pagination, Post } from "@/types";
import PostCard from "../../components/post/post";

interface PostListProps {
    posts: Post[];
    pagination: Pagination;
}

const UserPostList = ({ posts, pagination }: PostListProps) => {
    return (
        <div className="w-full flex flex-col gap-6">
            {
                posts?.map((post, i) => <PostCard post={post} key={i} />)
            }
        </div>
    )
}

export default UserPostList