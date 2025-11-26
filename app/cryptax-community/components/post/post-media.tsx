// components/PostMedia.tsx (or wherever you prefer)
'use client';

import Image from "next/image";
import { Post } from "@/types";

type PostMediaProps = {
    media: Post["media"];
    totalMedia: number;
    isSingle: boolean;
    isMultiple: boolean;
    onOpenLightbox: () => void;
};

const PostMedia = ({
    media,
    totalMedia,
    isSingle,
    isMultiple,
    onOpenLightbox,
}: PostMediaProps) => {
    return (
        <div
            className={`w-full 2xl:h-80 xl:h-56 lg:h-80 h-48 sm:h-72 grid ${isSingle ? "grid-cols-1" : "grid-cols-2"
                } bg-black overflow-hidden cursor-pointer`}
            onClick={onOpenLightbox}
        >
            {/* First item - always visible */}
            <div className="relative w-full h-full overflow-hidden">
                {media![0].type === "image" ? (
                    <Image
                        src={media![0].link}
                        alt="Post media"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        priority
                    />
                ) : (
                    <video
                        src={media![0].link}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        autoPlay
                    />
                )}
            </div>

            {/* Second item - only if 2+ */}
            {totalMedia >= 2 && (
                <div className="relative w-full h-full overflow-hidden">
                    {media![1].type === "image" ? (
                        <Image
                            src={media![1].link}
                            alt="Post media"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    ) : (
                        <video
                            src={media![1].link}
                            className="w-full h-full object-cover"
                            muted
                            loop
                            playsInline
                            autoPlay
                        />
                    )}

                    {/* +X overlay on second item when 3+ */}
                    {isMultiple && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <span className="text-white text-2xl sm:text-4xl font-bold drop-shadow-2xl">
                                +{totalMedia - 2}
                            </span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PostMedia;