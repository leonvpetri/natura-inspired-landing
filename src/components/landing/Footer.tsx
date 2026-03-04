import marciaLogo from '../../assets/marcia-footer.png';

const marqueeItems = [
  "Beleza Natural",
  "Cruelty-Free",
  "100% Vegano",
  "Sustentável",
  "Ciência Pura",
  "Carbono Neutro",
  "Feito no Brasil",
  "Clean Beauty",
  "Beleza Natural",
  "Cruelty-Free",
  "100% Vegano",
  "Sustentável",
  "Ciência Pura",
  "Carbono Neutro",
  "Feito no Brasil",
  "Clean Beauty",
];

const Footer = () => {
  return (
    <footer>
      {/* Marquee */}
      <div className="overflow-hidden py-12 bg-black text-white/30 text-xs font-mono uppercase tracking-[0.3em]">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="mx-8">
              • {item}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-black text-white py-12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* LOGO ADICIONADA CONFORME SOLICITADO */}
          <img
            src={marciaLogo}
            alt="Márcia Ferreira"
            className="h-32 md:h-36 w-auto object-contain"
          />

          <nav className="flex flex-wrap justify-center gap-6">
            {["Produtos", "Sobre", "Sustentabilidade", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-mono uppercase tracking-widest text-white/40 hover:text-white/80 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
            © 2026 AURA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
