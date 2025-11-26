import { Metadata } from "next"
import InformationForm from "./components/information-update-form"
import ChangePasswordForm from "./components/change-password-form"


export const metadata: Metadata = {
    title: 'Account Settings – Privacy & Preferences | CRYPTAX',
    description: 'Manage your CRYPTAX account settings, privacy preferences, notifications, and profile details in a secure and GDPR-compliant environment.',
}
const Settings = () => {
    return (
        <div className="w-full flex flex-col justify-start gap-4 sm:gap-8">
            {/* change information  */}
            <div className="w-full bg-white border border-primary-border rounded-md p-4 md:p-6">
                <InformationForm />
            </div>
            {/* change password  */}
            <div className="w-full bg-white border border-primary-border rounded-md p-4 md:p-6">
                <ChangePasswordForm />
            </div>
        </div>
    )
}

export default Settings