export default function HelloSection() {
  return (
    <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Hello les amoureux
              <br />
              de la technologie !
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-4">
              Quelque chose de concurentiel arrive vers vous !
            </p>
            <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
              <div
                className="bg-[#ffa500] h-full rounded-full animate-pulse"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-linear-to-br from-[#ffa500] to-[#ff8c00] rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-lg">
                    Formation de pointe en développement web
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
