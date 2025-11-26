/* eslint-disable react-hooks/incompatible-library */
"use client"

import { useForm } from "react-hook-form"
import CommonFieldset from "@/components/common/common-fieldset"
import CommonButton from "@/components/common/common-button"
import { useRouter } from "next/navigation"
import { validatePassword } from "@/utils/validatePassword"

interface SignUpFormData {
    email: string,
    password: string,
    confirm_password: string,
    first_name: string,
    last_name: string,
    company_name: string,
    chamber_of_commerce: string
}

const SignUpForm = () => {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignUpFormData>()
    const router = useRouter();
    const handleSignUp = (data: SignUpFormData) => {
        console.log(data);
        router.push("/cryptax-community");
    }

    // main render
    return (
        <form className="w-full flex flex-col md:gap-5 gap-3 sm:gap-4 justify-start" onSubmit={handleSubmit(handleSignUp)}>
            {/* First Name */}
            <CommonFieldset
                control={control}
                register_as="first_name"
                type="text"
                label="First Name"
                placeholder="Enter your first name"
                errors={errors}
                validationRules={{
                    required: "This field is required",
                }}
                innerWrapper="rounded-full px-6 bg-transparent border border-black text-black placeholder:text-black "
            />
            {/* Last Name */}
            <CommonFieldset
                control={control}
                register_as="last_name"
                type="text"
                label="Last Name"
                placeholder="Enter your last name"
                errors={errors}
                validationRules={{
                    required: "This field is required",
                }}
                innerWrapper="rounded-full px-6 bg-transparent border border-black text-black placeholder:text-black "
            />
            {/* Company Name */}
            <CommonFieldset
                control={control}
                register_as="company_name"
                label="Company Name"
                type="text"
                placeholder="Enter your company name"
                errors={errors}
                validationRules={{
                    required: "This field is required",
                }}
                innerWrapper="rounded-full px-6 bg-transparent border border-black text-black placeholder:text-black "
            />
            {/* Chamber of Commerce */}
            <CommonFieldset
                control={control}
                register_as="chamber_of_commerce"
                type="text"
                label="Chamber of Commerce (KVK) Number"
                placeholder="Enter your KVK number"
                errors={errors}
                validationRules={{
                    required: "This field is required",
                }}
                innerWrapper="rounded-full px-6 bg-transparent border border-black text-black placeholder:text-black "
            />
            {/* email */}
            <CommonFieldset
                control={control}
                register_as="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
                errors={errors}
                validationRules={{
                    required: "This field is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                    }
                }}
                innerWrapper="rounded-full px-6 bg-transparent border border-black text-black placeholder:text-black "
            />
            {/* password */}
            <CommonFieldset
                control={control}
                register_as="password"
                type="password"
                placeholder="Enter your password"
                errors={errors}
                label="Password"
                validationRules={{
                    required: "This field is required",
                    validate: validatePassword
                }}
                innerWrapper="rounded-full px-6 bg-transparent border border-black text-black placeholder:text-black "
            />
            {/* confirm password */}
            <CommonFieldset
                control={control}
                register_as="confirm_password"
                type="password"
                label="Confirm Password"
                placeholder="Re-enter your password"
                errors={errors}
                validationRules={{
                    required: "Confirm Password is required",
                    validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                }}
                innerWrapper="rounded-full px-6 bg-transparent border border-black text-black placeholder:text-black "
            />
            <CommonButton className="mt-3" type="submit" isLoading={false}>Sign Up</CommonButton>
        </form>
    )
}

export default SignUpForm
