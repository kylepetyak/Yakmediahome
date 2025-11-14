import { Star, Users, Award, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

interface LocalTrustSignalsProps {
  cityName: string;
}

export function LocalTrustSignals({ cityName }: LocalTrustSignalsProps) {
  const stats = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      value: "4.9/5",
      label: "Google Rating",
      subtext: "50+ verified reviews"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      value: "50+",
      label: `${cityName} Businesses Served`,
      subtext: "Since 2020"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      value: "250%",
      label: "Average ROI Increase",
      subtext: "For our clients"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      value: "Certified",
      label: "Google & Meta Partner",
      subtext: "Official certifications"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by {cityName} Businesses
          </h2>
          <p className="text-xl text-gray-600">
            Proven results for local businesses across the Phoenix metro area
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-sm font-semibold text-gray-600">AS FEATURED IN:</div>
          <div className="text-gray-400 font-bold">PHOENIX BUSINESS JOURNAL</div>
          <div className="text-gray-400 font-bold">AZ TECH COUNCIL</div>
          <div className="text-gray-400 font-bold">SCOTTSDALE CHAMBER</div>
        </div>
      </div>
    </section>
  );
}
