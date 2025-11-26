"use client"

interface ErrorTextProps {
    error: string
}

const ErrorText = ({ error }: ErrorTextProps) => {
    return (
        <p className="text-base text-red-500 font-medium">{error}</p>
    )
}

export default ErrorText