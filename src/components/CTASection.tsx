"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaUserPlus } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CTASection() {
  const whatsappNumber = "243815385446";
  const whatsappMessage = encodeURIComponent(
    "Bonjour Creative Concept ! Je suis intéressé par la Master Class Création des Applications Web Robustes.",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/personnes/120045.jpg"
          alt="Formation développement web"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay bleu avec opacité */}
        <div className="absolute inset-0 bg-linear-to-br from-[#0000ff]/50 via-[#0000cc]/40 to-[#0000ff]/95"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ffa500] rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ffa500] rounded-full opacity-10 blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
        >
          Prêt à transformer vos idées en réalité ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
        >
          Rejoignez notre Master Class et devenez un développeur web
          professionnel en seulement 1 semaine !
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/inscription"
            className="inline-flex items-center justify-center gap-3 bg-[#0000ff] hover:bg-[#0000cc] text-white px-6 md:px-10 py-4 md:py-5 rounded-full text-base md:text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl w-full sm:w-auto"
          >
            <FaUserPlus className="text-2xl md:text-3xl" />
            S'inscrire maintenant
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 md:px-10 py-4 md:py-5 rounded-full text-base md:text-xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl w-full sm:w-auto"
          >
            <FaWhatsapp className="text-2xl md:text-3xl" />
            Nous contacter
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto"
        >
          {[
            { value: "100+", label: "Étudiants" },
            { value: "3", label: "Séances" },
            { value: "1", label: "Semaine" },
            { value: "100%", label: "Pratique" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
            >
              <p className="text-4xl font-bold text-[#ffa500] mb-2">
                {stat.value}
              </p>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
