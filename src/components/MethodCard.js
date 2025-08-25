import { motion } from "framer-motion";

export default function MethodCard({ name, link, desc }) {
  return (
    <motion.div
      className="bg-pink-500/20 backdrop-blur-xl border border-pink-400/40 
                 rounded-2xl p-6 shadow-xl hover:shadow-neonpink/50 transition-all 
                 cursor-pointer"
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => window.open(link, "_blank")}
    >
      <h2 className="text-2xl font-bold text-pink-400">{name}</h2>
      <ul className="mt-3 space-y-1 text-gray-200">
        {desc.map((d, i) => (
          <li key={i}>• {d}</li>
        ))}
      </ul>
    </motion.div>
  );
}
