import { useEffect, useRef } from "react";
import Icon from "./Icon";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    name: "Sérum Luminosidade",
    category: "Skincare",
    description: "Vitamina C estabilizada com ácido hialurônico. Radiância visível em 7 dias.",
    image: product1,
  },
  {
    name: "Óleo Facial Botânico",
    category: "Tratamento",
    description: "Blend de óleos naturais de rosa mosqueta e jojoba. Nutrição profunda.",
    image: product2,
  },
  {
    name: "Hidratante Barreira",
    category: "Skincare",
    description: "Ceramidas vegetais para restaurar a barreira cutânea. Pele saudável.",
    image: product3,
  },
  {
    name: "Bruma Facial Calmante",
    category: "Ritual",
    description: "Água termal e extrato de camomila. Frescor e equilíbrio instantâneo.",
    image: product4,
  },
];

const ProductsSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".glow-card");
    cards?.forEach((card) => {
      const el = card as HTMLElement;
      const handler = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--y", `${e.clientY - rect.top}px`);
      };
      el.addEventListener("mousemove", handler);
    });
  }, []);

  return (
    <section id="produtos" className="py-24 border-t border-dashed border-black/10 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4 sticky top-24 animate-on-scroll">
            01 / Produtos
          </h2>
        </div>
        <div className="md:col-span-9" ref={cardsRef}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <div
                key={product.name}
                className={`glow-card rounded-2xl p-6 group cursor-pointer hover-lift motion-enter delay-${(i + 1) * 100}`}
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-neutral-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-neutral-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  Descobrir
                  <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
