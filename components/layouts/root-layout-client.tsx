"use client";
import React, { useEffect, useState } from "react";
import ScreeLoader from "../common/screen-loader";
import { Modal } from "antd";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";

const RootLayoutClient = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Loader hide/show
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    // Detect mobile device (React-safe, async to avoid warnings)
    useEffect(() => {
        const t = setTimeout(() => {
            if (typeof window !== "undefined") {
                const userAgent = navigator.userAgent.toLowerCase();
                const mobileRegex =
                    /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i;

                if (mobileRegex.test(userAgent)) {
                    setIsMobile(true);
                }
            }
        }, 0);

        return () => clearTimeout(t);
    }, []);

    if (loading) {
        return <ScreeLoader />;
    }

    return (
        <>
            {/* Mobile App Suggestion Modal */}
            <Modal
                open={isMobile}
                footer={null}
                closable={false}
                centered
                width={350}
                style={{ textAlign: "center" }}
            >
                <h2 className="text-xl font-semibold mb-2">
                    Use our app for a better experience
                </h2>

                <p className="text-gray-600 mb-4">
                    Get faster performance and an optimized mobile flow on our official app.
                </p>

                <div className="flex flex-col gap-3 mt-4">
                    {/* Play Store Button */}
                    <a
                        href="YOUR_PLAYSTORE_LINK"
                        target="_blank"
                        className="flex items-center justify-center gap-2 px-4  py-3 bg-black! text-white! rounded-lg"
                    >
                        <FaGooglePlay size={20} className="text-yellow-400" /> Get it on Play Store
                    </a>

                    {/* App Store Button */}
                    <a
                        href="YOUR_APPSTORE_LINK"
                        target="_blank"
                        className="flex items-center w-full border justify-center gap-2 px-4 py-3 bg-black! text-white! rounded-lg"
                    >
                        <FaAppStoreIos className="text-blue-300" size={20} /> Download on App Store
                    </a>
                </div>

                <button
                    className="mt-5 text-lg cursor-pointer text-primary! font-bold underline"
                    onClick={() => setIsMobile(false)}
                >
                    Continue to website
                </button>
            </Modal>

            {children}
        </>
    );
};

export default RootLayoutClient;
