import { Metadata } from "next";
import CreatePostForm from "./components/create-post-form";

export const metadata: Metadata = {
    title: "Create Post – Share Crypto & Tax Insights | CRYPTAX",
    description:
        "Create and share posts about crypto and taxation with the CRYPTAX community. Contribute insights, ask questions, and participate in a professional, moderated environment.",
};


const CreatePost = () => {

    // main render
    return (
        <div className="w-full overflow-hidden flex flex-col justify-start border gap-6 border-[rgba(166,170,181,0.50)]  rounded-3xl bg-white shadow-sm">
            <CreatePostForm />
        </div>
    );
};

export default CreatePost;
