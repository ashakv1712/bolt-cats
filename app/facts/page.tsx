"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Lightbulb, Heart, Star } from "lucide-react";

const catFacts = [
  {
    fact: "Cats have 32 muscles in each ear, allowing them to rotate their ears 180 degrees.",
    category: "Anatomy",
    funLevel: "Mind-blowing"
  },
  {
    fact: "A group of cats is called a 'clowder' and a group of kittens is called a 'kindle'.",
    category: "Language",
    funLevel: "Adorable"
  },
  {
    fact: "Cats spend 70% of their lives sleeping, which means a 9-year-old cat has only been awake for three years of its life.",
    category: "Behavior",
    funLevel: "Relatable"
  },
  {
    fact: "The oldest known pet cat existed 9,500 years ago in Cyprus.",
    category: "History",
    funLevel: "Ancient"
  },
  {
    fact: "Cats can make over 100 different sounds, while dogs can only make about 10.",
    category: "Communication",
    funLevel: "Chatty"
  },
  {
    fact: "A cat's purr vibrates at a frequency that promotes bone healing in humans.",
    category: "Health",
    funLevel: "Therapeutic"
  },
  {
    fact: "Cats walk like camels and giraffes: they move both right legs, then both left legs.",
    category: "Movement",
    funLevel: "Elegant"
  },
  {
    fact: "The technical term for a cat's hairball is a 'bezoar'.",
    category: "Science",
    funLevel: "Gross but Cool"
  },
  {
    fact: "Cats have a third eyelid called a 'nictitating membrane' that protects their eyes.",
    category: "Anatomy",
    funLevel: "Fascinating"
  },
  {
    fact: "A cat's whiskers are roughly as wide as its body, helping them determine if they can fit through spaces.",
    category: "Navigation",
    funLevel: "Practical"
  },
  {
    fact: "Cats knead with their paws when they're happy, mimicking behavior from when they were kittens nursing.",
    category: "Behavior",
    funLevel: "Heartwarming"
  },
  {
    fact: "The world's richest cat inherited $13 million from its owner in Italy.",
    category: "Wealth",
    funLevel: "Lucky"
  }
];

export default function FactsPage() {
  const [currentFact, setCurrentFact] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % catFacts.length);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Anatomy": "bg-blue-100 text-blue-800",
      "Language": "bg-green-100 text-green-800",
      "Behavior": "bg-purple-100 text-purple-800",
      "History": "bg-yellow-100 text-yellow-800",
      "Communication": "bg-pink-100 text-pink-800",
      "Health": "bg-red-100 text-red-800",
      "Movement": "bg-indigo-100 text-indigo-800",
      "Science": "bg-orange-100 text-orange-800",
      "Navigation": "bg-teal-100 text-teal-800",
      "Wealth": "bg-amber-100 text-amber-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paws-itively Amazing Cat Facts! 🐱
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prepare to be amazed by these claw-some facts that will make you the purr-fect conversationalist!
          </p>
        </div>

        {/* Featured Fact */}
        <div className="mb-12">
          <Card className="max-w-4xl mx-auto border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="text-center bg-gradient-to-r from-orange-100 to-blue-100 rounded-t-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Lightbulb className="w-6 h-6 text-orange-600" />
                <CardTitle className="text-2xl font-bold text-gray-900">Fact of the Moment</CardTitle>
              </div>
              <div className="flex justify-center gap-2">
                <Badge className={getCategoryColor(catFacts[currentFact].category)}>
                  {catFacts[currentFact].category}
                </Badge>
                <Badge variant="outline" className="border-orange-300 text-orange-700">
                  <Star className="w-3 h-3 mr-1" />
                  {catFacts[currentFact].funLevel}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {catFacts[currentFact].fact}
              </p>
              <div className="text-center">
                <Button 
                  onClick={nextFact}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Get Another Paw-some Fact!
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Toggle All Facts */}
        <div className="text-center mb-8">
          <Button 
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="border-blue-300 text-blue-700 hover:bg-blue-50"
          >
            {showAll ? 'Hide' : 'Show'} All Facts
          </Button>
        </div>

        {/* All Facts Grid */}
        {showAll && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catFacts.map((fact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200 border hover:border-orange-200">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start gap-2">
                    <Badge className={getCategoryColor(fact.category)}>
                      {fact.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {fact.funLevel}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {fact.fact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Fun Footer */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-lg p-8 max-w-2xl mx-auto">
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Feline Good About These Facts?
            </h3>
            <p className="text-gray-600">
              You're now officially more interesting than a laser pointer! 
              Share these facts and watch your friends' re-cat-ions! 😸
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}