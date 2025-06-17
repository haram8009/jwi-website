"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

const MotionLink = motion(Link);

export function LinkButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <MotionLink
        href={href}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(0,0,0,.08)" }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        className={clsx(
          "inline-block px-6 py-3 rounded-2xl font-medium transition-shadow duration-300",
          variant === "primary"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100",
          className
        )}
      >
        {children}
      </MotionLink>
  );
}

export default LinkButton;
