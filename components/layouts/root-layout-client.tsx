"use client";
import React, { useEffect, useState } from "react"
import ScreeLoader from "../common/screen-loader";

const RootLayoutClient = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true);
    // hide loader
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);
    // show loader
    if (loading) {
        return <ScreeLoader />;
    }

    return (
        <>
            {children}
        </>
    )
}

export default RootLayoutClient