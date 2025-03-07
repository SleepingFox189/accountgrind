import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";

export default function ServiceCards() {
  const discordUrl = "https://discord.gg/zUcu4Pd67c";

  const services = [
    {
      title: "500 Level Boost",
      price: "425 ROBUX",
      features: [
        "Fast leveling service",
        "Professional players",
        "100% account safety",
        "24/7 support",
      ],
    },
    {
      title: "1000 Level Boost",
      price: "850 ROBUX",
      features: [
        "Maximum level boost",
        "Priority service",
        "100% account safety",
        "24/7 VIP support",
      ],
    },
  ];

  return (
    <div className="py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-400">
          Choose Your Boost Package
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-gray-900/60 border-purple-500/20 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-purple-400">
                    {service.title}
                  </CardTitle>
                  <p className="text-3xl font-bold text-center text-white mt-4">
                    {service.price}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <svg
                          className="w-5 h-5 text-purple-400 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white"
                    onClick={() => window.open(discordUrl, '_blank')}
                  >
                    <FaDiscord className="mr-2" />
                    Order on Discord
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}