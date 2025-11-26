"use client";

import Logo from "../common/logo";
import { CiSearch } from "react-icons/ci";
import HomeIcon from "../icons/home";
import AiIcon from "../icons/ai";
import NewsIcon from "../icons/news";
import PodcastIcon from "../icons/podcast";
import NotificationsIcon from "../icons/notifications";
import MessagesIcon from "../icons/messages";
import Profile from "../icons/profile";
import TaxAdvisorIcon from "../icons/tax-advisor";
import MarketPlaceIcon from "../icons/market-place";
import NavLink from "../common/nav-link";
import { Popover, Tooltip } from "antd";
import ProfilePopover from "./profile-popover";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import LogoutModal from "./logout-modal";
const Header = () => {
    const links = [
        { name: "Home", path: "/cryptax-community", icon: <HomeIcon />, exact: true },
        { name: "AI Search", path: "/cryptax-community/ai", icon: <AiIcon />, exact: true },
        { name: "News & Updates", path: "/cryptax-community/news", icon: <NewsIcon />, exact: false },
        { name: "Podcasts", path: "/cryptax-community/podcasts", icon: <PodcastIcon />, exact: true },
        { name: "Marketplace", path: "/cryptax-community/marketplace", icon: <MarketPlaceIcon />, exact: true },
        { name: "Tax Advisor", path: "/cryptax-community/tax-advisor", icon: <TaxAdvisorIcon />, exact: true },
        { name: "Messages", path: "/cryptax-community/messages", icon: <MessagesIcon />, exact: false },
        { name: "Notifications", path: "/cryptax-community/notifications", icon: <NotificationsIcon />, exact: true },
    ];
    // states
    const [isSideOpen, setIsSideOpen] = useState<boolean>(false);
    const [isOpenLogout, setIsOpenLogout] = useState<boolean>(false);
    // handlers

    // main render
    return (
        <header className="xl:py-4 py-1 md:py-3 w-full sticky top-0 z-999 bg-white shadow-sm">
            <div className="2xl:container px-4 flex justify-between items-center gap-5 2xl:gap-6">
                {/* Left: Logo + Search */}
                <div className="flex items-center gap-4 2xl:gap-7">
                    <Logo />
                    {/* search form desktop */}
                    <div className="xl:flex hidden items-center gap-2 w-72 xl:w-60 2xl:w-72 px-3 py-2.5 border border-black/60 bg-[rgba(243,244,246,0.70)] rounded-full focus-within:ring-2 focus-within:ring-primary/40 transition">
                        <CiSearch size={22} className="text-gray-600" />
                        <input
                            type="text"
                            placeholder="Search posts, people, or topics..."
                            className="w-full bg-transparent outline-none text-sm placeholder:text-gray-500"
                        />
                    </div>
                </div>
                {/* Right: Navigation */}
                <nav className="flex items-center gap-3 md:gap-5 2xl:gap-8">
                    {/* profile */}
                    <Tooltip title="View Profile" placement="left">
                        <Link href={`/cryptax-community/profile`} className="relative border-2 border-primary xl:hidden block sm:size-10 size-8 2xs:size-9 shrink-0 rounded-full overflow-hidden">
                            <Image
                                width={40}
                                height={40}
                                src="https://i.pravatar.cc/150?img=1"
                                alt="user"
                                className="w-full h-full object-cover"
                            />
                        </Link>
                    </Tooltip>
                    {/* search form mobile */}
                    <Tooltip title="Search" placement="left">
                        <Link href={`/cryptax-community/search`} className="sm:size-10 size-8 2xs:size-9 shrink-0 xl:hidden border-2 flex justify-center items-center rounded-full text-xl border-primary">
                            <CiSearch />
                        </Link>
                    </Tooltip>
                    {/* Home icon */}
                    <Tooltip title="Home" placement="left">
                        <NavLink href={`/cryptax-community`} exact={true} className="sm:size-10 size-8 2xs:size-9 shrink-0 xl:hidden border-2 flex justify-center items-center p-1.5 rounded-full text-xl border-primary">
                            <HomeIcon />
                        </NavLink>
                    </Tooltip>
                    {/* mobile navs */}
                    <MobileNav isOpen={isSideOpen} setIsOpen={setIsSideOpen} links={links} />
                    {/* desktop navs */}
                    <div className="xl:flex hidden items-center gap-5 2xl:gap-8">
                        {links.map((link) => (
                            <Tooltip key={link.path} title={link.name} placement="bottom">
                                <div>
                                    <NavLink href={link.path} exact={link.exact}>
                                        {link.icon}
                                        <span className="text-sm line-clamp-1">{link.name}</span>
                                    </NavLink>
                                </div>
                            </Tooltip>
                        ))}
                        {/* Profile Popover */}
                        <Popover
                            trigger="hover"
                            content={<ProfilePopover setIsOpen={setIsOpenLogout} />}
                            placement="bottomRight"
                            className="p-0!"
                        >
                            <div>
                                <NavLink href="/cryptax-community/profile">
                                    <Profile />
                                    <span>Profile</span>
                                </NavLink>
                            </div>
                        </Popover>
                    </div>
                </nav>
                {/* Logout Modal */}
                <LogoutModal isOpen={isOpenLogout} setIsOpen={setIsOpenLogout} />
            </div>
        </header>
    );
};

export default Header;
