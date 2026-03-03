import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
{/* NAVBAR */}
<header className="bg-[#0F0F0F] border-b border-[#1C1C1C]">
  <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">

    <div className="text-3xl font-extrabold tracking-wide text-white">
      <span className="text-white">Estampa</span>
      <span className="text-pink-400 drop-shadow-[0_0_10px_rgba(255,77,0,0.6)]">
        Re
      </span>
    </div>

    <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
      <a href="#" className="hover:text-white transition">Início</a>
      <a href="#" className="hover:text-white transition">Produtos</a>
      <a href="#" className="hover:text-white transition">Contato</a>
    </nav>

  </div>
</header>
      {/* ================= HERO ================= */}
      <section className="section-dark flex items-center relative overflow-hidden">
  <div className="container-default grid md:grid-cols-2 gap-12 items-center">

    {/* TEXTO */}
    <div className="fade-in">
      <h1 className="text-5xl md:text-6xl text-gradient mb-6 leading-tight">
        Estampas que vendem.
        <br /> Arte que conecta.
      </h1>

      <p className="text-muted mb-10">
        Criamos estampas estratégicas para marcas que querem crescer.
      </p>

    
    </div>

    {/* IMAGEM + BOTÃO */}
    <div className="flex flex-col items-center">

      <div className="relative w-full max-w-lg">
        <Image
          src="/images/imagemprincipal.png"
          alt="Mockup estampas"
          width={800}
          height={800}
          className="object-contain w-full h-auto"
          priority
        />
      </div>

       <a
    href="#contato"
    className="btn-primary w-full sm:w-auto text-center"
  >
    Solicitar Orçamento
  </a>

  <a
    href="#servicos"
    className="btn-outline w-full sm:w-auto text-center"
  >
    Ver Serviços
  </a>
    </div>

  </div>
</section>


      {/* ================= SERVIÇOS ================= */}
      <section id="servicos" className="section-light">
        <div className="container-default">

          <div className="text-center mb-16">
            <h2 className="text-4xl text-gradient">
              Soluções Criativas
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Criação de Estampas", img: "/images/servico1.jpg" },
              { title: "Identidade Visual", img: "/images/servico2.jpg" },
              { title: "Produção Corporativa", img: "/images/servico3.jpg" },
            ].map((item, index) => (
              <div key={index} className="card-creative overflow-hidden">
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= PORTFÓLIO ================= */}
      <section id="portfolio" className="section-dark">
        <div className="container-default">

          <div className="text-center mb-16">
            <h2 className="text-4xl text-gradient">
              Trabalhos Recentes
            </h2>
            <p className="text-muted mt-4">
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
              
            ].map((img, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl aspect-square"
              >
                <Image
                  src={`/images/${img}.jpg`}
                  alt={img}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white font-semibold">
                    Ver Projeto
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= PROCESSO ================= */}
      <section id="processo" className="section-light">
        <div className="container-default grid md:grid-cols-2 gap-12 items-center">

          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/processocriativo1.jpg"
              alt="Processo criativo"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl text-gradient mb-6">
              Nosso Processo
            </h2>
            <p className="text-muted mb-4">
              Trabalhamos com estratégia, conceito e refinamento visual.
            </p>
            <p className="text-muted">
              Cada projeto é desenvolvido com foco comercial.
            </p>
          </div>

        </div>
      </section>


      {/* ================= CONTATO ================= */}
      <section id="contato" className="section-dark text-center">
        <div className="container-default max-w-3xl">

          <h2 className="text-4xl text-gradient mb-6">
            Vamos Criar Sua Estampa
          </h2>

          <p className="text-muted mb-10">
            Fale conosco e receba um orçamento personalizado.
          </p>

          <a
  href="https://wa.me/40422122?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary"
>
  Fale Conosco no WhatsApp
</a>

        </div>
      </section>

    </main>
  );
}