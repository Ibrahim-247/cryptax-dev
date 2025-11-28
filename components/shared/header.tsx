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
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();

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

    // Search state
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isSideOpen, setIsSideOpen] = useState<boolean>(false);
    const [isOpenLogout, setIsOpenLogout] = useState<boolean>(false);

    // Handle search on Enter key
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && searchQuery.trim()) {
            const query = encodeURIComponent(searchQuery.trim());
            router.push(`/cryptax-community/global-search?q=${query}`);
            setSearchQuery(""); // Optional: clear input after search
        }
    };

    return (
        <header className="xl:py-4 py-1 md:py-3 w-full sticky top-0 z-50 bg-white shadow-sm">
            <div className="2xl:container px-4 flex justify-between items-center gap-5 2xl:gap-6">
                {/* Left: Logo + Search */}
                <div className="flex items-center gap-4 2xl:gap-7">
                    <Logo />

                    {/* Search form - Desktop */}
                    <div className="xl:flex hidden items-center gap-2 w-72 xl:w-60 2xl:w-72 px-3 py-2.5 border border-black/60 bg-[rgba(243,244,246,0.70)] rounded-full focus-within:ring-2 focus-within:ring-primary/40 transition">
                        <CiSearch size={22} className="text-gray-600" />
                        <input
                            type="text"
                            placeholder="Search posts, people, or topics..."
                            className="w-full bg-transparent outline-none text-sm placeholder:text-gray-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearch}
                        />
                    </div>
                </div>

                {/* Right: Navigation */}
                <nav className="flex items-center gap-3 md:gap-5 2xl:gap-8">
                    {/* Mobile Profile */}
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

                    {/* Mobile Search Icon */}
                    <Tooltip title="Search" placement="left">
                        <button
                            onClick={() => {
                                if (searchQuery.trim()) {
                                    const query = encodeURIComponent(searchQuery.trim());
                                    router.push(`/cryptax-community/global-search?q=${query}`);
                                    setSearchQuery("");
                                } else {
                                    router.push(`/cryptax-community/global-search`);
                                }
                            }}
                            className="sm:size-10 size-8 2xs:size-9 shrink-0 xl:hidden border-2 flex justify-center items-center rounded-full text-xl border-primary"
                        >
                            <CiSearch />
                        </button>
                    </Tooltip>

                    {/* Mobile Home Icon */}
                    <Tooltip title="Home" placement="left">
                        <NavLink href={`/cryptax-community`} exact={true} className="sm:size-10 size-8 2xs:size-9 shrink-0 xl:hidden border-2 flex justify-center items-center p-1.5 rounded-full text-xl border-primary">
                            <HomeIcon />
                        </NavLink>
                    </Tooltip>

                    {/* Mobile Nav Toggle */}
                    <MobileNav isOpen={isSideOpen} setIsOpen={setIsSideOpen} links={links} />

                    {/* Desktop Navigation */}
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

                        {/* Desktop Profile Popover */}
                        <Popover
                            trigger="hover"
                            content={<ProfilePopover setIsOpen={setIsOpenLogout} />}
                            placement="bottomRight"
                            overlayClassName="p-0"
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