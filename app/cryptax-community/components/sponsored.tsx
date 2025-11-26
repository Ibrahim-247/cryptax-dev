import Link from "next/link"

const Sponsored = () => {
    return (
        <div className="w-full p-4 border border-[#BEDBFF] rounded-primary flex flex-col gap-3 " style={{
            background: 'linear-gradient(135deg, rgba(239, 246, 255, 0.90) 0%, rgba(250, 245, 255, 0.90) 100%)'
        }}>
            <p className="text-xs text-[#4F4F4F]">Sponsored</p>
            <div>
                <p className="text-base font-medium">Crypto Tax Software</p>
                <p className="text-[#4F4F4F] text-sm">Automate your crypto tax calculations with our AI-powered platform. Save hours of manual work.</p>
            </div>
            <Link href="/" className="p-3 rounded-lg bg-primary text-white capitalize text-sm">Learn more</Link>
        </div>
    )
}

export default Sponsored