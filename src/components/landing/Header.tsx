import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { NavLink } from "../NavLink"; // Verifique se o caminho do NavLink está correto
import logoImg from "../../assets/marcia-logo.jpg"; 

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-100 py-3" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO AREA */}
        <NavLink to="/" className="transition-transform duration-300 hover:scale-[1.03]">
          <img 
            src={logoImg} 
            alt="Márcia Ferreira" 
            className="h-12 md:h-14 w-auto object-contain mix-blend-multiply" 
          />
        </NavLink>

        {/* MENU - Estilo Apple */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
            Início
          </NavLink>
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all active:scale-95 shadow-lg">
            Agendar Agora
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
