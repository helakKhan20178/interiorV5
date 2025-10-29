import { useState } from 'react';
import { ChevronLeft, ChevronRight, Grid, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const projectImages = [
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1200'
];

const relatedProjects = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Modern Living Space'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Luxury Bathroom Design'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Contemporary Interior'
  }
];

export default function ProjectDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentRelatedIndex, setCurrentRelatedIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const nextRelatedProject = () => {
    setCurrentRelatedIndex((prev) => (prev + 1) % relatedProjects.length);
  };

  const prevRelatedProject = () => {
    setCurrentRelatedIndex((prev) => (prev - 1 + relatedProjects.length) % relatedProjects.length);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header currentPage="portfolio" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Project Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Images */}
          <div className="space-y-6">
            {projectImages.map((image, index) => (
              <div key={index} className="w-full">
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right: Project Info */}
          <div className="lg:pl-8">
            <div className="sticky top-24">
              <h1 className="text-4xl font-light mb-12">NEW YORK HOTEL</h1>

              <div className="space-y-8">
                {/* Team */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-2">TEAM</h3>
                  <p className="text-gray-600">Darlene Robertson</p>
                </div>

                {/* Client */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-2">CLIENT</h3>
                  <p className="text-gray-600">Hettly</p>
                </div>

                {/* Terms */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-2">TERMS</h3>
                  <p className="text-gray-600">6 month</p>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-2">SERVICES</h3>
                  <p className="text-gray-600">Architecture, Interior</p>
                </div>

                {/* Strategy */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-2">STRATEGY</h3>
                  <p className="text-gray-600">Minimalistic</p>
                </div>

                {/* Date */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-2">DATE</h3>
                  <p className="text-gray-600">November 22, 2021</p>
                </div>

                {/* Share */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-4">SHARE</h3>
                  <div className="flex gap-4">
                    <button className="text-gray-400 hover:text-gray-900 transition">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-900 transition">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-900 transition">
                      <Instagram className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-900 transition">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="border-t border-gray-200 pt-8 mb-20">
          <div className="flex items-center justify-between">
            {/* Previous Project */}
            <button className="group flex items-center gap-3 text-left hover:opacity-70 transition">
              <ChevronLeft className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">PREV</p>
                <p className="text-sm font-light">GREEN RESIDENCE</p>
              </div>
            </button>

            {/* Gallery Icon */}
            <a
              href="/portfolio"
              className="p-3 border border-gray-300 hover:bg-gray-100 transition"
              title="Back to gallery"
            >
              <Grid className="w-5 h-5" />
            </a>

            {/* Next Project */}
            <button className="group flex items-center gap-3 text-right hover:opacity-70 transition">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">NEXT</p>
                <p className="text-sm font-light">PARIS STUDIO</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Related Projects Carousel */}
        <div className="mb-20">
          <h2 className="text-3xl font-light text-center mb-12">Related Projects</h2>

          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevRelatedProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 bg-white shadow-lg hover:bg-gray-50 transition"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextRelatedProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 bg-white shadow-lg hover:bg-gray-50 transition"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentRelatedIndex * 100}%)` }}
              >
                {relatedProjects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-2">
                    <div className="grid grid-cols-3 gap-6">
                      {relatedProjects.map((item) => (
                        <div key={item.id} className="group cursor-pointer">
                          <div className="aspect-[4/5] overflow-hidden mb-4">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                            />
                          </div>
                          <h3 className="text-center text-sm font-light">{item.title}</h3>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {relatedProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentRelatedIndex(index)}
                  className={`w-2 h-2 rounded-full transition ${
                    currentRelatedIndex === index ? 'bg-black' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
