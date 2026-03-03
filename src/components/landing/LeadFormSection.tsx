import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import Icon from "./Icon";

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
      toast.success("Cadastro realizado com sucesso!");
    }, 1000);
  };

  return (
    <section id="contato" className="py-24 border-t border-dashed border-black/10 bg-neutral-50/50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4 sticky top-24 animate-on-scroll">
            04 / Contato
          </h2>
        </div>
        <div className="md:col-span-9 max-w-lg">
          <div className="motion-enter">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-black mb-4">
              Receba novidades exclusivas
            </h3>
            <p className="text-neutral-500 font-light leading-relaxed mb-10">
              Seja o primeiro a saber sobre lançamentos, ingredientes e rituais de cuidado.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                />
                <div className="absolute right-3 top-3 text-neutral-400">
                  <Icon icon="solar:letter-linear" className="text-lg" />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="beam-btn group w-full"
              >
                <span className="beam-spinner"></span>
                <span className="beam-btn-content flex items-center justify-center gap-2 w-full">
                  <span>{loading ? "Enviando..." : "Quero me cadastrar"}</span>
                  <Icon icon="solar:arrow-right-linear" className="text-lg" />
                </span>
              </button>
            </form>

            <p className="text-[10px] font-mono text-neutral-400 mt-4 uppercase tracking-widest">
              Ao se cadastrar, você concorda com nossa Política de Privacidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
