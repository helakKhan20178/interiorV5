import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-black border-b border-gray-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              Av. Roma 158, 00187
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              info@interno.com
            </span>
          </div>
          <div className="flex gap-4">
            <Facebook className="w-3 h-3 cursor-pointer hover:text-gray-400" />
            <Twitter className="w-3 h-3 cursor-pointer hover:text-gray-400" />
            <Linkedin className="w-3 h-3 cursor-pointer hover:text-gray-400" />
            <Instagram className="w-3 h-3 cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 border-2 border-white flex items-center justify-center">
              <div className="w-4 h-4 bg-white"></div>
            </div>
            <span className="text-xl font-light tracking-wider">THEMEUD</span>
          </a>

          <nav className="flex gap-8 text-sm">
            <a
              href="/"
              className={`hover:text-gray-400 transition ${currentPage === 'home' ? 'text-white' : 'text-gray-300'}`}
            >
              HOME
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition text-gray-300"
            >
              PAGES
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition text-gray-300"
            >
              SERVICES
            </a>
            <a
              href="/portfolio"
              className={`hover:text-gray-400 transition ${currentPage === 'portfolio' ? 'text-white' : 'text-gray-300'}`}
            >
              PORTFOLIO
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition text-gray-300"
            >
              BLOG
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition text-gray-300"
            >
              CONTACTS
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-gray-400">
              <Phone className="w-4 h-4" />
            </button>
            <button className="p-2 hover:text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
