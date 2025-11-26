/* eslint-disable @next/next/no-img-element */
import { News } from '@/types'
import Link from 'next/link'

interface NewsCardProps {
    article: News
    index: number
}

const MostPopularNewsCard = ({ article, index }: NewsCardProps) => {
    return (
        <div className="w-full flex bg-[rgba(217,217,217,0.30)] rounded-lg p-2 gap-3 justify-start items-center" >
            {/* image */}
            <div className="2xl:size-28 size-22 shrink-0 rounded-lg border border-primary overflow-hidden">
                <img src={article.urlToImage} alt="news" className="w-full h-full object-cover" />
            </div>
            {/* content */}
            <div className="w-full flex flex-col justify-start items-start">
                <p className="2xl:text-lg text-base font-semibold line-clamp-1">{article.title}</p>
                <p className="text-sm text-black/80 line-clamp-2">{new Date(article.publishedAt).toDateString()}</p>
                <Link href={`/cryptax-community/news/${index}`} className="px-3 py-1.5 2xl:py-2 mt-2 bg-[#4A4A4A] rounded-sm text-white capitalize text-xs">Read more</Link>
            </div>
        </div>
    )
}

export default MostPopularNewsCard