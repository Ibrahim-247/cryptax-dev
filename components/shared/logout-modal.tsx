'use client'

import { Modal } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

interface LogoutModalProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LogoutModal = ({ isOpen, setIsOpen }: LogoutModalProps) => {
    const router = useRouter();
    const handleLogout = () => {
        setIsOpen(false);
        router.push("/");
    }
    // main render
    return (
        <Modal title="Confirm Logout" centered open={isOpen} onCancel={() => setIsOpen(false)} onOk={handleLogout} okText="Logout" cancelText="Cancel" width={400}>
            <p className="text-base font-medium">Are you sure you want to logout?</p>
        </Modal>
    )
}

export default LogoutModal