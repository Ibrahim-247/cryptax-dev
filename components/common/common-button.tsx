"use client";

import React from "react";
import Loader from "@/components/common/loader";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CommonButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  link?: boolean;
  className?: string;
  path?: string;
  isLoading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  children,
  type = "submit",
  link = false,
  className,
  path = "",
  isLoading = false,
  onClick,
  disabled = false,
}) => {
  const commonStyle =
    "w-full cursor-pointer bg-primary-dark rounded-full px-4 sm:px-6 py-4 flex justify-center 2xs:min-h-[60px] items-center lg:text-xl text-white relative capitalize disabled:cursor-not-allowed disabled:opacity-50 bg-black";

  return link ? (
    <Link
      href={path}
      aria-hidden="true" // prevent scroll/focus warning
      className={cn(commonStyle, className)}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      aria-hidden="true"
      className={cn(commonStyle, className)}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default CommonButton;
