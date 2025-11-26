"use client";
import Image from "next/image";
import apple from "@/public/images/apple.png";

const AppleLogin = () => {
    // apple login mutation for send token

    // apple login
    return (
        <button className="w-full flex cursor-pointer border rounded-full border-[#A6AAB5] py-3 px-4 sm:py-4 sm:px-5 text-[#222E48] font-medium text-xl disabled:opacity-0 disabled:cursor-not-allowed capitalize gap-3 sm:gap-5 justify-center items-center transition-all">
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <Image
                    src={apple}
                    alt='apple'
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 640px) 20px, 24px"
                />
            </div>
            <span className="text-base">Sign up with Apple</span>
        </button>
    )
}

export default AppleLogin