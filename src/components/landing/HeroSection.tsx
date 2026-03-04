import { useEffect, useRef } from "react";
import Icon from "./Icon";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      titleRef.current?.classList.add("reveal-active");
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden border-b border-neutral-100 bg-white">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center pt-28 pb-20">

        {/* Center Content: Typography & CTAs */}
        <div className="flex flex-col items-center justify-center">
          {/* Badge */}
          <div className="flex items-center gap-4 mb-8 animate-on-scroll">
            <span className="w-12 h-[1px] bg-neutral-200" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">
              Ciência Natural
            </span>
            <span className="w-12 h-[1px] bg-neutral-200" />
          </div>

          {/* Giant Typography */}
          <h1
            ref={titleRef}
            className="text-6xl md:text-[7rem] lg:text-[8.5rem] leading-none font-bold tracking-tighter mb-8"
          >
            <div className="text-reveal-wrapper">
              <span className="text-reveal-content text-black">PURA</span>
            </div>
            <br />
            <div className="text-reveal-wrapper">
              <span className="text-reveal-content text-stroke-outline hover:text-black transition-colors duration-500 cursor-default">
                ESSÊNCIA.
              </span>
            </div>
          </h1>

          <p className="text-lg md:text-xl text-neutral-500 font-light max-w-xl mb-12 leading-relaxed animate-on-scroll delay-200">
            Cosméticos de alta performance com ingredientes 100% naturais.{" "}
            <span className="text-black font-medium">
              Ciência e pureza na sua pele.
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-6 animate-on-scroll delay-300">
            <a
              href="#produtos"
              className="group relative flex items-center justify-center overflow-hidden rounded-full p-[1px] transform hover:scale-105 transition-transform duration-300"
            >
              <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0_340deg,#000_360deg)]" />
              <span className="relative flex h-full w-full items-center rounded-full bg-white px-8 py-4 ring-1 ring-black/5">
                <span className="font-mono text-xs font-bold uppercase tracking-widest mr-2">
                  Explorar Produtos
                </span>
                <Icon icon="solar:arrow-right-linear" className="text-lg transition-transform group-hover:translate-x-1" />
              </span>
            </a>

            <a
              href="#sobre"
              className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-black transition-colors border-b border-transparent hover:border-black pb-1"
            >
              Nossa Filosofia
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest hidden md:block animate-pulse">
          Scroll
        </span>
        <Icon icon="solar:arrow-down-linear" className="text-neutral-400 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
