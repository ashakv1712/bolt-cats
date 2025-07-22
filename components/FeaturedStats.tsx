import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Globe, Heart } from "lucide-react";

const quickStats = [
  {
    icon: Globe,
    value: "600M+",
    label: "Cats Worldwide",
    description: "That's a lot of purring!"
  },
  {
    icon: Users,
    value: "38%",
    label: "US Households",
    description: "Have at least one cat"
  },
  {
    icon: TrendingUp,
    value: "16-20",
    label: "Hours of Sleep",
    description: "Living the dream!"
  },
  {
    icon: Heart,
    value: "100%",
    label: "Adorability Rate",
    description: "Scientifically proven"
  }
];

export default function FeaturedStats() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Cat Facts at a Glance 📊
          </h2>
          <p className="text-lg text-gray-600">
            Some paw-some numbers to get you started on your feline journey!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200 border-2 hover:border-orange-200">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-gray-700 mb-1">{stat.label}</h3>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}