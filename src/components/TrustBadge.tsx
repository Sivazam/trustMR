import { Shield, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex flex-wrap items-center justify-center gap-6 mt-8"
    >
      <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
        <Shield className="h-5 w-5 text-amber-500" />
        <span className="text-white font-medium">Reg. No: 29/2015</span>
      </div>
      <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
        <Award className="h-5 w-5 text-amber-500" />
        <span className="text-white font-medium">10+ Years of Service</span>
      </div>
      <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
        <Users className="h-5 w-5 text-amber-500" />
        <span className="text-white font-medium">1000+ Beneficiaries</span>
      </div>
    </motion.div>
  );
}
