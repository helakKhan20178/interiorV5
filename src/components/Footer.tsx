import { ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border-2 border-white flex items-center justify-center">
                <div className="w-4 h-4 bg-white"></div>
              </div>
              <span className="text-xl font-light tracking-wider">THERATIO</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              We provides a full range of interior design, architectural design.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-4 h-4 cursor-pointer hover:text-gray-400" />
              <Twitter className="w-4 h-4 cursor-pointer hover:text-gray-400" />
              <Linkedin className="w-4 h-4 cursor-pointer hover:text-gray-400" />
              <Instagram className="w-4 h-4 cursor-pointer hover:text-gray-400" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">Contacts</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-gray-500">📍</span>
                <span>411 University St, Seattle, USA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">✉️</span>
                <span>theratio.interior@mail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">📞</span>
                <span>+1 800 456 789 123</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">Latest Projects</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition">Stylish Family Appartment</li>
              <li className="hover:text-white cursor-pointer transition">Modern Villa in Belgium</li>
              <li className="hover:text-white cursor-pointer transition">Private House in Spain</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 uppercase tracking-wider">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4">
              Follow our newsletter to stay updated about agency.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="bg-black border border-gray-800 px-4 py-2 text-sm flex-1 focus:outline-none focus:border-white placeholder:text-gray-600"
              />
              <button className="bg-white text-black px-4 hover:bg-gray-200 transition">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex justify-between items-center text-sm text-gray-400">
          <p>Copyright © 2025 Theratio by OceanThemes. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Terms of use</a>
            <a href="#" className="hover:text-white transition">Privacy Environmental Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
