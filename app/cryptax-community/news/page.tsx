import axiosPublic from "@/lib/axios.public";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NewsListClient from "./components/news-list-client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Crypto & Tax News Netherlands – Latest Updates | CRYPTAX',
    description: 'Stay informed with curated Dutch crypto and tax news from trusted sources. Clean, structured updates tailored for serious users.',
}

const News = async () => {
    // client
    const queryClient = new QueryClient();
    // axios 
    const axiosInstance = axiosPublic();
    // prefetch
    await queryClient.prefetchQuery({
        queryKey: ["all-news"],
        queryFn: async () => {
            const res = await axiosInstance.get(`/get-news`);
            return res.data?.articles || [];
        },
    });

    // main render
    return (
        <div className='w-full flex flex-col justify-start gap-3 2xl:gap-5'>
            <p className="text-2xl font-bold">All news</p>
            {/* news list client */}
            <HydrationBoundary state={dehydrate(queryClient)}>
                <NewsListClient />
            </HydrationBoundary>
        </div>
    )
}

export default News