

import { Metadata } from "next";
import GoogleLogin from "../components/google-login";
import AppleLogin from "../components/apple-login";
import Or from "../components/or";
import SignInForm from "../components/sign-in-form";
import CommonButton from "@/components/common/common-button";
import Link from "next/link";
import AuthTitle from "../components/auth-title";

export const metadata: Metadata = {
    title: 'Sign In – CRYPTAX',
    description: 'Log in to your CRYPTAX account and access your personalized crypto & tax tools, community feed, messages, and notifications.',
}

const SignIn = () => {

    // main render
    return (
        <div className="w-full  flex flex-col gap-7">
            <AuthTitle text="Sign in to CRYPTAX" />
            {/* buttons */}
            <div className="flex flex-col gap-6 justify-start items-start">
                <GoogleLogin />
                <AppleLogin />
                <Or />
                <SignInForm />
            </div>
            {/* already have an account */}
            <div className="flex flex-col gap-6 justify-start items-center">
                <CommonButton className=" border bg-[#FAFAFB] border-[#B2B6BF] text-black" link={true} path="/forgot-password">
                    Forgot password?
                </CommonButton>
                <p className="lg:text-xl text-base font-semibold">
                    Don&lsquo;t have an account?
                    <Link href="/signup" className="text-[#2FA75F] ml-1">Sign Up</Link>.
                </p>
            </div>
        </div>
    )
}

export default SignIn