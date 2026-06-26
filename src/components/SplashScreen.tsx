import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030614]"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 20 }}
        animate={{ 
          scale: [0.8, 1.1, 1],
          opacity: [0, 1, 1],
          y: [20, 0, 0],
          filter: ["drop-shadow(0px 0px 0px rgba(6,182,212,0))", "drop-shadow(0px 0px 40px rgba(6,182,212,0.8))", "drop-shadow(0px 0px 20px rgba(6,182,212,0.5))"]
        }}
        transition={{ 
          duration: 1.5, 
          ease: "easeOut",
          times: [0, 0.6, 1]
        }}
        className="relative w-72 h-72 sm:w-96 sm:h-96"
      >
        <img
          src="/logo.png"
          alt="Mehul Zapadiya Logo"
          className="w-full h-full object-contain mix-blend-lighten"
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
