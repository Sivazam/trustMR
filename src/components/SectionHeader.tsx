import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  alignment = "center",
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${alignment === "center" ? "text-center" : alignment === "right" ? "text-right" : "text-left"} ${className}`}
    >
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`w-24 h-1 bg-amber-500 mt-6 ${alignment === "center" ? "mx-auto" : alignment === "right" ? "ml-auto" : ""}`} />
    </motion.div>
  );
}
