"use client"
import banner from "@/public/images/currency_image.png"
import Image from "next/image"
import { MdEmail } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"
import { FaEdit } from "react-icons/fa"

const ProfileBanner = () => {
    const handleUpdateCoverImage = () => {

    }
    // main render
    return (
        <div className="w-full overflow-hidden min-h-60 rounded-primary p-8 relative ">
            {/* cover image */}
            <div className="w-full rounded-primary   inset-0 h-full overflow-hidden absolute z-5">
                <Image width={400} height={400} src={banner.src} alt="banner" className="w-full hover:grayscale-20  hover:scale-105 ease-in-out transition-all h-full object-cover" />
            </div>
            {/* user details */}
            <div className="w-full flex justify-start items-start relative z-20 gap-4">
                <div className="size-40 relative shrink-0 rounded-full">
                    <Image width={80} height={80} src={'https://i.pravatar.cc'} alt="user" className="w-full rounded-full h-full object-cover" />
                    {/* edit profile button */}
                    <button type="button" onClick={handleUpdateCoverImage} className="absolute bottom-0 right-1 cursor-pointer  rounded-full size-10 text-xl flex z-40  bg-primary text-white justify-center items-center" >
                        <FaEdit />
                    </button>
                </div>
                <div className="flex  text-white font-bold flex-col">
                    <p className="text-3xl ">John Doe</p>
                    <a href="#" className="flex justify-start items-center gap-1 text-lg" >
                        <MdEmail />
                        <span>info@evaneo.com</span>
                    </a>
                    <a href="#" className="flex justify-start items-center gap-1 text-lg">
                        <FaLocationDot />
                        <span>info@evaneo.com</span>
                    </a>
                </div>
            </div>
            {/* edit cover button */}
            <button type="button" onClick={handleUpdateCoverImage} className="absolute top-4 right-4 cursor-pointer  rounded-full size-10 text-xl flex z-40  bg-primary text-white justify-center items-center" >
                <FaEdit />
            </button>
        </div >
    )
}

export default ProfileBanner