export default function PostCardSkeleton() {
    return (
        <div className="w-full bg-white rounded-primary flex flex-col overflow-hidden justify-start pb-2">
            {/* post header */}
            <div className="w-full p-3 md:p-4 gap-2 2xl:gap-4 flex flex-col justify-start items-start">
                {/* user info */}
                <div className="w-full flex justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse" />
                        <div className="space-y-2">
                            <div className="h-3 md:h-4 w-30 md:w-40 bg-gray-300 rounded animate-pulse" />
                            <div className="md:h-3 h-2 w-10 md:w-24 bg-gray-200 rounded animate-pulse" />
                        </div>
                    </div>
                    {/* post actions */}
                    <div className="md:h-9 h-8 w-24 bg-blue-100 rounded-full animate-pulse" />
                </div>
                {/* post description */}
                <div className="space-y-3 w-full">
                    <div className="md:h-4 h-2 bg-gray-200 rounded animate-pulse" />
                    <div className="md:h-4 h-2 bg-gray-200 rounded animate-pulse" />
                    <div className="md:h-4 h-2 w-11/12 bg-gray-200 rounded animate-pulse" />
                    <div className="md:h-4 h-2 w-9/12 bg-gray-200 rounded animate-pulse" />
                </div>
                {/* tags */}
                <div className="flex gap-2 flex-wrap">
                    {Array.from({ length: 4 })?.map((tag, i) => (
                        <div key={i} className="h-4 w-20 bg-gray-200 rounded-full animate-pulse" />
                    ))}
                </div>
                {/* post image */}
                <div className="w-full h-48 md:h-72 bg-gray-200 rounded-xl animate-pulse" />
            </div>
            {/* post footer */}

        </div>
    );
}