import { Comment as CommentType } from "@/types";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

const Comment = ({ comment }: { comment: CommentType }) => {
    return (
        <div className="w-full flex justify-start items-start gap-3">
            <Image width={40} height={40} src={`https://i.pravatar.cc/150?img=${comment.user.id}`} alt="user" className="size-10 rounded-full border border-gray-200 shrink-0" />
            <div className="w-full relative flex flex-col justify-start items-start p-3 md:px-4 md:py-3 border border-[#BCBCBC] rounded-primary bg-[#FCFCFC]">
                <div className="flex flex-col">
                    <p className="sm:text-sm text-xs font-semibold">{comment.user.fullName}</p>
                    <p className="text-xs text-black/80">{comment.user.username}</p>
                    <p className="sm:text-base text-xs text-[#373737]">{comment.body}</p>
                </div>
                <button type="button" className=" absolute top-2 right-4 cursor-pointer">
                    <BsThreeDots />
                </button>
            </div>
        </div>
    );
};

export default Comment;
