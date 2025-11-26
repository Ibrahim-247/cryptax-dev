import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/images/logo.png";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className={cn("w-fit h-14 flex justify-start items-center overflow-hidden",className)}>
      <div className="xl:w-48 w-24 sm:w-36 h-full overflow-hidden">
        <Image
          src={logoImage}
          alt="Logo"
          width={470}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
};

export default Logo;
