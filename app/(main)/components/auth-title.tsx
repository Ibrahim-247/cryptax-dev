import { cn } from "@/lib/utils"

interface AuthTitleProps {
    className?: string
    text?: string
}
const AuthTitle = ({ className, text }: AuthTitleProps) => {
    return (
        <p className={cn("md:text-4xl text-2xl font-bold", className)}>{text}</p>
    )
}

export default AuthTitle