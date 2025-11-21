import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 mt-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="mb-6 block">
                            <div className="relative h-12 w-48 md:h-14 md:w-64">
                                <Image
                                    src="/logo.png"
                                    alt="Strataedge"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-500 text-sm max-w-xs">
                            Empowering businesses with scalable infrastructure, cloud automation, and AI-driven insights.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-primary mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/services" className="hover:text-primary transition-colors">Cloud Infrastructure</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Automation</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">AI & Analytics</Link></li>
                            <li><Link href="/services" className="hover:text-primary transition-colors">Security</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-primary mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Strataedge. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {/* Social links can go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
};
