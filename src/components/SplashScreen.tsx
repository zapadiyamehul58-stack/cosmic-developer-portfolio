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
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem]"
      >
        <img
          src="/logo.png"
          alt="Mehul Zapadiya Logo"
          className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
