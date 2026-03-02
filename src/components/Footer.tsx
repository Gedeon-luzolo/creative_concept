import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo/logo_noir.png"
              alt="Creative Concept"
              width={150}
              height={50}
              className="h-10 w-auto mb-6"
            />
            <p className="text-gray-700 mb-4 text-lg font-semibold">
              #Nous matérialisons vos idées !
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Creative Concept est votre partenaire technologique pour
              transformer vos projets en réalité. Formation, développement web
              et solutions digitales à Kinshasa.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com/creativeconcept"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-[#0000ff] hover:text-white text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://twitter.com/creativeconcept"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-[#0000ff] hover:text-white text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://youtube.com/@creativeconcept"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-[#ffa500] hover:text-white text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube className="text-xl" />
              </a>
              <a
                href="https://instagram.com/creativeconcept"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-[#ffa500] hover:text-white text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-900">Contact</h3>
            <div className="space-y-4">
              <a
                href="tel:+243815385446"
                className="flex items-start gap-3 text-gray-600 hover:text-[#0000ff] transition-colors group"
              >
                <FaPhone className="text-lg mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-gray-900">Téléphone</p>
                  <p>+243 81 53 85 446</p>
                </div>
              </a>
              <a
                href={`https://wa.me/243815385446?text=${encodeURIComponent("Bonjour Creative Concept !")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-600 hover:text-[#25D366] transition-colors group"
              >
                <FaWhatsapp className="text-lg mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <p>+243 81 53 85 446</p>
                </div>
              </a>
              <a
                href="mailto:creativeconcept082@gmail.com"
                className="flex items-start gap-3 text-gray-600 hover:text-[#ffa500] transition-colors group"
              >
                <FaEnvelope className="text-lg mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="break-all">creativeconcept082@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Adresse */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-gray-900">Adresse</h3>
            <div className="flex items-start gap-3 text-gray-600 mb-6">
              <FaMapMarkerAlt className="text-lg mt-1 text-[#0000ff]" />
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Kinshasa, RDC
                </p>
                <p className="text-sm">Immeuble Start Bar, Appt 03</p>
                <p className="text-sm text-gray-500">
                  Réf : Barumbu Kambare Itaga
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-2">
                Horaires de formation :
              </p>
              <p className="text-sm text-gray-600">Mercredi, Jeudi, Vendredi</p>
              <p className="text-sm text-gray-600">16h30 - 18h00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>
              © {new Date().getFullYear()} Creative Concept. Tous droits
              réservés.
            </p>
            <p className="text-xs text-gray-500">Développé à Kinshasa, RDC</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
