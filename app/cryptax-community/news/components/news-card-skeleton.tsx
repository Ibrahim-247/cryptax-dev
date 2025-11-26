import { cn } from "@/lib/utils";

interface NewsCardSkeletonProps {
    imageWrapperClass?: string;
}
const NewsCardSkeleton = ({ imageWrapperClass }: NewsCardSkeletonProps) => {
    return (
        <div className="w-full flex bg-[rgba(217,217,217,0.30)]  rounded-lg p-2 gap-3 justify-start items-center">
            <div className= {cn("size-28 shrink-0 rounded-lg animate-pulse bg-gray-300 ", imageWrapperClass)}/>
            <div className="w-full flex flex-col gap-1  justify-start items-start">
                <p className="w-full h-2 bg-slate-300 animate-pulse" />
                <p className="w-full h-3 bg-slate-300 animate-pulse" />
                <p className="w-20 h-3 bg-slate-300 animate-pulse" />
            </div>
        </div>
    )
}

export default NewsCardSkeleton