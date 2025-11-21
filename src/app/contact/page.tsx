import { ContactForm } from "@/components/ContactForm";
import { RevealSection } from "@/components/RevealSection";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pb-20">
            <section className="bg-primary py-20 text-white">
                <div className="container mx-auto px-6 text-center">
                    <RevealSection>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Ready to start your transformation? We're here to help.
                        </p>
                    </RevealSection>
                </div>
            </section>

            <section className="container mx-auto px-6 -mt-10 relative z-10">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1 space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-4">Contact Info</h3>
                                <p className="text-gray-500 text-sm mb-6">
                                    Fill out the form and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">Email</div>
                                        <a href="mailto:derekasa@strataedge.tech" className="text-gray-500 hover:text-primary transition-colors">
                                            derekasa@strataedge.tech
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-gray-900">Location</div>
                                        <p className="text-gray-500">
                                            United States
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
