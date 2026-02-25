import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Por favor, insira seu nome.").max(100),
  email: z.string().trim().email("Por favor, insira um e-mail válido.").max(255),
});

const LeadFormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse({ name, email });
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setName("");
      setEmail("");
      toast.success("Cadastro realizado com sucesso! Em breve entraremos em contato.");
    }, 1000);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto text-center"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-primary-foreground/60">
            Fique por dentro
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-primary-foreground mt-3 mb-4">
            Receba novidades e ofertas exclusivas
          </h2>
          <p className="font-body font-light text-primary-foreground/70 mb-10">
            Cadastre-se para ser o primeiro a saber sobre lançamentos, promoções e dicas de bem-estar.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body h-12"
            />
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body h-12"
            />
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-accent text-accent-foreground hover:bg-natura-terracotta-light font-body tracking-wide h-12"
            >
              {loading ? "Enviando..." : "Quero me cadastrar"}
            </Button>
          </form>
          <p className="font-body text-xs text-primary-foreground/40 mt-4">
            Ao se cadastrar, você concorda com nossa Política de Privacidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadFormSection;
