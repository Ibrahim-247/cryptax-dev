import Link from "next/link";
import Logo from "../common/logo"
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
    // social links
    const socials = [
        {
            name: "Twitter",
            href: "https://twitter.com/cryptaxhq",
            icon: <FaXTwitter />,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/company/cryptaxhq/",
            icon: <FaLinkedinIn />,
        }
    ]
    // about links
    const aboutLinks = [
        { name: "About CRYPTAX", href: "/about" },
        { name: "Our Mission", href: "/mission" },
        { name: "Team", href: "/team" },
        { name: "Blog", href: "/blog" },
        { name: "Contact Us", href: "/contact" },
    ]
    // explore links
    const exploreLinks = [
        {
            name: "Cryptax Community",
            href: "/cryptax-community",
        },
        {
            name: "AI Search",
            href: "/cryptax-community/ai",
        },
        {
            name: "Marketplace",
            href: "/cryptax-community/marketplace",
        },
        {
            name: "News & Updates",
            href: "/cryptax-community/news",
        },
        {
            name: "Podcasts",
            href: "/cryptax-community/podcasts",
        },
        {
            name: "Tax Advisor",
            href: "/cryptax-community/tax-advisor",
        },
        {
            name: "Messages",
            href: "/cryptax-community/messages",
        },
    ]
    // resources links
    const resourcesLinks = [
        { name: "Help Center / FAQs", href: "/help" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Report a Problem", href: "/report" },
    ]

    // main return
    return (
        <footer className="w-full md:pt-14 md:pb-5 py-4 border-t border-primary-border gap-4 md:gap-8 2xl:gap-14 bg-white flex flex-col justify-start items-center">
            {/* container */}
            <div className="2xl:container px-4   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-32">
                {/* column 1 */}
                <div className="flex flex-col xl:col-span-2 gap-2">
                    <Logo />
                    <p>Providing expert crypto tax solutions for investors and traders. Our mission is to ensure you stay compliant and maximize your returns with accurate, hassle-free tax guidance.</p>
                    <div className="flex gap-3 mt-2 justify-start items-center">
                        {
                            socials.map((social) => (
                                <a key={social.name
                                } href={social.href} target="_blank" rel="noopener noreferrer" className="text-xl text-foreground hover:text-primary transition-colors size-10 shrink-0 flex items-center justify-center bg-transparent hover:bg-gray-200 rounded-full p-3">
                                    {social.icon}
                                </a>
                            ))
                        }
                    </div>
                </div>
                {/* column 2 */}
                <div className="flex flex-col justify-start items-start gap-2 md:gap-4">
                    <p className="text-xl lg:text-3xl font-semibold">About</p>
                    <div className="flex flex-col gap-2">
                        {
                            aboutLinks.map((link, index) => (
                                <Link key={index} className="text-base" href={link.href}>
                                    {link.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                {/* column 3 */}
                <div className="flex flex-col justify-start items-start gap-2 md:gap-4">
                    <p className="text-xl lg:text-3xl font-semibold">Explore</p>
                    <div className="flex flex-col gap-2">
                        {
                            exploreLinks.map((link, index) => (
                                <Link key={index} className="text-base" href={link.href}>
                                    {link.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                {/* column 4 */}
                <div className="flex flex-col justify-start items-start gap-2 md:gap-4">
                    <p className="text-xl lg:text-3xl font-semibold">Resources</p>
                    <div className="flex flex-col gap-2">
                        {
                            resourcesLinks.map((link, index) => (
                                <Link key={index} className="text-base" href={link.href}>
                                    {link.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* divider */}
            <div className="w-full h-0.5  bg-gray-200"></div>
            {/* copyright */}
            <div className="2xl:container px-4 2xl:px-0">
                <p>© {new Date().getFullYear()} CRYPTAX. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer