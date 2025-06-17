"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import clsx from "clsx";
import React from "react";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "secondary";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = "primary", className, ...rest }, // rest ➜ HTMLMotionProps
    ref
  ) => (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
      className={clsx(
        "inline-flex px-6 py-3 rounded-2xl font-medium focus:outline-none transition-shadow",
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100",
        className
      )}
      {...rest}
    >
      {children}
    </motion.button>
  )
);
Button.displayName = "Button";

export default Button;