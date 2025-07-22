import { Heart, Github, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Purrfect Paws</h3>
                <p className="text-sm text-gray-400">Where cats rule the internet</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your ultimate destination for everything feline! We're dedicated to bringing you the most 
              paw-some cat content, from fascinating facts to adorable photos that'll brighten your day.
            </p>
            <p className="text-sm text-gray-400">
              Made with <Heart className="w-4 h-4 inline text-red-400" /> for cat lovers everywhere
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/facts" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Cat Facts
                </Link>
              </li>
              <li>
                <Link href="/stats" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Cat Stats
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Cat Puns */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Cat-egories</h4>
            <ul className="space-y-2 text-gray-300">
              <li>🐱 Purrfect Facts</li>
              <li>📊 Meow-some Stats</li>
              <li>📸 Claw-some Photos</li>
              <li>😸 Fur-tunate Content</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Purrfect Paws. All rights reserved. No cats were harmed in the making of this website.
          </p>
          <div className="flex space-x-4">
            <button className="text-gray-400 hover:text-orange-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-orange-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-orange-400 transition-colors">
              <Github className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}