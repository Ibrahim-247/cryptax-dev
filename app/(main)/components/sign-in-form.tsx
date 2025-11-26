"use client"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import CommonFieldset from "@/components/common/common-fieldset"
import CommonButton from "@/components/common/common-button"

interface SignInFormData {
    email: string
    password: string
}

const SignInForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<SignInFormData>()
    const router = useRouter();
    const onSubmit = (data: SignInFormData) => {
        console.log(data);
        router.push("/cryptax-community");
    }

    // main render
    return (
        <form className="w-full flex flex-col gap-5 justify-start" onSubmit={handleSubmit(onSubmit)}>
            {/* email */}
            <CommonFieldset
                control={control}
                label="Email"
                register_as="email"
                type="email"
                placeholder="Enter your email"
                errors={errors}
                validationRules={{
                    required: "Email is required",
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
                label="Password"
                register_as="password"
                type="password"
                placeholder="Enter your password"
                errors={errors}
                validationRules={{
                    required: "Password is required",
                }}
                innerWrapper="rounded-full px-6 bg-transparent border border-black text-black placeholder:text-black "
            />
            {/* sign in button */}
            <CommonButton type="submit" isLoading={false}>Sign in</CommonButton>
        </form>
    )
}

export default SignInForm
