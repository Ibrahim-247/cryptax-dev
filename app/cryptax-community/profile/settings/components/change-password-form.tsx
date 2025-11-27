/* eslint-disable react-hooks/incompatible-library */
'use client'
import CommonButton from "@/components/common/common-button"
import CommonFieldset from "@/components/common/common-fieldset"
import { validatePassword } from "@/utils/validatePassword"
import { useForm } from "react-hook-form"


interface ChangePasswordFormData {
    current: string
    new: string
    confirm: string
}

const ChangePasswordForm = () => {
    const { control, handleSubmit, watch, formState: { errors } } = useForm<ChangePasswordFormData>({
        defaultValues: {
            current: "",
            new: "",
            confirm: "",
        },
    });
    const onSubmit = (data: ChangePasswordFormData) => {
        console.log(data);
    }

    // main formdadaddadadadad
    return (
        <form className="w-full flex flex-col gap-4 justify-start" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <p className="md:text-2xl text-xl font-medium">Change Password</p>
                <div className="w-full h-px bg-primary-border my-2" />
            </div>
            <div className="w-full grid grid-cols-1 gap-4">
                <CommonFieldset
                    control={control}
                    register_as="current"
                    label="Current Password"
                    type="password"
                    placeholder="Enter your current password"
                    errors={errors}
                />
                <CommonFieldset
                    control={control}
                    register_as="new"
                    label="New Password"
                    type="password"
                    placeholder="Enter your new password"
                    errors={errors}
                    validationRules={{
                        required: "Password is required",
                        validate: validatePassword,
                    }}
                />
                <CommonFieldset
                    control={control}
                    register_as="confirm"
                    label="Confirm Password"
                    type="password"
                    placeholder="Re-enter your new password"
                    errors={errors}
                    validationRules={{
                        required: "Confirm Password is required",
                        validate: (value) =>
                            value === watch("new") || "Passwords do not match",
                    }}
                />
            </div>
            <CommonButton type="submit" className="bg-primary max-w-fit min-h-auto! p-3 self-end">
                Save Changes
            </CommonButton>
        </form>
    )
}

export default ChangePasswordForm