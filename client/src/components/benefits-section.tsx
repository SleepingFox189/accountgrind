import { motion } from "framer-motion";
import { Shield, Clock, Award, Headphones } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Secure Service",
      description: "Your account safety is our top priority with proven vouches",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround time with professional leveling team",
    },
    {
      icon: Award,
      title: "Expert Players",
      description: "Skilled team with extensive Fisch game knowledge",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance via Discord",
    },
  ];

  return (
    <div
      className="py-20 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/80" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-purple-400">
          Why Choose Our Service?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-6 flex justify-center">
                <benefit.icon className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}