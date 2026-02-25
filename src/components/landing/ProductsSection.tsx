import { motion } from "framer-motion";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    name: "Creme Hidratante Floral",
    category: "Cuidados com a Pele",
    price: "R$ 89,90",
    oldPrice: "R$ 119,90",
    image: product1,
  },
  {
    name: "Óleo Corporal Botânico",
    category: "Corpo",
    price: "R$ 69,90",
    image: product2,
  },
  {
    name: "Shampoo Folhas Nativas",
    category: "Cabelos",
    price: "R$ 49,90",
    oldPrice: "R$ 64,90",
    image: product3,
  },
  {
    name: "Perfume Essências do Brasil",
    category: "Fragrâncias",
    price: "R$ 159,90",
    image: product4,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">
            Nossos Favoritos
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mt-3">
            Produtos em Destaque
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-card mb-4 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {product.oldPrice && (
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-body tracking-wide px-3 py-1 rounded-full">
                    Oferta
                  </span>
                )}
              </div>
              <span className="text-xs font-body tracking-[0.15em] uppercase text-muted-foreground">
                {product.category}
              </span>
              <h3 className="font-display text-lg text-foreground mt-1 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-body font-bold text-foreground">
                  {product.price}
                </span>
                {product.oldPrice && (
                  <span className="font-body text-sm text-muted-foreground line-through">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
