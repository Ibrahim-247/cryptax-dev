"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // optional utility (clsx/twMerge)

interface NavLinkProps {
    href: string;
    exact?: boolean;
    activeClass?: string;
    inactiveClass?: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const NavLink = ({ href, exact = false, activeClass = " active-path text-blue-600", inactiveClass = "text-gray-700 hover:text-blue-500", children, className, onClick }: NavLinkProps) => {
    const pathname = usePathname();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "flex gap-0.5 text-sm font-medium flex-col justify-center items-center transition-colors",
                isActive ? activeClass : inactiveClass,
                className
            )}
        >
            {children}
        </Link>
    );
};

export default NavLink;
