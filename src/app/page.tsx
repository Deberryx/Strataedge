import { Hero } from "@/components/Hero";
import { RevealSection } from "@/components/RevealSection";
import { ServiceCard } from "@/components/ServiceCard";
import { Cloud, Workflow, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Cloud Architecture",
    description: "Scalable, secure, and cost-effective cloud infrastructure designed for high availability.",
    icon: <Cloud className="w-6 h-6 text-primary" />,
  },
  {
    title: "Automation Workflows",
    description: "Streamline operations with intelligent automation and custom workflow solutions.",
    icon: <Workflow className="w-6 h-6 text-primary" />,
  },
  {
    title: "AI & Analytics",
    description: "Leverage data-driven insights and predictive analytics to stay ahead of the curve.",
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />

      {/* Services Preview */}
      <section className="container mx-auto px-6">
        <RevealSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Comprehensive Tech Solutions
            </h2>
            <p className="text-gray-600">
              We build the digital foundation your business needs to thrive in a connected world.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealSection key={index} delay={index * 0.1}>
              <ServiceCard {...service} />
            </RevealSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors"
          >
            View All Services <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <div className="relative max-w-sm mx-auto lg:mx-0">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full -z-10" />
                <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square relative shadow-lg">
                  <Image
                    src="/derek-photo.jpg"
                    alt="Derek Asamoah-Amoyaw"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full -z-10" />
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Expertise You Can Trust
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Led by Derek Asamoah-Amoyaw, a Senior IT Infrastructure Officer and Cloud Engineer, Strataedge brings years of experience in nonprofit tech, cloud deployments, and AI integration.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our mission is to democratize access to enterprise-grade technology, helping organizations of all sizes scale efficiently and securely.
              </p>
              <Link
                href="/about"
                className="px-6 py-3 bg-white border border-gray-200 text-primary font-medium rounded-full hover:bg-gray-50 transition-colors"
              >
                Learn More About Us
              </Link>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <RevealSection>
          <div className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-50%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl opacity-30" />
              <div className="absolute bottom-[-50%] left-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-blue-100 mb-10 text-lg">
                Book a free strategy call to discuss your cloud, automation, and AI needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-blue-50 transition-colors"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </RevealSection>
      </section>
    </div>
  );
}
