import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#070711] text-white">

      {/* ================= NAVBAR ================= */}
      <header className="border-b border-[#1F1F2E]">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

          <div className="text-3xl font-extrabold tracking-wide">
            Estampa<span className="text-purple-400">Re</span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#servicos" className="hover:text-purple-400 transition">
              Serviços
            </a>
            <a href="#portfolio" className="hover:text-purple-400 transition">
              Portfólio
            </a>
            <a href="#processo" className="hover:text-purple-400 transition">
              Processo
            </a>
            <a href="#contato" className="hover:text-purple-400 transition">
              Contato
            </a>
          </nav>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative py-24 overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center relative z-10">

          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Estampas que <span className="text-purple-400">vendem.</span>
              <br />
              Arte que <span className="text-purple-400">conecta.</span>
            </h1>

            <p className="text-gray-400 text-lg mt-6 mb-10">
              Criamos estampas estratégicas para marcas que querem crescer.
            </p>

            <div className="flex gap-5">
              <a
                href="#contato"
                className="px-8 py-4 rounded-full bg-purple-500 hover:bg-purple-600 transition font-medium"
              >
                Solicitar Orçamento
              </a>

              <a
                href="#servicos"
                className="px-8 py-4 rounded-full border border-gray-600 hover:border-purple-400 hover:text-purple-400 transition"
              >
                Ver Serviços
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#1F1F2E]">
              <Image
                src="/images/imagemprincipal.png"
                alt="Mockup estampas"
                width={900}
                height={900}
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= SERVIÇOS ================= */}
      <section id="servicos" className="py-24 bg-[#0B0B15]">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Soluções <span className="text-purple-400">Criativas</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Criação de Estampas", img: "/images/criacaodeestampas.jpg" },
              { title: "Identidade Visual", img: "/images/identidadevisual.jpg" },
              { title: "Produção Corporativa", img: "/images/producaocorporativa.jpg" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#11111B] border border-[#1F1F2E] rounded-2xl p-6 hover:border-purple-500/40 hover:-translate-y-2 transition duration-300"
              >
                <div className="relative w-full h-52 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PORTFÓLIO ================= */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Trabalhos <span className="text-purple-400">Recentes</span>
            </h2>
            <p className="text-gray-400 mt-4">
              Algumas estampas desenvolvidas para marcas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "bestmon",
              "coffe",
              "future",
              "morelove",
              "castle",
              "talkless1",
              "estampa1",
              "estampa2",
            ].map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl aspect-square border border-[#1F1F2E]"
              >
                <Image
                  src={`/images/${img}.jpg`}
                  alt={img}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="font-medium tracking-wide">
                    Ver Projeto
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PROCESSO ================= */}
      <section id="processo" className="py-24 bg-[#0B0B15]">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-[#1F1F2E] shadow-xl">
            <Image
              src="/images/processocriativo1.jpg"
              alt="Processo criativo"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Nosso <span className="text-purple-400">Processo</span>
            </h2>

            <p className="text-gray-400 mb-4">
              Trabalhamos com estratégia, conceito e refinamento visual.
            </p>

            <p className="text-gray-400">
              Cada projeto é desenvolvido com foco comercial.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONTATO ================= */}
      <section id="contato" className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-8">

          <h2 className="text-4xl font-bold mb-6">
            Vamos Criar Sua <span className="text-purple-400">Estampa</span>
          </h2>

          <p className="text-gray-400 mb-10">
            Fale conosco e receba um orçamento personalizado.
          </p>

          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full bg-purple-500 hover:bg-purple-600 transition font-medium"
          >
            Falar no WhatsApp
          </a>

        </div>
      </section>

    </main>
  );
}