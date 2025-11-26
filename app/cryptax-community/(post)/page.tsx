import type { Metadata } from "next";
import CreatePost from "./components/create-posts";
import PostList from "./components/post-list";
import { PostsResponse } from "@/types";
import fakeDelay from "@/utils/fakeDelay";

export const metadata: Metadata = {
  title: "CRYPTAX – Dutch Crypto & Tax Knowledge Hub",
  description:
    "Discover the central Dutch platform for crypto and taxation. Access AI search, community insights, news, podcasts, and tools. Join us now!",
};

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

const Posts = async () => {
  //  await fakeDelay(100000);
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
    <div className="w-full flex flex-col gap-4 sm:gap-6">
      {/* create post */}
      <CreatePost />
      {/* posts list */}
      <PostList posts={posts} pagination={pagination} />
    </div>
  );
};

export default Posts;
