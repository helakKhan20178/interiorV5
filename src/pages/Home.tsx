import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
          <img
            src="https://images.pexels.com/photos/6585612/pexels-photo-6585612.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-7xl font-light mb-4 tracking-wide">Live Minimalism</h1>
          <p className="text-gray-300 text-sm tracking-widest uppercase">Discover elegance in simplicity and comfort</p>
        </div>
      </section>

      {/* Three Cards Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-80 overflow-hidden group cursor-pointer">
            <img
              src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Design Furniture"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Interior Design</p>
                <h3 className="text-xl font-light">DESIGN FURNITURE</h3>
              </div>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden group cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Latest Project"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Portfolio</p>
                <h3 className="text-xl font-light">LATEST PROJECT</h3>
              </div>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden group cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Stunning Tutorials"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Blog</p>
                <h3 className="text-xl font-light">STUNNING TUTORIALS</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-light mb-6">Ambitious Studio<br />with a Successful<br />Concept & Ideas</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Discover exceptional interior design solutions that transform spaces into extraordinary living experiences.
            </p>
            <button className="bg-white text-black px-8 py-3 text-sm hover:bg-gray-200 transition flex items-center gap-2">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="w-12 h-12 border border-white/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-lg mb-2">Challenge Ideas</h3>
              <p className="text-sm text-gray-400">We embrace bold concepts and innovative solutions that push boundaries.</p>
            </div>

            <div>
              <div className="w-12 h-12 border border-white/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h3 className="text-lg mb-2">Visualization</h3>
              <p className="text-sm text-gray-400">Transform your vision into stunning 3D renderings and detailed plans.</p>
            </div>

            <div>
              <div className="w-12 h-12 border border-white/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-lg mb-2">Smart Improvement</h3>
              <p className="text-sm text-gray-400">Integrate modern technology with timeless design principles.</p>
            </div>

            <div>
              <div className="w-12 h-12 border border-white/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-lg mb-2">Material Examination</h3>
              <p className="text-sm text-gray-400">Carefully select premium materials for lasting quality and beauty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-400 mb-2 uppercase tracking-widest">Latest Projects</p>
            <h2 className="text-4xl font-light">Introduce Our Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop"
                alt="Project"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <div className="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop"
                alt="Project"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <div className="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop"
                alt="Project"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <div className="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop"
                alt="Project"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <div className="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop"
                alt="Project"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Interior Design</p>
                  <h3 className="text-xl font-light">Luxury Bathroom Interior</h3>
                </div>
              </div>
            </div>

            <div className="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop"
                alt="Project"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/portfolio">
              <button className="bg-transparent border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition flex items-center gap-2 mx-auto">
                View Portfolio <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1096141/pexels-photo-1096141.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Designer"
                className="w-full h-auto grayscale"
              />
            </div>

            <div>
              <h2 className="text-4xl font-light mb-8">Our Philosophy in Simply<br />and Quality Design</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We believe in creating timeless spaces that reflect your unique personality while maintaining the highest standards of craftsmanship and attention to detail.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-white mt-2"></div>
                  <p className="text-sm text-gray-300">Customized design solutions tailored to your lifestyle</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-white mt-2"></div>
                  <p className="text-sm text-gray-300">Sustainable and environmentally conscious materials</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-white mt-2"></div>
                  <p className="text-sm text-gray-300">Meticulous attention to every detail</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-white mt-2"></div>
                  <p className="text-sm text-gray-300">Seamless project management from concept to completion</p>
                </div>
              </div>

              <div className="mt-12">
                <div className="font-light text-3xl mb-2" style={{ fontFamily: 'cursive' }}>P. Bernald</div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">CEO - Founder of Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dream House Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Dream House"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-5xl font-light mb-4">Your Dream House</h2>
          <p className="text-gray-300 mb-8 max-w-2xl">
            We provide professional interior design services that transform your vision into reality. From concept to completion, we handle every detail with precision and care.
          </p>
          <button className="bg-transparent border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition flex items-center gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-white/20 flex items-center justify-center">
                <div className="text-3xl font-light">75%</div>
              </div>
              <h3 className="text-sm uppercase tracking-wider mb-2">Awarded Design</h3>
              <p className="text-xs text-gray-400">Recognition from international design councils</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-white/20 flex items-center justify-center">
                <div className="text-3xl font-light">90%</div>
              </div>
              <h3 className="text-sm uppercase tracking-wider mb-2">10 Years Design</h3>
              <p className="text-xs text-gray-400">Decade of excellence in interior design</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-white/20 flex items-center justify-center">
                <div className="text-3xl font-light">75%</div>
              </div>
              <h3 className="text-sm uppercase tracking-wider mb-2">Successfully</h3>
              <p className="text-xs text-gray-400">Projects completed with client satisfaction</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-white/20 flex items-center justify-center">
                <div className="text-3xl font-light">89%</div>
              </div>
              <h3 className="text-sm uppercase tracking-wider mb-2">3D Rendering</h3>
              <p className="text-xs text-gray-400">Photorealistic visualization services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm text-gray-400 mb-2 uppercase tracking-widest">Testimonials</p>
              <h2 className="text-4xl font-light mb-8">What People Say</h2>
              <p className="text-gray-400 mb-6 leading-relaxed italic">
                "They truly understand how to create spaces that are both beautiful and functional. The attention to detail and professionalism throughout the entire process was impressive. Our home has been transformed beyond our expectations."
              </p>
              <div className="mt-8">
                <p className="font-medium">Paola Guevara</p>
                <p className="text-xs text-gray-400">Homeowner, California</p>
              </div>
            </div>

            <div className="relative h-96">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Testimonial"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-zinc-950 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 items-center opacity-40">
            <div className="text-center text-sm font-light tracking-wider">STUDIO ROOM</div>
            <div className="text-center text-sm font-light tracking-wider">THERMIO</div>
            <div className="text-center text-sm font-light tracking-wider">RADIOSCALE</div>
            <div className="text-center text-sm font-light tracking-wider">VENUE</div>
            <div className="text-center text-sm font-light tracking-wider">EMPIRE LIFE</div>
            <div className="text-center text-sm font-light tracking-wider">CARLO STONE</div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-light">Read Our Latest News</h2>
            <button className="bg-white text-black px-6 py-2 text-sm hover:bg-gray-200 transition">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative h-64 overflow-hidden mb-4">
                <img
                  src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Blog"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <p className="text-xs text-gray-400 mb-2">INTERIOR / 26 DECEMBER, 2023</p>
              <h3 className="text-xl font-light mb-3 group-hover:text-gray-400 transition">Top 10 Tips for Your Interior</h3>
              <p className="text-sm text-gray-400">Transform your living space with our curated collection of expert interior design tips and tricks.</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative h-64 overflow-hidden mb-4">
                <img
                  src="https://images.pexels.com/photos/6585608/pexels-photo-6585608.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Blog"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <p className="text-xs text-gray-400 mb-2">ARCHITECTURE / 22 DECEMBER, 2023</p>
              <h3 className="text-xl font-light mb-3 group-hover:text-gray-400 transition">The Greatest Ideas For DIY Crafts</h3>
              <p className="text-sm text-gray-400">Discover creative and affordable ways to enhance your home with personalized touches.</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative h-64 overflow-hidden mb-4">
                <img
                  src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Blog"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <p className="text-xs text-gray-400 mb-2">DECOR / 18 DECEMBER, 2023</p>
              <h3 className="text-xl font-light mb-3 group-hover:text-gray-400 transition">Use These Colors & Make Beautiful</h3>
              <p className="text-sm text-gray-400">Master the art of color theory to create harmonious and stunning interior spaces.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
