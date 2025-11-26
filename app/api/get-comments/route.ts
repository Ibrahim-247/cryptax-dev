import { Comment, CommentsResponse } from "@/types";
import { NextResponse } from "next/server";

// GET /api/getPostComments?postId=1&page=1&limit=10
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const postId = searchParams.get("postId");
    const page = Number(searchParams.get("page") ?? "1");
    const per_page = Number(searchParams.get("limit") ?? "10");
    const skip = (page - 1) * per_page;

    if (!postId) {
        return NextResponse.json(
            { success: false, code: 400, message: "Missing postId parameter" },
            { status: 400 }
        );
    }

    const url = `https://dummyjson.com/comments/post/${postId}?limit=${per_page}&skip=${skip}`;

    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(
                `Failed to fetch comments: ${res.status} ${res.statusText}`
            );
        }

        const json: { comments: Comment[]; total: number } = await res.json();

        const formatted: CommentsResponse = {
            success: true,
            code: 200,
            message: "Comments retrieved successfully",
            data: {
                comments: json.comments,
                pagination: {
                    total_page: Math.ceil(json.total / per_page),
                    per_page,
                    total_item: json.total,
                    current_page: page,
                },
            },
        };

        return NextResponse.json(formatted);
    } catch (error: unknown) {
        console.error("Fetch comments error:", error);

        let message = "Failed to fetch comments";
        if (error instanceof Error) {
            message = error.message;
        }

        return NextResponse.json(
            { success: false, code: 500, message },
            { status: 500 }
        );
    }
}
