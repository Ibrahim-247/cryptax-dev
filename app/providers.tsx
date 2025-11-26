'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GoogleOAuthProvider } from '@react-oauth/google';

interface ProvidersProps {
    children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    // ✅ useState ensures the QueryClient is only created once
    const [queryClient] = useState(() => new QueryClient());

    // ✅ Make the type explicit — environment variables are always strings or undefined
    const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string | undefined;

    if (!googleClientId) {
        console.warn('⚠️ Missing NEXT_PUBLIC_GOOGLE_CLIENT_ID in environment variables.');
    }

    return (
        <QueryClientProvider client={queryClient}>
            <GoogleOAuthProvider clientId={googleClientId || ''}>
                {children}
            </GoogleOAuthProvider>
        </QueryClientProvider>
    );
}
