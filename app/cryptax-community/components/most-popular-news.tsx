'use client'

import axiosPublic from "@/lib/axios.public"
import { News } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Empty, Result } from "antd";
import NewsCardSkeleton from "../news/components/news-card-skeleton";
import MostPopularNewsCard from "../news/components/most-popular-news-card";

const MostPopularNews = () => {
    // axios
    const axiosInstance = axiosPublic();
    // query
    const { data, isLoading, isError } = useQuery({
        queryKey: ['most-popular-news'],
        queryFn: async () => {
            const res = await axiosInstance.get(
                `/get-news`
            );
            return res.data;
        }
    });
    // main render
    return (
        <div className="w-full flex flex-col gap-4 justify-start items-start">
            <p className="text-2xl font-bold">Most popular news</p>
            <div className="w-full flex flex-col  gap-4 justify-start">
                {isLoading ? (
                    Array.from({ length: 4 }).map((_, i) => (
                        <NewsCardSkeleton imageWrapperClass="size-28" key={i} />
                    ))
                ) : isError ? (
                    <div className="w-full h-full flex justify-center items-center">
                        <Result
                            status="404"
                            title="404"
                            subTitle="Sorry, something went wrong."
                        />
                    </div>
                ) : !data || data?.articles?.length === 0 ? (
                    <div className="w-full h-full flex justify-center items-center">
                        <Empty description="No news found at the moment" />
                    </div>
                ) : (
                    data?.articles
                        .slice(0, 8)  // ← limit to 4 articles
                        .map((article: News, i: number) => (
                            <MostPopularNewsCard index={i} key={i} article={article} />
                        ))
                )}
            </div>
        </div>
    )
}

export default MostPopularNews;
