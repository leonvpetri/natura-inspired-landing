import Icon from "./Icon";

const ingredients = [
  {
    icon: "solar:drop-linear",
    name: "Ácido Hialurônico",
    origin: "Vegetal",
    benefit: "Hidratação profunda com retenção molecular de água na epiderme.",
  },
  {
    icon: "solar:sun-2-linear",
    name: "Vitamina C",
    origin: "Camu-camu",
    benefit: "Antioxidante de alta potência para luminosidade e uniformização.",
  },
  {
    icon: "solar:leaf-linear",
    name: "Esqualano",
    origin: "Oliva",
    benefit: "Emoliente biocompatível que restaura a barreira lipídica natural.",
  },
  {
    icon: "solar:flower-linear",
    name: "Rosa Mosqueta",
    origin: "Patagônia",
    benefit: "Regeneração celular com ácidos graxos essenciais e retinol natural.",
  },
  {
    icon: "solar:waterdrop-minimalistic-linear",
    name: "Niacinamida",
    origin: "Biotecnologia",
    benefit: "Controle de oleosidade e minimização de poros com ação anti-inflamatória.",
  },
  {
    icon: "solar:star-linear",
    name: "Bakuchiol",
    origin: "Babchi",
    benefit: "Alternativa vegetal ao retinol. Anti-idade sem irritação.",
  },
];

const IngredientsSection = () => {
  return (
    <section id="ingredientes" className="py-24 border-t border-dashed border-black/10 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4 sticky top-24 animate-on-scroll">
            03 / Ingredientes
          </h2>
        </div>
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ingredients.map((item, i) => (
              <div
                key={item.name}
                className={`p-6 border border-neutral-100 rounded-2xl bg-neutral-50/30 hover-lift motion-enter delay-${(i % 3 + 1) * 100} group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <Icon icon={item.icon} className="text-xl" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                    {item.origin}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-black mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {item.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
