import { cn } from "@/lib/utils"

const Loader = ({ className }: { className?: string }) => {
    return (
        <span className={cn("loader size-6 shrink-0 border-3", className)}></span>
    )
}

export default Loader