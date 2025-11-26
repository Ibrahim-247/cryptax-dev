// app/api/getPosts/route.ts
import { PostsResponse, Post } from "@/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page") ?? "1");
    const limit = Number(searchParams.get("limit") ?? "10");
    const skip = (page - 1) * limit;

    const url = `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`;

    try {
        const res = await fetch(url, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
        }

        const json: { posts: Post[]; total: number } = await res.json();

        // Generate unique, beautiful media for each post
        const postsWithMedia: Post[] = json.posts.map((post) => {
            const mediaCount = Math.floor(Math.random() * 4); // 0 to 3 media items
            const media: Post["media"] = [];

            for (let i = 0; i < mediaCount; i++) {
                const isVideo = Math.random() < 0.33; // ~33% chance of video

                if (isVideo) {
                    // Free stock video from Mixkit
                    const videoId = Math.floor(Math.random() * 250) + 1;
                    media.push({
                        id: Date.now() + i,
                        link: `https://assets.mixkit.co/videos/preview/mixkit-${videoId}-large.mp4`,
                        type: "video",
                    });
                } else {
                    // Beautiful unique image from Picsum with blur-up effect
                    // Seed based on post.id + index → same post always gets same images (good for pagination!)
                    const seed = `post-${post.id}-img-${i}`;
                    media.push({
                        id: Date.now() + i,
                        link: `https://picsum.photos/seed/${seed}/1200/800?blur=2`,
                        type: "image",
                    });
                }
            }

            return {
                ...post,
                media: media.length > 0 ? media : undefined,
            };
        });

        const formatted: PostsResponse = {
            success: true,
            code: 200,
            data: {
                posts: postsWithMedia,
                pagination: {
                    total_page: Math.ceil(json.total / limit),
                    per_page: limit,
                    total_item: json.total,
                    current_page: page,
                },
            },
            message: "Posts retrieved successfully",
        };

        return NextResponse.json(formatted);
    } catch (error: unknown) {
        console.error("Fetch posts error:", error);

        const message =
            error instanceof Error ? error.message : "Internal server error";

        return NextResponse.json(
            {
                success: false,
                code: 500,
                message,
            },
            { status: 500 }
        );
    }
}
