import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-background/60" />
            <span className="font-display text-lg text-background/80">Essência</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            {["Produtos", "Sobre", "Depoimentos", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-body font-light text-background/50 hover:text-background/80 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="font-body text-xs text-background/40">
            © 2026 Essência. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
