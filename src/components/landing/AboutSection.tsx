import { motion } from "framer-motion";
import { Leaf, Droplets, Heart } from "lucide-react";
import aboutNature from "@/assets/about-nature.jpg";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Ingredientes extraídos diretamente da biodiversidade brasileira.",
  },
  {
    icon: Droplets,
    title: "Sustentável",
    description: "Embalagens recicláveis e processos que respeitam o meio ambiente.",
  },
  {
    icon: Heart,
    title: "Cruelty-Free",
    description: "Nunca testamos nossos produtos em animais.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-gradient-section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src={aboutNature}
                alt="Floresta tropical brasileira"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">
              Nossa Essência
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mt-3 mb-6">
              Conectando você à{" "}
              <span className="italic text-gradient-natura">natureza</span>
            </h2>
            <p className="font-body font-light text-muted-foreground leading-relaxed mb-10">
              Há mais de uma década, buscamos na riqueza da flora brasileira os melhores 
              ingredientes para criar produtos que cuidam da sua beleza e do mundo ao seu redor. 
              Cada formulação é uma expressão de respeito à natureza e ao bem-estar.
            </p>

            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-body font-light text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
