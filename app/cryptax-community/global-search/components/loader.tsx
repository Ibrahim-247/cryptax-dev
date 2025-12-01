import PostCardSkeleton from "../../components/post/skeleton"
import NewsCardSkeleton from "../../news/components/news-card-skeleton"

const SearchLoader = () => {
    return (
        <div className="w-full flex flex-col gap-4 sm:gap-6">
            {/* Search bar */}
            <div className="w-full h-12 animate-pulse outline-none bg-slate-200 p-3 border border-primary-border rounded" />
            {/* Filter options */}
            <div className="flex justify-start items-center gap-4 flex-wrap">
                <div className='w-20 h-8 border border-primary-border rounded-full animate-pulse bg-slate-200' />
                <div className='w-20 h-8 border border-primary-border rounded-full animate-pulse bg-slate-200' />
                <div className='w-20 h-8 border border-primary-border rounded-full animate-pulse bg-slate-200' />
            </div>
            {/* Results */}
            <div className="w-full flex flex-col gap-4">
                <NewsCardSkeleton />
                <PostCardSkeleton />
            </div>
        </div>
    )
}

export default SearchLoader