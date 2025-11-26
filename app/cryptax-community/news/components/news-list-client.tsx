"use client"
import axiosPublic from "@/lib/axios.public";
import { News } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Empty, Result } from "antd";
import { useState } from "react";
import NewsCardSkeleton from "./news-card-skeleton";
import NewsCard from "./news-card";

const NewsListClient = () => {
    const [filter, setFilter] = useState<null | string>(null);
    const axiosInstance = axiosPublic();
    // filter options
    const filterOptions = [
        {
            label: 'All news',
            value: null
        },
        {
            label: 'Analysis',
            value: 'analysis'
        },
        {
            label: 'Taxation',
            value: 'taxation'
        }

    ];
    // query 
    const { data, isLoading, isError } = useQuery({
        queryKey: ['all-news', filter],
        queryFn: async () => {
            const res = await axiosInstance.get(
                `/get-news`, {
                params: {
                    filter
                }
            }
            );
            return res.data?.articles || [];
        }
    })
    // main render
    return (
        <div className="flex flex-col w-full justify-start gap-5 2xl:gap-10">
            <div className="flex justify-start items-center gap-4 flex-wrap">
                {filterOptions?.map((item, i) => (
                    <button key={i} type="button" onClick={() => setFilter(item.value)} className={`text-sm font-semibold cursor-pointer border rounded-full px-2 md:px-4 py-1 md:py-2 ${item.value === filter ? 'border-primary text-primary' : 'text-[#4F4F4F] border-[#808080]'}`}>
                        {item.label}
                    </button>
                ))}
            </div>
            {/* news list */}
            <div className="w-full flex flex-col justify-start items-start gap-4">
                {isLoading ? (
                    Array.from({ length: 4 }).map((_, i) => (
                        <NewsCardSkeleton imageWrapperClass='2xl:size-52  size-28 md:size-40' key={i} />
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
                    data?.slice(0, 8)?.map((article: News, i: number) => (
                        <NewsCard index={i} key={i} article={article} />
                    ))
                )}
            </div>
        </div>
    )
}

export default NewsListClient