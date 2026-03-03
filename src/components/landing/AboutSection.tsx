import Icon from "./Icon";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 border-t border-dashed border-black/10 bg-neutral-50/50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4 sticky top-24 animate-on-scroll">
            02 / Filosofia
          </h2>
        </div>
        <div className="md:col-span-9 space-y-16">
          {/* Main Statement */}
          <div className="motion-enter">
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-8">
              Beleza que respeita
              <br />
              a natureza.
            </h3>
            <p className="text-lg text-neutral-500 font-light max-w-2xl leading-relaxed">
              Cada fórmula é uma convergência entre ciência avançada e os ingredientes mais puros
              da biodiversidade brasileira. Sem concessões, sem excessos —{" "}
              <span className="text-black font-medium">apenas o essencial.</span>
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-dashed border-black/10">
            <div className="motion-enter delay-100">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                <Icon icon="solar:leaf-linear" className="text-xl text-neutral-600" />
              </div>
              <h4 className="text-sm font-semibold text-black mb-2">100% Natural</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Ingredientes extraídos diretamente da flora brasileira. Sem parabenos, sem sulfatos,
                sem fragrâncias sintéticas.
              </p>
            </div>
            <div className="motion-enter delay-200">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                <Icon icon="solar:planet-linear" className="text-xl text-neutral-600" />
              </div>
              <h4 className="text-sm font-semibold text-black mb-2">Sustentável</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Embalagens recicláveis e processos que respeitam o meio ambiente.
                Carbono neutro em toda a cadeia.
              </p>
            </div>
            <div className="motion-enter delay-300">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
                <Icon icon="solar:heart-linear" className="text-xl text-neutral-600" />
              </div>
              <h4 className="text-sm font-semibold text-black mb-2">Cruelty-Free</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Nunca testamos em animais. Certificados internacionais de ética e responsabilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
