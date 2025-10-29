import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const portfolioItems = [
  {
    id: 1,
    category: ['all', 'architecture', 'interior'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Modern Living Space'
  },
  {
    id: 2,
    category: ['all', 'decor', 'furniture'],
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Luxury Bathroom Design'
  },
  {
    id: 3,
    category: ['all', 'interior', 'architecture'],
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Contemporary Interior'
  },
  {
    id: 4,
    category: ['all', 'interior', 'furniture'],
    image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Minimal Bedroom'
  },
  {
    id: 5,
    category: ['all', 'decor', 'furniture'],
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Cozy Living Room'
  },
  {
    id: 6,
    category: ['all', 'interior', 'architecture'],
    image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    title: 'Dark Modern Interior'
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredItems = portfolioItems.filter(item =>
    activeTab === 'all' ? true : item.category.includes(activeTab)
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header currentPage="portfolio" />

      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-light mb-4 tracking-wide">Portfolio Grid</h1>
          <div className="flex items-center gap-2 text-sm">
            <a href="/" className="hover:text-gray-300 transition">HOME</a>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">PORTFOLIO GRID</span>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">[ OUR PORTFOLIO ]</p>
            <h2 className="text-4xl font-light mb-3">Some of Our Works</h2>
            <p className="text-gray-600">and Case Studies for Clients</p>
            <div className="w-16 h-px bg-gray-300 mx-auto mt-6"></div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-8 mb-12 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('all')}
              className={`pb-4 text-sm font-medium tracking-wider transition relative ${
                activeTab === 'all'
                  ? 'text-black'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              ALL
              {activeTab === 'all' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`pb-4 text-sm font-medium tracking-wider transition relative ${
                activeTab === 'architecture'
                  ? 'text-black'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              ARCHITECTURE
              {activeTab === 'architecture' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('decor')}
              className={`pb-4 text-sm font-medium tracking-wider transition relative ${
                activeTab === 'decor'
                  ? 'text-black'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              DECOR
              {activeTab === 'decor' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('furniture')}
              className={`pb-4 text-sm font-medium tracking-wider transition relative ${
                activeTab === 'furniture'
                  ? 'text-black'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              FURNITURE
              {activeTab === 'furniture' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('interior')}
              className={`pb-4 text-sm font-medium tracking-wider transition relative ${
                activeTab === 'interior'
                  ? 'text-black'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              INTERIOR
              {activeTab === 'interior' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
              )}
            </button>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <Link
                key={item.id}
                to={`/project/${item.id}`}
                className="group relative overflow-hidden cursor-pointer bg-gray-100"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs text-gray-300 mb-1 uppercase tracking-wider">Interior Design</p>
                    <h3 className="text-xl font-light">{item.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition">
              LOAD MORE
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-black text-white p-3 shadow-lg hover:bg-gray-800 transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
