
import GoogleLogin from "@/app/(main)/components/google-login";
import AppleLogin from "@/app/(main)/components/apple-login";
import Or from "@/app/(main)/components/or";
import Link from "next/link";
import CommonButton from "@/components/common/common-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Join CRYPTAX – Create Your Crypto & Tax Account',
  description: 'Join CRYPTAX and access AI tools, community insights, curated news, and podcasts. The Dutch hub for crypto and taxation. Join us now!',
}



const JoinNow = () => {
  //await new Promise((resolve) => setTimeout(resolve, 30000));
  return (
    <div className="w-full flex flex-col gap-4 md:gap-7">
      <h1 className="lg:text-6xl text-4xl font-extrabold text-black">Happening now</h1>
      {/* buttons */}
      <div className="flex flex-col lg:gap-6 gap-4 justify-start items-start">
        <p className="lg:text-4xl text-2xl font-bold">Join today.</p>
        <GoogleLogin />
        <AppleLogin />
        <Or />
        <CommonButton link={true} path="/signup">Create account</CommonButton>
        <p className="lg:text-xl text-lg">By signing up, you agree to the <Link href="/" className="text-[#2FA75F]">Terms of Service</Link> and <Link href="/" className="text-[#2FA75F]">Privacy Policy</Link>.</p>
      </div>
      {/* already have an account */}
      <div className="flex flex-col gap-3 lg:gap-6 justify-start items-start">
        <p className="lg:text-xl text-base font-semibold">Already have an account? </p>
        <CommonButton className=" border bg-[#FAFAFB] border-[#B2B6BF] text-black" link={true} path="/signin">
          Sign In
        </CommonButton>
      </div>
    </div>
  );
}

export default JoinNow;
