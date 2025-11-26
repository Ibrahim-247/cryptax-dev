
export default function Loading() {
    return (
        <div className="w-full flex-col bg-gray-200 animate-pulse h-[calc(100vh-170px)] gap-3 flex items-center justify-center">
            {/* Logo/Icon placeholder */}
            <div className="relative md:size-20 size-14  flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary animate-spin" />
                <div className="size-10 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center">
                    <div className="size-6 rounded-full bg-background opacity-20" />
                </div>
            </div>
            {/* Text content */}
            <div className="flex flex-col items-center gap-1">
                <h2 className="text-2xl font-semibold text-foreground text-center">Loading your data</h2>
                <p className="text-muted-foreground text-sm max-w-xs text-center leading-relaxed">
                    We&lsquo;re preparing everything for you. This will only take a moment.
                </p>
            </div>
            {/* Loading dots */}
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-black animate-bounce" style={{ animationDelay: "0s" }} />
                <span className="w-2 h-2 rounded-full bg-black animate-bounce" style={{ animationDelay: "0.2s" }} />
                <span className="w-2 h-2 rounded-full bg-black animate-bounce" style={{ animationDelay: "0.4s" }} />
            </div> 
        </div>
    )
}
