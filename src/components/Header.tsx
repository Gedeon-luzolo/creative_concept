import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Image
          src="/images/logo/logo_noir.png"
          alt="Creative Concept"
          width={150}
          height={50}
          className="h-10 w-auto"
          priority
        />
        <a
          href="#inscription"
          className="bg-[#ffa500] hover:bg-[#ff8c00] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
        >
          S&apos;INSCRIRE
        </a>
      </div>
    </header>
  );
}
