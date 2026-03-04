import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import marciaVideo from "../../assets/marcia-video.mp4";

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
    { name: "PRODUTOS", path: "#produtos" },
    { name: "SOBRE", path: "#sobre" },
    { name: "SUSTENTABILIDADE", path: "#ingredientes" },
    { name: "CONTATO", path: "#contato" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-4"
          : "bg-transparent py-10"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-center md:justify-between relative">

        {/* LOGO - Substituída por vídeo conforme solicitado */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="relative z-10"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-36 md:h-40 w-auto object-contain"
          >
            <source src={marciaVideo} type="video/mp4" />
          </video>
        </a>

        {/* MENU RESTAURADO E CENTRALIZADO */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-[11px] tracking-[0.2em] font-medium text-gray-500 hover:text-black transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.path)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.name}
            </a>
          ))}

          {/* BOTÃO DE AÇÃO FORMATADO COMO MENU */}
          <button
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[11px] tracking-[0.2em] font-medium text-gray-500 hover:text-black transition-colors uppercase"
          >
            AGENDAR AGORA
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
