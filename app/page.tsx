import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Camera, BarChart3, BookOpen } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/Hero";
import FeaturedStats from "@/components/FeaturedStats";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Featured Sections */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore the Purrfect World of Cats
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From fascinating facts to adorable photos, we've got everything to make you go "meow"!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Cat Facts</CardTitle>
                <CardDescription>
                  Discover mind-blowing facts that will make you the cat expert among your friends
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href="/facts">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <BarChart3 className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Cat Stats</CardTitle>
                <CardDescription>
                  Amazing statistics that prove cats truly rule the world (and our hearts)
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href="/stats">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full">
                    See Stats
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-orange-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <Camera className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Cat Gallery</CardTitle>
                <CardDescription>
                  Adorable photos guaranteed to make you say "aww" and brighten your day
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link href="/gallery">
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full">
                    View Gallery
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FeaturedStats />

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the Purrfect Community?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Don't be a scaredy-cat! Dive into our amazing content and become a true cat connoisseur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/facts">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold">
                Start Exploring
              </Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full font-semibold">
                See Cute Cats
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}