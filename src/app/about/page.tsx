import { RevealSection } from "@/components/RevealSection";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="pb-20">
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-6">
                    <RevealSection>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6 text-center">
                            About Strataedge
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
                            We are a US-registered tech consulting firm dedicated to empowering organizations with enterprise-grade infrastructure, automation, and AI solutions.
                        </p>
                    </RevealSection>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <RevealSection>
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary/20 rounded-3xl" />
                            <div className="bg-gray-200 rounded-3xl overflow-hidden aspect-[4/5] relative shadow-xl">
                                <Image
                                    src="/derek-photo.jpg"
                                    alt="Derek Asamoah-Amoyaw"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </RevealSection>

                    <RevealSection delay={0.2}>
                        <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                            Meet the Founder
                        </h2>
                        <h3 className="text-xl font-medium text-secondary mb-4">
                            Derek Asamoah-Amoyaw
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            As a Senior IT Infrastructure Officer and Cloud & AI Engineer, Derek brings a wealth of experience to Strataedge. His background spans across critical sectors, including nonprofit technology and large-scale cloud deployments.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            With a deep understanding of the unique challenges faced by organizations like AGAMal, Derek founded Strataedge to bridge the gap between complex technology and practical, scalable business solutions.
                        </p>

                        <div className="space-y-4 mt-8">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-accent" />
                                <span className="text-gray-700">Senior IT Infrastructure Expertise</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-accent" />
                                <span className="text-gray-700">Cloud Architecture & Migration</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-accent" />
                                <span className="text-gray-700">AI Integration & Analytics</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-accent" />
                                <span className="text-gray-700">Nonprofit Tech Solutions</span>
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            <section className="bg-primary py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <RevealSection>
                        <h2 className="text-3xl font-heading font-bold mb-8">Our Mission</h2>
                        <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                            &quot;To democratize access to cutting-edge technology, enabling businesses and nonprofits to operate with the efficiency, security, and intelligence of global enterprises.&quot;
                        </p>
                    </RevealSection>
                </div>
            </section>
        </div>
    );
}
