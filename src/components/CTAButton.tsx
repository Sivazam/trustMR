import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    onClick?.();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        onClick={handleClick}
        className={`
          rounded-2xl shadow-soft-xl px-8 py-6 text-base font-semibold transition-all
          ${variant === "primary"
            ? "bg-amber-500 hover:bg-amber-600 text-white"
            : "bg-blue-900 hover:bg-blue-800 text-white"
          }
          ${className}
        `}
      >
        {children}
      </Button>
    </motion.div>
  );
}
