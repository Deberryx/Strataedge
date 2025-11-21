"use client";

import { motion, useMotionValue, useTransform, useSpring, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-20">
            {/* Background Gradients & Tech Grid */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-block px-4 py-1.5 mb-6 border border-secondary/30 rounded-full bg-secondary/5 backdrop-blur-sm"
                    >
                        <span className="text-sm font-medium text-secondary tracking-wide">
                            Infrastructure • Cloud • Automation
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 text-primary">
                        Elevate Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                            Digital Strategy
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                        Strataedge delivers premium cloud architecture, automation workflows, and AI-driven insights to transform your business infrastructure.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                        >
                            Book a Strategy Call
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-primary font-medium rounded-full hover:bg-gray-50 transition-colors"
                        >
                            Explore Services
                        </Link>
                    </div>
                </motion.div>

                {/* Right Card - System Monitor */}
                <div className="relative hidden lg:block perspective-1000">
                    <TiltCard />
                </div>
            </div>
        </section>
    );
};

const TiltCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="relative perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative z-10 bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-2xl shadow-primary/10 overflow-hidden"
            >
                {/* Scan Line Removed */}

                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent rounded-3xl pointer-events-none" />

                {/* Content */}
                <div className="space-y-8 relative z-10" style={{ transform: "translateZ(20px)" }}>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-secondary/20">
                                S
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider">System</div>
                                <div className="text-lg font-bold text-primary">Monitor</div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400/20 border border-yellow-400/50" />
                            <div className="w-3 h-3 rounded-full bg-green-400/20 border border-green-400/50" />
                        </div>
                    </div>

                    {/* Graph Area */}
                    <div className="relative h-40 w-full bg-gray-50/50 rounded-2xl overflow-hidden border border-gray-100 p-4">
                        <SystemGraph />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-secondary/30 transition-colors group/stat">
                            <div className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">Uptime</div>
                            <div className="text-3xl font-bold text-primary flex items-baseline gap-1">
                                <Counter from={0} to={99.99} decimals={2} />
                                <span className="text-sm text-gray-400 font-normal">%</span>
                            </div>
                        </div>
                        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent/30 transition-colors group/stat">
                            <div className="text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">Efficiency</div>
                            <div className="text-3xl font-bold text-accent flex items-baseline gap-1">
                                +<Counter from={0} to={45} />
                                <span className="text-sm text-gray-400 font-normal">%</span>
                            </div>
                        </div>
                    </div>

                    {/* Status Bar */}
                    <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-center gap-4">
                        <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-primary">System Operational</div>
                            <div className="text-xs text-gray-500">All services running normally</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
                className="absolute -top-12 -right-12 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10"
                animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/20 rounded-full blur-2xl -z-10"
                animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
        </motion.div>
    );
};

const SystemGraph = () => {
    const [data, setData] = useState<number[]>(Array(40).fill(50));

    useEffect(() => {
        const interval = setInterval(() => {
            setData((prev: number[]) => {
                const newData = [...prev.slice(1)];
                // Generate a new value that is somewhat related to the last one to make it look like a graph
                const lastValue = prev[prev.length - 1];
                const change = (Math.random() - 0.5) * 20; // Random change between -10 and 10
                let newValue = lastValue + change;

                // Clamp between 10 and 90
                newValue = Math.max(10, Math.min(90, newValue));

                newData.push(newValue);
                return newData;
            });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    // Generate SVG path
    const width = 100;
    const height = 100;
    const stepX = width / (data.length - 1);

    const points = data.map((val: number, i: number) => {
        const x = i * stepX;
        const y = height - val; // Invert Y because SVG 0 is at top
        return `${x},${y}`;
    }).join(' ');

    const pathD = `M ${points}`;
    const areaD = `M ${points} L ${width},${height} L 0,${height} Z`;

    return (
        <div className="w-full h-full relative">
            {/* Grid Background */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-gray-200/50" />
                ))}
            </div>

            {/* Graph */}
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgb(var(--secondary))" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="rgb(var(--secondary))" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Area Fill */}
                <motion.path
                    d={areaD}
                    fill="url(#graphGradient)"
                    stroke="none"
                />

                {/* Line */}
                <motion.path
                    d={pathD}
                    fill="none"
                    stroke="rgb(var(--secondary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

const Counter = ({ from, to, decimals = 0 }: { from: number; to: number; decimals?: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });

    useEffect(() => {
        if (inView) {
            motionValue.set(to);
        }
    }, [inView, motionValue, to]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest.toFixed(decimals);
            }
        });
    }, [springValue, decimals]);

    return <span ref={ref} />;
};
