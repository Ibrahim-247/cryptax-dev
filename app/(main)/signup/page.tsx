
import Link from "next/link"
import GoogleLogin from "../components/google-login"
import AppleLogin from "../components/apple-login"
import Or from "../components/or"
import SignUpForm from "../components/sign-up-form"
import { Metadata } from "next"
import AuthTitle from "../components/auth-title"

export const metadata: Metadata = {
    title: 'Create Account – CRYPTAX',
    description: 'Create your CRYPTAX account to unlock AI search, community discussions, news updates, and more — all designed for Dutch crypto users.',
}


const SignUp = () => {
    return (
        <div className="w-full  flex flex-col gap-4 md:gap-7">
            <AuthTitle text="Sign up to CRYPTAX" />
            {/* buttons */}
            <div className="flex flex-col md:gap-6 gap-4 justify-start items-start">
                {/*
                <GoogleLogin />
                <AppleLogin />
                <Or />
                */}
                <SignUpForm />
            </div>
            {/* already have an account */}
            <div className="flex flex-col gap-6 justify-start items-center">
                <p className="lg:text-xl text-base font-semibold">Already have an account? <Link href="/signin" className="text-[#2FA75F]">Sign In</Link>. </p>
            </div>
        </div>
    )
}

export default SignUp