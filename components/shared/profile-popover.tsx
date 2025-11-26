import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import React from "react";

interface Props {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfilePopover = ({ setIsOpen }: Props) => {
    return (
        <div className="w-2xs flex flex-col overflow-hidden justify-start">
            {/* user info */}
            <div className="py-3 px-4 w-full flex justify-start items-center gap-4">
                <div className="relative size-10 shrink-0 rounded-full overflow-hidden">
                    <Image
                        width={40}
                        height={40}
                        src="https://i.pravatar.cc/150?img=1"
                        alt="user"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col justify-start items-start">
                    <p className="text-sm font-semibold">John Doe</p>
                    <p className="text-xs text-gray-500">@johndoe</p>
                </div>
            </div>
            {/* nav links */}
            <nav className="w-full py-2 px-4 border-y border-primary-border text-base">
                <Link
                    className="flex py-3 text-black! justify-start items-center gap-2"
                    href="/cryptax-community/profile"
                >
                    <FaRegUser size={20} />
                    <span>View Profile</span>
                </Link>
            </nav>

            {/* logout */}
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="w-full cursor-pointer hover:bg-red-50 transition-colors duration-200 ease-in-out text-rose-600 font-semibold capitalize text-base rounded-br-md rounded-bl-md py-4 px-4 flex justify-start items-center gap-4"
            >
                <MdLogout size={20} />
                <span>Log out</span>
            </button>
        </div>
    );
};

export default ProfilePopover;
