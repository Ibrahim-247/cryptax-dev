'use client'
import { Tooltip } from "antd";
import { useState, useEffect, useRef } from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import NavLink from "../common/nav-link";
import LogoutModal from "./logout-modal";
import { IoLogOutSharp } from "react-icons/io5";

interface LinkItem {
    path: string;
    name: string;
    icon?: React.ReactNode;
    exact?: boolean
}

interface MobileNavProps {
    links: LinkItem[];
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileNav = ({ links, isOpen, setIsOpen }: MobileNavProps) => {
    // states
    const [isOpenLogout, setIsOpenLogout] = useState<boolean>(false);

    // Create refs for the aside element and the toggle button
    const asideRef = useRef<HTMLElement>(null);
    // Use a separate ref for the toggle button to correctly exclude it from the outside click logic
    const toggleButtonRef = useRef<HTMLButtonElement>(null);

    // 1. useEffect for handling click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Check if the click is outside the aside AND not on the toggle button
            if (
                isOpen &&
                asideRef.current &&
                !asideRef.current.contains(event.target as Node) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, setIsOpen]);

    // 2. useEffect for disabling body scroll 🚀
    useEffect(() => {
        // We only modify the DOM (`document.body`) if we're in a browser environment
        if (typeof document !== 'undefined') {
            if (isOpen) {
                // Prevent scrolling on the body when the nav is open
                document.body.style.overflow = 'hidden';
            } else {
                // Restore scrolling when the nav is closed
                document.body.style.overflow = '';
            }
        }

        // Cleanup function: always restore the scroll on unmount or state change
        return () => {
            if (typeof document !== 'undefined') {
                document.body.style.overflow = '';
            }
        };
    }, [isOpen]); // Depend on isOpen state

    // main render 
    return (
        <>
            {/* Overlay for when the mobile nav is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-999"
                    onClick={() => setIsOpen(false)}
                    style={{ touchAction: 'none' }}
                />
            )}

            {/* more button */}
            <Tooltip title="More" placement="left">
                {/* Assign the ref to the toggle button */}
                <button
                    ref={toggleButtonRef}
                    onClick={() => setIsOpen(!isOpen)}
                    className="sm:size-10 size-8 2xs:size-9 cursor-pointer border-2 shrink-0 xl:hidden flex justify-center items-center rounded-full text-xl border-primary"
                >
                    <MdOutlineDashboardCustomize />
                </button>
            </Tooltip>

            {/* side menu */}
            <aside
                ref={asideRef}
                className={`px-4 py-3 w-fit bg-white shadow flex flex-col gap-4 h-screen fixed left-0 top-0 z-1000 transition-all ease-in-out duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex flex-col gap-4 sm:gap-6 h-full overflow-y-auto w-full">
                    {
                        links?.map((link, i) => (
                            <Tooltip key={i} title={link.name} placement="right">
                                <div>
                                    <NavLink
                                        href={link.path}
                                        exact={link.exact}
                                        onClick={() => setIsOpen(false)}
                                        className="flex sm:size-10 size-9 p-1.5 border-2 border-primary justify-center items-center gap-3 rounded-full text-xl hover:text-white"
                                    >
                                        {link.icon}
                                    </NavLink>
                                </div>
                            </Tooltip>
                        ))
                    }
                </div>
                {/* logout button */}
                <button
                    onClick={() => setIsOpenLogout(true)}
                    className="flex cursor-pointer sm:size-10 size-9 p-1.5 border-2 border-primary justify-center items-center gap-3 rounded-full text-2xl "
                >
                    <IoLogOutSharp />
                </button>
                {/* logout modal */}
                <LogoutModal isOpen={isOpenLogout} setIsOpen={setIsOpenLogout} />
            </aside>
        </>
    )
}

export default MobileNav