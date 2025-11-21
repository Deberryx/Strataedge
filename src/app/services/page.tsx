import { RevealSection } from "@/components/RevealSection";
import { ServiceCard } from "@/components/ServiceCard";
import {
    Server,
    Cloud,
    Workflow,
    BrainCircuit,
    ShieldCheck,
    Activity,
    Network,
    Database
} from "lucide-react";

const allServices = [
    {
        title: "Infrastructure Architecture",
        description: "Design and implementation of robust, scalable IT infrastructure tailored to your business needs.",
        icon: <Server className="w-6 h-6 text-primary" />,
    },
    {
        title: "Cloud Migration",
        description: "Seamless migration strategies to move your legacy systems to the cloud with minimal downtime.",
        icon: <Cloud className="w-6 h-6 text-primary" />,
    },
    {
        title: "Hybrid Cloud Deployments",
        description: "Best-of-both-worlds solutions combining on-premise security with cloud scalability.",
        icon: <Network className="w-6 h-6 text-primary" />,
    },
    {
        title: "Automation & Workflows",
        description: "End-to-end automation of business processes to increase efficiency and reduce error.",
        icon: <Workflow className="w-6 h-6 text-primary" />,
    },
    {
        title: "AI & Predictive Analytics",
        description: "Harness the power of artificial intelligence to unlock actionable insights from your data.",
        icon: <BrainCircuit className="w-6 h-6 text-primary" />,
    },
    {
        title: "Systems Hardening & Security",
        description: "Comprehensive security audits and hardening to protect your critical assets.",
        icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    },
    {
        title: "BCP & Failover Planning",
        description: "Business Continuity Planning and disaster recovery strategies to ensure resilience.",
        icon: <Activity className="w-6 h-6 text-primary" />,
    },
    {
        title: "Database Optimization",
        description: "Performance tuning and optimization for high-load database environments.",
        icon: <Database className="w-6 h-6 text-primary" />,
    },
];

export default function ServicesPage() {
    return (
        <div className="pb-20">
            <section className="bg-primary py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl opacity-30" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl opacity-30" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <RevealSection>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                            Our Services
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            End-to-end technology solutions designed to scale with your ambition.
                        </p>
                    </RevealSection>
                </div>
            </section>

            <section className="container mx-auto px-6 -mt-10 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map((service, index) => (
                        <RevealSection key={index} delay={index * 0.05}>
                            <ServiceCard {...service} />
                        </RevealSection>
                    ))}
                </div>
            </section>
        </div>
    );
}
