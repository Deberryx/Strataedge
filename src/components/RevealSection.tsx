"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const RevealSection = ({ children, className, delay = 0 }: RevealSectionProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            initial="hidden"
            animate={controls}
            transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1.0],
                delay: delay,
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};
