'use client'
import CommonButton from "@/components/common/common-button";
import CommonFieldset from "@/components/common/common-fieldset";
import { countries, genderOptions } from "@/data";
import { useForm } from "react-hook-form";


interface InformationFormData {
    email: string
    company_name: string
    chamber_of_commerce: string,
    address: string
    first_name: string,
    last_name: string,
    phone: number,
    gender: string,
    age: number,
    country: string
}

const InformationForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<InformationFormData>({
        defaultValues: {
            email: "yo2323u@example.com",
            first_name: "John",
            last_name: "Doe",
            phone: 178956,
            gender: "male",
            age: 30,
            country: "United States",
            address: "123 Main St, Anytown, USA",
            company_name: "Crypto Inc.",
            chamber_of_commerce: "ada@32424"
        },
    });
    const onSubmit = (data: InformationFormData) => {
        console.log(data);
    }

    return (
        <form className="w-full flex flex-col gap-4 justify-start" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <p className="text-2xl font-medium">Change Information</p>
                <div className="w-full h-px bg-primary-border my-2" />
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
                <CommonFieldset
                    control={control}
                    register_as="first_name"
                    label="First Name"
                    type="text"
                    placeholder="Enter your first name"
                    errors={errors}
                />
                <CommonFieldset
                    control={control}
                    register_as="last_name"
                    label="Last Name"
                    type="text"
                    placeholder="Enter your last name"
                    errors={errors}
                />
                <CommonFieldset
                    control={control}
                    register_as="email"
                    label="Email"
                    type="email"
                    readOnly={true}
                    defaultValue="yo2323u@example.com"
                    placeholder="you@example.com"
                    errors={errors}
                    validationRules={{
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    }}
                />
                <CommonFieldset
                    control={control}
                    register_as="phone"
                    label="Phone Number"
                    type="number"
                    placeholder="Enter your phone number"
                    errors={errors}
                />
                <CommonFieldset
                    control={control}
                    register_as="company_name"
                    label="Company Name"
                    type="text"
                    placeholder="Enter your company name"
                    errors={errors}
                />
                <CommonFieldset
                    control={control}
                    register_as="chamber_of_commerce"
                    type="text"
                    label="Chamber of Commerce (KVK) Number"
                    placeholder="Enter your KVK number"
                    errors={errors}
                />

                <CommonFieldset
                    control={control}
                    register_as="chamber_of_commerce"
                    label="Chamber of Commerce"
                    type="text"
                    placeholder="Enter your Chamber of Commerce"
                    errors={errors}
                />
                <CommonFieldset
                    control={control}
                    register_as="gender"
                    label="Gender"
                    type="select"
                    innerWrapper="py-0! min-h-[58px]"
                    options={genderOptions}
                    placeholder="Select your gender"
                    errors={errors}
                />
                <CommonFieldset
                    control={control}
                    register_as="country"
                    label="Country"
                    type="select"
                    innerWrapper="py-0! min-h-[58px]"
                    options={countries}
                    placeholder="Select your country"
                    errors={errors}
                />
                <CommonFieldset
                    control={control}
                    register_as="age"
                    label="Age"
                    type="number"
                    placeholder="Enter your age"
                    errors={errors}
                />
                <CommonFieldset
                    control={control}
                    register_as="address"
                    label="Address"
                    type="text"
                    placeholder="Enter your address"
                    errors={errors}
                />
            </div>
            <CommonButton type="submit" className="bg-primary max-w-fit self-end">
                Save Changes
            </CommonButton>
        </form>
    )
}

export default InformationForm