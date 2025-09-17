import { motion } from "framer-motion";

export default function PageHero({ title, subtitle, bgImage }) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <img
        src={bgImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30"></div>

      {/* Text */}
      <motion.div
        className="relative z-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mt-4 drop-shadow-md">
          {subtitle}
        </p>
      </motion.div>
    </section>
  );
}
