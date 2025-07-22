"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Camera, Star, Shuffle } from "lucide-react";

const catImages = [
  {
    url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    caption: "This little furball is clearly plotting world domination... and succeeding! 🌍",
    mood: "Scheming",
    breed: "Fluffball Supreme"
  },
  {
    url: "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg",
    caption: "When you're posing for your LinkedIn profile picture but you're a cat 📸",
    mood: "Professional",
    breed: "Business Cat"
  },
  {
    url: "https://images.pexels.com/photos/569170/pexels-photo-569170.jpeg",
    caption: "That moment when you realize you forgot to feed them... 5 minutes ago 😱",
    mood: "Judgmental",
    breed: "Drama Queen"
  },
  {
    url: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
    caption: "Living proof that cats invented the art of looking effortlessly fabulous ✨",
    mood: "Majestic",
    breed: "Natural Model"
  },
  {
    url: "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
    caption: "When someone asks if you want to go outside but you're an indoor cat 🏠",
    mood: "Contemplative",
    breed: "Philosopher"
  },
  {
    url: "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg",
    caption: "The face you make when humans think they're in charge 😏",
    mood: "Amused",
    breed: "Overlord"
  },
  {
    url: "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg",
    caption: "Caught red-pawed! But still somehow manages to look innocent 😇",
    mood: "Mischievous",
    breed: "Troublemaker"
  },
  {
    url: "https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg",
    caption: "When you're trying to take a serious photo but your cuteness keeps getting in the way 📷",
    mood: "Adorable",
    breed: "Heartbreaker"
  },
  {
    url: "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg",
    caption: "The official 'I didn't break anything' face. Spoiler: They totally broke something 😅",
    mood: "Innocent",
    breed: "Angel (Allegedly)"
  }
];

export default function GalleryPage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentFilter, setCurrentFilter] = useState("All");

  const toggleFavorite = (index: number) => {
    setFavorites(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const shuffleImages = () => {
    // In a real app, you'd shuffle the array
    window.location.reload();
  };

  const moods = ["All", ...new Set(catImages.map(img => img.mood))];

  const filteredImages = currentFilter === "All" 
    ? catImages 
    : catImages.filter(img => img.mood === currentFilter);

  const getMoodColor = (mood: string) => {
    const colors: { [key: string]: string } = {
      "Scheming": "bg-purple-100 text-purple-800",
      "Professional": "bg-blue-100 text-blue-800",
      "Judgmental": "bg-red-100 text-red-800",
      "Majestic": "bg-yellow-100 text-yellow-800",
      "Contemplative": "bg-green-100 text-green-800",
      "Amused": "bg-pink-100 text-pink-800",
      "Mischievous": "bg-orange-100 text-orange-800",
      "Adorable": "bg-rose-100 text-rose-800",
      "Innocent": "bg-cyan-100 text-cyan-800"
    };
    return colors[mood] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Purrfect Photo Gallery! 📸
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A claw-some collection of cats being their fabulous selves. Warning: May cause excessive "aww-ing"!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {moods.map((mood) => (
            <Button
              key={mood}
              variant={currentFilter === mood ? "default" : "outline"}
              onClick={() => setCurrentFilter(mood)}
              className={`rounded-full ${
                currentFilter === mood 
                  ? "bg-pink-600 hover:bg-pink-700" 
                  : "hover:bg-pink-50"
              }`}
            >
              {mood}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={shuffleImages}
            className="rounded-full hover:bg-purple-50"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Shuffle
          </Button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-600">{catImages.length}</div>
            <div className="text-sm text-gray-600">Adorable Photos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{favorites.length}</div>
            <div className="text-sm text-gray-600">Your Favorites</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">∞</div>
            <div className="text-sm text-gray-600">Cuteness Level</div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => {
            const originalIndex = catImages.findIndex(img => img.url === image.url);
            return (
              <Card key={originalIndex} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 hover:border-pink-200">
                <div className="relative">
                  <img
                    src={image.url}
                    alt={`Adorable cat - ${image.mood}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <Button
                    onClick={() => toggleFavorite(originalIndex)}
                    className={`absolute top-4 right-4 p-2 rounded-full ${
                      favorites.includes(originalIndex)
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-black/50 hover:bg-black/70"
                    }`}
                    size="sm"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        favorites.includes(originalIndex) ? "fill-white" : ""
                      }`}
                    />
                  </Button>
                  <div className="absolute top-4 left-4">
                    <Badge className={getMoodColor(image.mood)}>
                      {image.mood}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {image.caption}
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      {image.breed}
                    </Badge>
                    <div className="flex items-center gap-1 text-pink-500">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">
                        {Math.floor(Math.random() * 500) + 100}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Fun Footer */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-8 max-w-2xl mx-auto">
            <Camera className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Paw-some Photography! 📷
            </h3>
            <p className="text-gray-600 mb-4">
              You've just witnessed the most professionally modeled cat photos on the internet! 
              These felines clearly understand their angles better than most humans.
            </p>
            <Badge className="bg-pink-500 text-white">
              Certified Cute Overload Zone ⚠️
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}