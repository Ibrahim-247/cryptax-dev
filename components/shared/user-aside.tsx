import Image from "next/image";
import linkedin from "@/public/images/linkedin.png";
import twitter from "@/public/images/x.png";
import Link from "next/link";
const UserAside = () => {
    // user aside
    return (
        <aside className="2xl:w-2xs xl:w-3xs w-3xs lg:w-xs shrink-0 sticky lg:top-[110px] h-[calc(100vh-140px)] overflow-y-auto bottom-6 lg:flex flex-col hidden gap-4 justify-start overflow-hidden ">
            {/* user profile */}
            <div className="w-full border  border-gray-200 flex rounded-primary flex-col justify-start overflow-hidden">
                <div className="w-full h-20" style={{
                    background: 'linear-gradient(0deg, #2B7FFF 0%, #2B7FFF 100%)'
                }} />
                <div className="px-4 flex flex-col pb-4 bg-white rounded-b-primary">
                    <Link href={`/cryptax-community/profile`} className="relative -mt-6 w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow">
                        <Image
                            src={"https://i.pravatar.cc"}
                            alt="User avatar"
                            fill
                            sizes="64px"
                            className="object-cover rounded-full"
                        />
                    </Link>
                    <p className=" text-lg font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">@johndoe</p>
                </div>
            </div>
            {/* user connections */}
            <div className="bg-white rounded-primary  p-4 border border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-4">
                    Connections
                </h4>
                <p className="text-sm text-gray-500">You have 128 connections</p>
            </div>
            {/* user connect */}
            <div className="bg-white rounded-primary  p-4 border border-gray-200">
                <h4 className="text-sm font-semibold text-gray-700 mb-4">
                    Connect
                </h4>
                <div className="w-full flex flex-col justify-start items-start gap-3">
                    {/* socials */}
                    <div className="w-full cursor-pointer flex justify-start items-center gap-4">
                        <Image
                            src={linkedin}
                            alt="linkedin"
                            width={24}
                            height={24}
                            className="w-10 h-10 rounded-xs"
                        />
                        <p className="text-base font-semibold text-gray-700">
                            LinkedIn
                        </p>
                    </div>
                    {/* socials */}
                    <div className="w-full cursor-pointer flex justify-start items-center gap-4">
                        <Image
                            src={twitter}
                            alt="twitter"
                            width={24}
                            height={24}
                            className="w-10 h-10 rounded-xs"
                        />
                        <p className="text-base font-semibold text-gray-700">
                            X
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default UserAside