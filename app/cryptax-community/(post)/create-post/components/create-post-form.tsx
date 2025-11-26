"use client";

import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import Image from "next/image";
import "easymde/dist/easymde.min.css";
import { Select } from "antd";
import { IoClose } from "react-icons/io5";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

const CreatePostForm = () => {
    const [visibility, setVisibility] = useState("public");
    const editorValueRef = useRef<string>("");
    const [images, setImages] = useState<File[]>([]);

    const handleChange = (value: string) => {
        editorValueRef.current = value;
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;
        const newFiles = Array.from(files);
        setImages((prev) => [...prev, ...newFiles]);
    };

    const handleRemoveImage = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    const handlePost = () => {
        console.log("📝 Post submitted:", {
            content: editorValueRef.current,
            visibility,
            images,
        });
    };

    return (
        <>
            {/* User Info */}
            <div className="flex px-3 md:px-6 pt-4 md:pt-6 gap-3 justify-start items-center">
                <Image
                    width={56}
                    height={56}
                    src="https://i.pravatar.cc/150?img=1"
                    alt="user"
                    className="md:size-14 size-12 object-cover rounded-full"
                />
                <div className="flex gap-1 flex-col">
                    <p className="md:text-base text-sm font-bold">John Doe</p>
                    <Select
                        value={visibility}
                        onChange={setVisibility}
                        className="border border-primary-border w-34 md:w-44"
                        options={[
                            { value: "public", label: "🌍 Public" },
                            { value: "connections", label: "👥 Only Connections" },
                            { value: "private", label: "🔒 Private" },
                        ]}
                    />
                </div>
            </div>

            {/* Rich Text Editor */}
            <div className="px-3 md:px-6">
                <SimpleMDE
                    onChange={handleChange}
                    className=""
                    options={{
                        spellChecker: false,
                        placeholder: "What's on your mind?",
                        status: false,
                        autofocus: true,
                        toolbar: [
                            "bold",
                            "italic",
                            "heading",
                            "|",
                            "quote",
                            "unordered-list",
                            "ordered-list",
                            "|",
                            "preview",
                            "|",
                            "guide",
                        ],
                        toolbarTips: true,
                    }}
                />
            </div>

            {/* Image Previews */}
            {images.length > 0 && (
                <div className="w-full px-3 md:px-6 grid grid-cols-3 md:grid-cols-6 gap-3">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="relative group rounded-md overflow-hidden border border-gray-300"
                        >
                            <Image
                                src={URL.createObjectURL(img)}
                                alt={`preview-${index}`}
                                width={200}
                                height={200}
                                className="object-contain w-full h-20"
                            />
                            <button
                                onClick={() => handleRemoveImage(index)}
                                className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <IoClose size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Image Upload */}
            <div className="px-3 md:px-6">
                <label className="cursor-pointer border border-dashed border-gray-400 hover:border-primary/70 transition-colors rounded-lg w-full flex flex-col items-center justify-center py-6">
                    <span className="text-sm text-gray-500">
                        📸 Click or drag to upload images
                    </span>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                </label>
            </div>

            {/* Post Button */}
            <div className="flex py-3 px-3 md:px-6 border-t border-[rgba(166,170,181,0.50)] justify-end">
                <button
                    onClick={handlePost}
                    className="bg-primary cursor-pointer text-white text-sm sm:text-base font-semibold px-6 sm:px-10 sm:py-3 py-2 rounded-full transition-colors hover:bg-primary/90"
                >
                    Post
                </button>
            </div>
        </>
    );
};

export default CreatePostForm;
