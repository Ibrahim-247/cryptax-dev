'use client';

import { useState } from "react";
import Lightbox, { type Slide } from "yet-another-react-lightbox";   // ← added "type Slide"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import PostCommentList from "../../(post)/components/post-comments-list";
import { Post } from "@/types";
import PostActions from "./post-actions";
import PostReactions from "./post-reactions";
import PostHeader from "./post-header";
import PostMedia from "./post-media";

const PostCard = ({ post }: { post: Post }) => {
    const [showComments, setShowComments] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
    const toggleComments = () => setShowComments(prev => !prev);
    const media = post.media || [];
    const totalMedia = media.length;
    // Decide layout
    const isSingle = totalMedia === 1;
    const isMultiple = totalMedia > 2;
    // FIXED & TYPE-SAFE slides (only this part changed)
    const slides = media.map((item): Slide => {
        if (item.type === "video") {
            return {
                type: "video" as const,
                width: 1280,
                height: 720,
                poster: `https://picsum.photos/seed/post${post.id}-video-poster/1280/720`,
                sources: [
                    {
                        src: item.link,
                        type: "video/mp4",
                    },
                ],
            };
        }

        return {
            type: "image" as const,
            src: item.link,
        };
    });
    // main render
    return (
        <div className="w-full bg-white rounded-primary flex flex-col overflow-hidden justify-start pb-2">
            <PostHeader post={post} />
            {/* Media Grid */}
            {totalMedia > 0 && (
                <PostMedia
                    media={media}
                    totalMedia={totalMedia}
                    isSingle={isSingle}
                    isMultiple={isMultiple}
                    onOpenLightbox={() => setLightboxIndex(0)}
                />
            )}
            <PostReactions post={post} />
            <PostActions toggleComments={toggleComments} />
            {showComments && <PostCommentList post={post} />}
            {/* Lightbox */}
            <Lightbox
                open={lightboxIndex >= 0}
                close={() => setLightboxIndex(-1)}
                index={lightboxIndex}
                slides={slides}
                plugins={[Thumbnails, Video, Zoom]}
                thumbnails={{
                    position: "bottom",
                    width: 100,
                    height: 70,
                    border: 2,
                    borderRadius: 4,
                    gap: 12,
                }}
                zoom={{ maxZoomPixelRatio: 3 }}
                video={{ autoPlay: true, controls: true }}
                carousel={{ finite: slides.length <= 1 }}
                on={{ view: ({ index }) => setLightboxIndex(index) }}
            />
        </div>
    );
};

export default PostCard;