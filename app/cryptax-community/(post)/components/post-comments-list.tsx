/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { CommentsResponse, Post } from "@/types";
import { Empty, Result } from "antd";
import Image from "next/image"
import { useEffect, useState } from "react";
import { LuSend } from "react-icons/lu"
import Comment from "../../components/post/comment";

const PostCommentList = ({ post }: { post: Post }) => {
    const perPage = 10;
    const [commentsData, setCommentsData] = useState<CommentsResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    async function fetchComments(page = 1): Promise<CommentsResponse> {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-comments?postId=${post.id}&page=${page}&limit=${perPage}`,
            { cache: "no-store" }
        );

        if (!res.ok) {
            throw new Error("Failed to fetch comments");
        }

        return res.json();
    }
    useEffect(() => {
        const loadComments = async () => {
            try {
                const data = await fetchComments();
                setCommentsData(data);
            } catch (err) {
                console.error(err);
                setError("Failed to load comments");
            } finally {
                setLoading(false);
            }
        };

        loadComments();
    }, [post.id]);
    // extract data
    const comments = commentsData?.data?.comments ?? [];


    // main render
    return (
        <div className="w-full p-4 border-t border-primary-border flex flex-col gap-5 md:gap-10">
            {/* Comment send */}
            <div className="flex justify-between items-center gap-4">
                <Image
                    width={40}
                    height={40}
                    src="https://i.pravatar.cc/150?img=1"
                    alt="user"
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className="w-full py-2 bg-[#FCFCFC] flex justify-between items-center px-4 border border-[#BCBCBC] rounded-full">
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        className="w-full border-none outline-none"
                    />
                    <LuSend className="text-xl cursor-pointer shrink-0" />
                </div>
            </div>
            {/* Comments list */}
            <div className="w-full flex flex-col gap-4">
                {loading && (
                    <div className="w-full py-4 sm:py-6 flex flex-col gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => (
                            <div key={index} className="w-full flex gap-3 justify-start items-start">
                                <div className="size-10 shrink-0 bg-gray-200 rounded-full animate-pulse" />
                                <div className="w-full relative flex flex-col justify-start items-start px-4 py-6 animate-pulse border border-[#BCBCBC] rounded-primary bg-[#FCFCFC]" />
                            </div>
                        ))}
                    </div>
                )}
                {error &&
                    <div className="w-full py-6 flex justify-center items-center">
                        <Result status="error" title="Error loading comments" />
                    </div>
                }
                {!loading && !error && comments.length === 0 && (
                    <div className="w-full py-6 flex justify-center items-center">
                        <Empty description="Be the first to comment on this post" />
                    </div>
                )}
                {comments.map((comment, index) => (
                    <Comment key={comment.id || index} comment={comment} />
                ))}
            </div>
        </div>
    )
}

export default PostCommentList