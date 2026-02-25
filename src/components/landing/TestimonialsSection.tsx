import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina",
    location: "São Paulo, SP",
    text: "Os produtos são incríveis! Minha pele nunca esteve tão hidratada e com um cheiro maravilhoso. Amo saber que estou usando algo natural.",
    rating: 5,
  },
  {
    name: "Mariana Silva",
    location: "Rio de Janeiro, RJ",
    text: "A qualidade é visível desde a embalagem até o resultado na pele. Recomendo para todas as minhas amigas!",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    location: "Belo Horizonte, MG",
    text: "Finalmente encontrei uma marca que une sustentabilidade e eficácia. O óleo corporal é meu favorito absoluto.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">
            O que dizem
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mt-3">
            Depoimentos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border/50"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="font-body font-light text-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display text-sm font-medium text-foreground">
                  {t.name}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
