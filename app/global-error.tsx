"use client";

import ErrorScreen from "@/components/common/error-screen";
import { ErrorProps } from "@/types";

// Error boundaries must be Client Components
export default function Error({ error, reset }: ErrorProps) {
    return (
        <html>
            <body>
                <div className="w-full h-screen flex justify-center items-center">
                    <ErrorScreen reset={reset} error={error} />
                </div>
            </body>
        </html>
    );
}
