"use client";
import { cn } from "@/lib/utils";

interface CommonTitleProps {
  text?: string;
  className?: string;
}
const CommonTitle = ({ text, className }: CommonTitleProps) => {
  return (
    <h3 className={cn(
      "xl:text-[56px] md:text-4xl sm:text-3xl text-2xl font-semibold text-start text-primary-dark",
      className
    )}
    >
      {text}
    </h3>
  );
};

export default CommonTitle;
