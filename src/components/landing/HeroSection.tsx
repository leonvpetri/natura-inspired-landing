import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Ingredientes naturais e botânicos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      <div className="container relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="inline-block text-xs font-body tracking-[0.3em] uppercase text-natura-cream/80 mb-4">
            Beleza que vem da natureza
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-primary-foreground leading-[1.1] mb-6">
            A essência da{" "}
            <span className="italic">natureza</span>{" "}
            na sua pele
          </h1>
          <p className="text-base md:text-lg font-body font-light text-primary-foreground/80 mb-8 max-w-md leading-relaxed">
            Descubra nossa linha de produtos feitos com ingredientes 100% naturais e sustentáveis, 
            pensados para cuidar de você e do planeta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-natura-terracotta-light font-body tracking-wide">
              Explorar Produtos
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body tracking-wide">
              Saiba Mais
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
