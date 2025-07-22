"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Heart, Globe, Crown, Timer } from "lucide-react";

const stats = [
  {
    title: "Global Cat Population",
    value: "600 Million",
    description: "That's roughly 1 cat for every 13 humans!",
    icon: Globe,
    color: "text-blue-600"
  },
  {
    title: "US Households with Cats",
    value: "38%",
    description: "More popular than dogs in apartments!",
    icon: Users,
    color: "text-green-600"
  },
  {
    title: "Daily Sleep Hours",
    value: "16-20 Hours",
    description: "Living the dream, literally!",
    icon: Timer,
    color: "text-purple-600"
  },
  {
    title: "Lifetime Hunting Success",
    value: "32%",
    description: "Better than most professional athletes!",
    icon: Crown,
    color: "text-orange-600"
  },
  {
    title: "Purr Frequency",
    value: "20-50 Hz",
    description: "The same frequency used for healing bones!",
    icon: Heart,
    color: "text-red-600"
  },
  {
    title: "YouTube Cat Videos",
    value: "2 Billion+",
    description: "More views than most celebrities!",
    icon: TrendingUp,
    color: "text-pink-600"
  }
];

const funStats = [
  { label: "Chance of a cat ignoring you", percentage: 95 },
  { label: "Probability of knocking things off tables", percentage: 87 },
  { label: "Success rate of opening cat food", percentage: 100 },
  { label: "Chance of sitting on your keyboard", percentage: 92 },
  { label: "Likelihood of judging your life choices", percentage: 99 },
  { label: "Probability of being adorable", percentage: 100 }
];

const worldRecords = [
  {
    record: "Loudest Purr",
    value: "67.8 dB",
    holder: "Merlin (UK)",
    note: "Louder than a dishwasher!"
  },
  {
    record: "Longest Cat",
    value: "48.5 inches",
    holder: "Mymains Stewart Gilligan",
    note: "That's longer than a baseball bat!"
  },
  {
    record: "Most Toes",
    value: "28 toes",
    holder: "Jake (Canada)",
    note: "Normal cats have 18 toes"
  },
  {
    record: "Oldest Cat Ever",
    value: "38 years",
    holder: "Creme Puff (Texas)",
    note: "That's like 168 in human years!"
  }
];

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paws-itively Amazing Cat Statistics! 📊
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Numbers that prove cats aren't just pets - they're statistical superstars!
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-orange-200">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{stat.value}</CardTitle>
                <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fun Probability Stats */}
        <Card className="mb-12 border-2 border-purple-200">
          <CardHeader className="text-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Cat Behavior Probability Matrix 🎯
            </CardTitle>
            <p className="text-gray-600">Because we all know these are scientifically accurate!</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {funStats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                    <Badge variant="outline" className="text-purple-600">
                      {stat.percentage}%
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-purple-600 h-3 rounded-full transition-all duration-300" 
                      style={{ width: `${stat.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* World Records */}
        <Card className="mb-12 border-2 border-yellow-200">
          <CardHeader className="text-center bg-gradient-to-r from-yellow-100 to-orange-100 rounded-t-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Crown className="w-6 h-6 text-yellow-600" />
              <CardTitle className="text-2xl font-bold text-gray-900">
                Guinness World Records: Feline Edition 🏆
              </CardTitle>
            </div>
            <p className="text-gray-600">These cats are literally record-breaking!</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {worldRecords.map((record, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{record.record}</h4>
                    <div className="text-3xl font-bold text-orange-600 mb-2">{record.value}</div>
                    <div className="text-sm font-medium text-gray-600 mb-2">{record.holder}</div>
                    <div className="text-xs text-gray-500 italic">{record.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Economic Impact */}
        <Card className="border-2 border-green-200">
          <CardHeader className="text-center bg-gradient-to-r from-green-100 to-blue-100 rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-gray-900">
              The Cat Economy 💰
            </CardTitle>
            <p className="text-gray-600">Because cats contribute to society too (sort of)!</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">$45.3B</div>
                <div className="text-sm font-medium text-gray-700">Annual US pet cat spending</div>
                <div className="text-xs text-gray-500 mt-1">That's more than some countries' GDP!</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">2.5M</div>
                <div className="text-sm font-medium text-gray-700">Jobs created by pet industry</div>
                <div className="text-xs text-gray-500 mt-1">Cats are job creators!</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">$1,200</div>
                <div className="text-sm font-medium text-gray-700">Average annual cat expenses</div>
                <div className="text-xs text-gray-500 mt-1">Worth every penny of purr-fection!</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fun Footer */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg p-8 max-w-2xl mx-auto">
            <TrendingUp className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Statistical Paw-er! 📈
            </h3>
            <p className="text-gray-600">
              Now you're armed with enough cat stats to win any argument about feline superiority! 
              Remember: 73% of statistics are made up, but 100% of cats are amazing! 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}