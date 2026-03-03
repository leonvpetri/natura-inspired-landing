import { useState } from "react";
import { Menu, X } from "lucide-react";
import Icon from "./Icon";

const navLinks = [
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Sustentabilidade", href: "#ingredientes" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-panel">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-tight text-lg">
            AURA<span className="font-light opacity-50">skin</span>
          </span>
        </div>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contato" className="beam-btn group inline-flex">
            <span className="beam-spinner"></span>
            <span className="beam-btn-content flex items-center gap-2">
              <span>Descubra</span>
              <Icon icon="solar:arrow-right-linear" className="text-lg" />
            </span>
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel border-t border-black/5">
          <nav className="max-w-[1440px] mx-auto px-6 flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-mono uppercase tracking-widest text-neutral-500 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
