import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { NavLink } from "../NavLink"; 
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

  // Lista dos itens originais do menu que haviam sumido
  const menuItems = [
    { name: "PRODUTOS", path: "/produtos" },
    { name: "SOBRE", path: "/sobre" },
    { name: "SUSTENTABILIDADE", path: "/sustentabilidade" },
    { name: "CONTATO", path: "/contato" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO - Agora integrada corretamente */}
        <NavLink to="/" className="transition-transform duration-300 hover:scale-[1.03]">
          <img 
            src={logoImg} 
            alt="Márcia Ferreira" 
            className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" 
          />
        </NavLink>

        {/* MENU RESTAURADO - Com os itens originais da AuraSkin */}
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path} 
              className="text-[11px] tracking-[0.2em] font-medium text-gray-500 hover:text-black transition-colors"
            >
              {item.name}
            </NavLink>
          ))}
          
          {/* BOTÃO DE AÇÃO */}
          <button className="bg-black text-white px-6 py-2 rounded-full text-[11px] tracking-widest font-medium hover:bg-gray-800 transition-all active:scale-95 shadow-sm">
            AGENDAR AGORA
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
