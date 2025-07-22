import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Star, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-600 via-pink-600 to-purple-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-medium">Welcome to the Purr-fect Experience</span>
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Purrfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-200">
              Paws
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your ultimate destination for everything feline! Discover amazing facts, 
            jaw-dropping statistics, and the most adorable cat photos that'll make you go "aww" 
            faster than a cat knocking things off a table.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/facts">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold shadow-lg">
              <Heart className="w-5 h-5 mr-2" />
              Start Exploring
            </Button>
          </Link>
          <Link href="/gallery">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg rounded-full font-semibold">
              <Star className="w-5 h-5 mr-2" />
              See Cute Cats
            </Button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-2">🐱</div>
            <h3 className="text-white font-semibold mb-2">Amazing Facts</h3>
            <p className="text-orange-100 text-sm">Mind-blowing trivia that'll make you the cat expert</p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-2">📊</div>
            <h3 className="text-white font-semibold mb-2">Paw-some Stats</h3>
            <p className="text-orange-100 text-sm">Numbers that prove cats rule the world</p>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-2">📸</div>
            <h3 className="text-white font-semibold mb-2">Cute Gallery</h3>
            <p className="text-orange-100 text-sm">Photos guaranteed to brighten your day</p>
          </Card>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 text-4xl animate-bounce">🐾</div>
      <div className="absolute top-1/3 right-8 text-3xl animate-bounce delay-1000">😻</div>
      <div className="absolute bottom-1/4 left-16 text-3xl animate-bounce delay-500">🎀</div>
    </section>
  );
}