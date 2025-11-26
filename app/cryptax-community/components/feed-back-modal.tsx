'use client';

import { Modal, Tooltip, message } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegMessage } from "react-icons/fa6";

interface FeedbackFormData {
    email?: string;
    feedback: string;
    is_anonymous: boolean;
}

const FeedBackModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FeedbackFormData>({
        defaultValues: {
            email: "",
            feedback: "",
            is_anonymous: true,
        },
    });

    const onSubmit = async (data: FeedbackFormData) => {
        try {
            // Replace with your actual API call
            console.log("Submitting feedback:", data);
            await new Promise((resolve) => setTimeout(resolve, 1000)); // mock API

            message.success("Thank you! Your feedback has been submitted.");
            setIsModalOpen(false);
            reset();
        } catch (error) {
            message.error("Failed to submit feedback. Please try again.");
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        reset();
    };

    return (
        <>
            {/* Floating Feedback Button */}
            <Tooltip placement="left" title="We Like Your Feedback">
                <button
                    className="fixed xl:bottom-4 bottom-  right-4 z-50 cursor-pointer transition-transform hover:scale-110"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Open feedback modal"
                >
                    <div className="relative size-10 md:size-14 rounded-full">
                        <div className="absolute inset-0 z-20 flex items-center justify-center rounded-full bg-primary p-2 text-white shadow-lg">
                            <FaRegMessage className="md:text-2xl" />
                        </div>
                        <div className="absolute inset-0 z-10 animate-ping rounded-full bg-primary/50" />
                    </div>
                </button>
            </Tooltip>

            {/* Feedback Modal */}
            <Modal
                open={isModalOpen}
                title="We Value Your Feedback"
                onCancel={closeModal}
                footer={null}
                centered
                width={600}
            >
                <div className="flex flex-col gap-3 sm:gap-6">
                    <p className="text-sm font-medium text-gray-500">
                        Your thoughts help us improve the platform. Share your ideas, suggestions, or concerns.
                    </p>

                    <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">
                        <li>Report a bug or issue</li>
                        <li>Request a new feature</li>
                        <li>Give feedback on the platform</li>
                    </ul>

                    <form onSubmit={handleSubmit(onSubmit)} className=" space-y-3 md:space-y-5">
                        {/* Feedback Field */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="feedback" className="font-medium">
                                Your Feedback <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                {...register("feedback", {
                                    required: "Feedback is required",
                                    minLength: {
                                        value: 10,
                                        message: "Please write at least 10 characters",
                                    },
                                })}
                                id="feedback"
                                placeholder="Tell us what you think..."
                                rows={6}
                                className="w-full resize-none rounded-md border border-gray-300 p-3 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                            {errors.feedback && (
                                <p className="text-sm text-red-500">{errors.feedback.message}</p>
                            )}
                        </div>

                        {/* Email Field (Optional) */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-medium">
                                Email (Optional)
                                <span className="ml-2 text-xs font-normal text-gray-500">
                                    Leave empty to stay anonymous
                                </span>
                            </label>
                            <input
                                {...register("email", {
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Please enter a valid email",
                                    },
                                })}
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                className="w-full rounded-md border border-gray-300 p-3 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                            <p className="text-gray-400">We will only use your email to receive your feedback and follow up.</p>
                            {errors.email && (
                                <p className="text-sm text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Anonymous Checkbox */}
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="anonymous"
                                {...register("is_anonymous")}
                                defaultChecked
                                className="size-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor="anonymous" className="cursor-pointer text-sm font-medium">
                                Submit anonymously
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end gap-3 pt-4">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="px-5 py-2 cursor-pointer text-gray-600 transition-colors hover:text-gray-800"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="rounded-md cursor-pointer bg-primary px-6 py-2 font-medium text-white shadow-sm transition-opacity hover:opacity-90 disabled:opacity-50"
                            >
                                {isSubmitting ? "Sending..." : "Send Feedback"}
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default FeedBackModal;