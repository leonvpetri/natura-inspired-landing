import { NavLink } from "./NavLink"; 
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Aqui buscamos a imagem que você subiu no Passo 1
import logoImg from "../assets/marcia-logo.jpg"; 

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <NavLink to="/">
          <img 
            src={logoImg} 
            alt="Logo Márcia" 
            className="h-14 w-auto mix-blend-multiply" 
          />
        </NavLink>
        
        <div className="flex gap-6 items-center">
          <NavLink to="/" className="text-sm font-medium">Início</NavLink>
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm">
            Agendar
          </button>
        </div>
      </div>
    </nav>
  );
};
