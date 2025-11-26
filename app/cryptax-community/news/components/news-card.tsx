/* eslint-disable @next/next/no-img-element */
import { News } from "@/types"
import Link from "next/link"

interface NewsCardProps {
    article: News
    index: number
}

const NewsCard = ({ article, index }: NewsCardProps) => {
    // main render
    return (
        <div className="w-full flex bg-[rgba(217,217,217,0.30)] rounded-lg p-2 gap-3 justify-start items-start" >
            {/* image */}
            <div className="2xl:size-52 border border-primary size-28 md:size-40 shrink-0 rounded-lg overflow-hidden">
                <img src={article.urlToImage} alt="news" className="w-full h-full object-cover" />
            </div>
            {/* content */}
            <div className="w-full flex flex-col gap-0.5 md:gap-2 2xl:gap-3 justify-start items-start">
                <Link target="_blank" href={article.url} className="text-xs bg-black/10 p-1.5 text-black rounded-xs">
                    {new Date(article.publishedAt).toDateString()}
                </Link>
                <p className="md:text-xl text-base font-semibold line-clamp-1">{article.title}</p>
                <p className="md:text-sm text-sm text-[#373737] line-clamp-2 2xl:line-clamp-3">{article.description}</p>
                <Link href={`/cryptax-community/news/${index}`} className="px-3 py-1 md:py-2 2xl:mt-2 bg-black rounded-sm text-white capitalize text-xs md:text-sm font-medium ">
                    Read more
                </Link>
            </div>
        </div>
    )
}

export default NewsCard