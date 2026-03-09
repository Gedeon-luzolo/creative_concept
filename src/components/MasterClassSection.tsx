import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";

export default function MasterClassSection() {
  return (
    <section id="inscription" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-100 to-blue-50 text-[#0000ff] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-200">
            <FaGraduationCap />
            PROGRAMME DE FORMATION
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Master Class Création d'Applications Web Robustes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un programme complet pour maîtriser le développement web moderne
            avec l'Intelligence Artificielle
          </p>
        </div>

        {/* Affiche */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <Image
              src="/images/formation/affiche_vibe_coding.webp"
              alt="Master Class Création d'Applications Web Robustes - Creative Concept"
              width={1080}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
