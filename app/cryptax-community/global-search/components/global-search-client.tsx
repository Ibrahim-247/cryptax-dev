"use client";
import { useState, useMemo } from "react";
import MostPopularNewsCard from "../../news/components/most-popular-news-card";
import PostCard from "../../components/post/post";
import { Post, News } from "@/types";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

interface Props {
    query: string;
}

const GlobalSearchClient = ({ query }: Props) => {
    const [filter, setFilter] = useState<null | string>(null);
    const [search, setSearch] = useState<string>(query ?? "");

    // Filter options
    const filterOptions = [
        { label: "All", value: null },
        { label: "News", value: "article" },
        { label: "People", value: "people" },
        { label: "Posts", value: "post" },
    ];

    // Fake results
    const results = [
        {
            id: 1,
            type: "article",
            news: {
                source: { id: null, name: "NBCSports.com" },
                author: "Mike Florio",
                title: "Report: Lane Kiffin wants to finish year at Ole Miss before leaving for LSU - NBC Sports",
                description: "The Lane Kiffin delay seems to trace to a desire to leave for LSU after finishing the season at Mississippi.",
                url: "https://www.nbcsports.com/.../",
                urlToImage: "https://nbcsports.brightspotcdn.com/.../",
                publishedAt: "2025-11-30T03:57:26Z",
                content: "The Lane Kiffin delay seems to trace to a desire ..."
            }
        },
        {
            id: 2,
            type: "post",
            post: {
                id: 1,
                tags: ["tag1", "tag2"],
                body: "",
                media: [
                    { id: 1764567522892, link: "https://assets.mixkit.co/videos/preview/mixkit-6-large.mp4", type: "video" },
                    { id: 1764567323522892, link: "https://assets.mixkit.co/videos/preview/mixkit-6-large.mp4", type: "video" },
                    { id: 1764567323522893, link: "https://assets.mixkit.co/videos/preview/mixkit-6-large.mp4", type: "video" }
                ],
                reactions: { likes: 859, dislikes: 32 },
                title: "He was an expert but not in a discipline",
                userId: 91,
                views: 4884
            }
        },
        {
            id: 3,
            type: "people",
            person: {
                id: 1,
                name: "John Doe",
                username: "@johndoe",
                profession: "Works at Rotaract Club of Entertainment",
                image: "https://i.pravatar.cc/150?img=1",
                isFollowing: true
            }
        }
    ];

    // === Filtering logic ===
    const filteredResults = useMemo(() => {
        return results.filter((item) => {
            if (filter && item?.type !== filter) return false;

            if (!search) return true;

            // Search across all types
            if (item.type === "article") {
                return item?.news?.title.toLowerCase().includes(search.toLowerCase());
            }
            if (item.type === "post") {
                return item?.post?.title.toLowerCase().includes(search.toLowerCase());
            }
            if (item.type === "people") {
                return item?.person?.name.toLowerCase().includes(search.toLowerCase());
            }

            return true;
        });
    }, [filter, results, search]);

    return (
        <div className="w-full flex flex-col gap-4 sm:gap-6">

            {/* Search title */}
            {search && (
                <p className="text-base font-semibold">
                    Search results for: <span className="text-primary">{search}</span>
                </p>
            )}

            {/* Search bar */}
            <input
                type="text"
                className="w-full outline-none p-3 border border-primary-border rounded text-base font-medium placeholder:text-gray-500"
                placeholder="Type your message"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Filter options */}
            <div className="flex justify-start items-center gap-4 flex-wrap">
                {filterOptions.map((item, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => setFilter(item.value)}
                        className={`text-sm font-semibold cursor-pointer border rounded-full px-3 md:px-6 py-1.5 ${item.value === filter
                            ? "border-primary text-primary"
                            : "text-[#4F4F4F] border-[#808080]"
                            }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* Results */}
            <div className="w-full flex flex-col gap-4">
                {filteredResults.map((item, i) => {
                    if (item.type === "article") {
                        return <MostPopularNewsCard article={item.news as News} index={i} key={i} />;
                    }
                    if (item.type === "post") {
                        return <PostCard post={item.post as Post} key={i} />;
                    }
                    if (item.type === "people") {
                        return (
                            <div className="w-full flex justify-between items-start bg-white rounded-primary p-4" key={i}>
                                <div className="flex items-start gap-2">
                                    <div className="size-10 rounded-full overflow-hidden">
                                        <Image
                                            width={40}
                                            height={40}
                                            src={item?.person?.image || ""}
                                            alt={item?.person?.name || ""}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-semibold">{item?.person?.name}</p>
                                        <p className="text-xs text-black/80">{item?.person?.profession}</p>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    className="border border-primary cursor-pointer px-3 py-1 rounded-full flex items-center gap-2 text-primary"
                                >
                                    <FaPlus />
                                    <span>Follow</span>
                                </button>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default GlobalSearchClient;
