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

function getIconSVG(name) {
  const icons = {
    mapPin: '<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',
    mail: '<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
    facebook: '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    twitter: '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
    linkedin: '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    instagram: '<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    phone: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>',
    search: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>',
    arrowRight: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    arrowUp: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>',
    chevronLeft: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg>',
    chevronRight: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>',
    grid: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>'
  };
  return icons[name] || '';
}

function createHeader(currentPage = 'home') {
  return `
    <div class="bg-black border-b border-gray-800 text-xs text-white">
      <div class="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <div class="flex gap-6">
          <span class="flex items-center gap-2">
            ${getIconSVG('mapPin')}
            Av. Roma 158, 00187
          </span>
          <span class="flex items-center gap-2">
            ${getIconSVG('mail')}
            info@interno.com
          </span>
        </div>
        <div class="flex gap-4">
          ${getIconSVG('facebook')}
          ${getIconSVG('twitter')}
          ${getIconSVG('linkedin')}
          ${getIconSVG('instagram')}
        </div>
      </div>
    </div>

    <header class="border-b border-gray-800 bg-black text-white">
      <div class="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <a href="#" onclick="navigateTo('home'); return false;" class="flex items-center gap-2">
          <div class="w-8 h-8 border-2 border-white flex items-center justify-center">
            <div class="w-4 h-4 bg-white"></div>
          </div>
          <span class="text-xl font-light tracking-wider">THEMEUD</span>
        </a>

        <nav class="flex gap-8 text-sm">
          <a href="#" onclick="navigateTo('home'); return false;" class="hover:text-gray-400 transition ${currentPage === 'home' ? 'text-white' : 'text-gray-300'}">
            HOME
          </a>
          <a href="#" class="hover:text-gray-400 transition text-gray-300">
            PAGES
          </a>
          <a href="#" class="hover:text-gray-400 transition text-gray-300">
            SERVICES
          </a>
          <a href="#" onclick="navigateTo('portfolio'); return false;" class="hover:text-gray-400 transition ${currentPage === 'portfolio' ? 'text-white' : 'text-gray-300'}">
            PORTFOLIO
          </a>
          <a href="#" class="hover:text-gray-400 transition text-gray-300">
            BLOG
          </a>
          <a href="#" class="hover:text-gray-400 transition text-gray-300">
            CONTACTS
          </a>
        </nav>

        <div class="flex items-center gap-4">
          <button class="p-2 hover:text-gray-400">
            ${getIconSVG('phone')}
          </button>
          <button class="p-2 hover:text-gray-400">
            ${getIconSVG('search')}
          </button>
        </div>
      </div>
    </header>
  `;
}

function createFooter() {
  return `
    <footer class="bg-zinc-950 border-t border-gray-800 pt-16 pb-8 text-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 border-2 border-white flex items-center justify-center">
                <div class="w-4 h-4 bg-white"></div>
              </div>
              <span class="text-xl font-light tracking-wider">THERATIO</span>
            </div>
            <p class="text-sm text-gray-400 mb-6">
              We provides a full range of interior design, architectural design.
            </p>
            <div class="flex gap-4">
              ${getIconSVG('facebook')}
              ${getIconSVG('twitter')}
              ${getIconSVG('linkedin')}
              ${getIconSVG('instagram')}
            </div>
          </div>

          <div>
            <h3 class="text-sm font-medium mb-4 uppercase tracking-wider">Contacts</h3>
            <ul class="space-y-3 text-sm text-gray-400">
              <li class="flex items-start gap-2">
                <span class="text-gray-500">📍</span>
                <span>411 University St, Seattle, USA</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-gray-500">✉️</span>
                <span>theratio.interior@mail.com</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-gray-500">📞</span>
                <span>+1 800 456 789 123</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-medium mb-4 uppercase tracking-wider">Latest Projects</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li class="hover:text-white cursor-pointer transition">Stylish Family Appartment</li>
              <li class="hover:text-white cursor-pointer transition">Modern Villa in Belgium</li>
              <li class="hover:text-white cursor-pointer transition">Private House in Spain</li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-medium mb-4 uppercase tracking-wider">Subscribe</h3>
            <p class="text-sm text-gray-400 mb-4">
              Follow our newsletter to stay updated about agency.
            </p>
            <div class="flex">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                class="bg-black border border-gray-800 px-4 py-2 text-sm flex-1 focus:outline-none focus:border-white placeholder:text-gray-600"
              />
              <button class="bg-white text-black px-4 hover:bg-gray-200 transition">
                ${getIconSVG('arrowRight')}
              </button>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-800 pt-8 flex justify-between items-center text-sm text-gray-400">
          <p>Copyright © 2025 Theratio by OceanThemes. All Rights Reserved.</p>
          <div class="flex gap-6">
            <a href="#" class="hover:text-white transition">Terms of use</a>
            <a href="#" class="hover:text-white transition">Privacy Environmental Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function createHomePage() {
  return `
    <div class="min-h-screen bg-black text-white">
      ${createHeader('home')}

      <section class="relative h-screen">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
          <img
            src="https://images.pexels.com/photos/6585612/pexels-photo-6585612.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Hero"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 class="text-6xl md:text-7xl font-light mb-4 tracking-wide">Live Minimalism</h1>
          <p class="text-gray-300 text-sm tracking-widest uppercase">Discover elegance in simplicity and comfort</p>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-4 -mt-32 relative z-20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="relative h-80 overflow-hidden group cursor-pointer">
            <img
              src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Design Furniture"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <p class="text-xs text-gray-400 mb-2 uppercase tracking-wider">Interior Design</p>
                <h3 class="text-xl font-light">DESIGN FURNITURE</h3>
              </div>
            </div>
          </div>

          <div class="relative h-80 overflow-hidden group cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Latest Project"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <p class="text-xs text-gray-400 mb-2 uppercase tracking-wider">Portfolio</p>
                <h3 class="text-xl font-light">LATEST PROJECT</h3>
              </div>
            </div>
          </div>

          <div class="relative h-80 overflow-hidden group cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Stunning Tutorials"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <p class="text-xs text-gray-400 mb-2 uppercase tracking-wider">Blog</p>
                <h3 class="text-xl font-light">STUNNING TUTORIALS</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="max-w-7xl mx-auto px-4 py-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-light mb-6">Ambitious Studio<br />with a Successful<br />Concept & Ideas</h2>
            <p class="text-gray-400 mb-8 leading-relaxed">
              Discover exceptional interior design solutions that transform spaces into extraordinary living experiences.
            </p>
            <button class="bg-white text-black px-8 py-3 text-sm hover:bg-gray-200 transition flex items-center gap-2">
              Learn More ${getIconSVG('arrowRight')}
            </button>
          </div>

          <div class="grid grid-cols-2 gap-8">
            <div>
              <div class="w-12 h-12 border border-white/30 flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
              </div>
              <h3 class="text-lg mb-2">Challenge Ideas</h3>
              <p class="text-sm text-gray-400">We embrace bold concepts and innovative solutions that push boundaries.</p>
            </div>

            <div>
              <div class="w-12 h-12 border border-white/30 flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h3 class="text-lg mb-2">Visualization</h3>
              <p class="text-sm text-gray-400">Transform your vision into stunning 3D renderings and detailed plans.</p>
            </div>

            <div>
              <div class="w-12 h-12 border border-white/30 flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
              </div>
              <h3 class="text-lg mb-2">Smart Improvement</h3>
              <p class="text-sm text-gray-400">Integrate modern technology with timeless design principles.</p>
            </div>

            <div>
              <div class="w-12 h-12 border border-white/30 flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 class="text-lg mb-2">Material Examination</h3>
              <p class="text-sm text-gray-400">Carefully select premium materials for lasting quality and beauty.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-zinc-950 py-24">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-16">
            <p class="text-sm text-gray-400 mb-2 uppercase tracking-widest">Latest Projects</p>
            <h2 class="text-4xl font-light">Introduce Our Projects</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop"
                alt="Project"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <div class="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop"
                alt="Project"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <div class="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop"
                alt="Project"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <div class="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop"
                alt="Project"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <div class="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop"
                alt="Project"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                <div>
                  <p class="text-xs text-gray-400 mb-1">Interior Design</p>
                  <h3 class="text-xl font-light">Luxury Bathroom Interior</h3>
                </div>
              </div>
            </div>

            <div class="relative h-96 overflow-hidden group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop"
                alt="Project"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          </div>

          <div class="text-center mt-12">
            <button onclick="navigateTo('portfolio'); return false;" class="bg-transparent border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition flex items-center gap-2 mx-auto">
              View Portfolio ${getIconSVG('arrowRight')}
            </button>
          </div>
        </div>
      </section>

      <section class="py-24">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="relative">
              <img
                src="https://images.pexels.com/photos/1096141/pexels-photo-1096141.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Designer"
                class="w-full h-auto grayscale"
              />
            </div>

            <div>
              <h2 class="text-4xl font-light mb-8">Our Philosophy in Simply<br />and Quality Design</h2>
              <p class="text-gray-400 mb-6 leading-relaxed">
                We believe in creating timeless spaces that reflect your unique personality while maintaining the highest standards of craftsmanship and attention to detail.
              </p>

              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <div class="w-1 h-1 bg-white mt-2"></div>
                  <p class="text-sm text-gray-300">Customized design solutions tailored to your lifestyle</p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-1 h-1 bg-white mt-2"></div>
                  <p class="text-sm text-gray-300">Sustainable and environmentally conscious materials</p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-1 h-1 bg-white mt-2"></div>
                  <p class="text-sm text-gray-300">Meticulous attention to every detail</p>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-1 h-1 bg-white mt-2"></div>
                  <p class="text-sm text-gray-300">Seamless project management from concept to completion</p>
                </div>
              </div>

              <div class="mt-12">
                <div class="font-light text-3xl mb-2" style="font-family: cursive">P. Bernald</div>
                <p class="text-xs text-gray-400 uppercase tracking-wider">CEO - Founder of Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative h-screen">
        <div class="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Dream House"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/50"></div>
        </div>
        <div class="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h2 class="text-5xl font-light mb-4">Your Dream House</h2>
          <p class="text-gray-300 mb-8 max-w-2xl">
            We provide professional interior design services that transform your vision into reality. From concept to completion, we handle every detail with precision and care.
          </p>
          <button class="bg-transparent border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition flex items-center gap-2">
            Get Started ${getIconSVG('arrowRight')}
          </button>
        </div>
      </section>

      <section class="bg-black py-24">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-white/20 flex items-center justify-center">
                <div class="text-3xl font-light">75%</div>
              </div>
              <h3 class="text-sm uppercase tracking-wider mb-2">Awarded Design</h3>
              <p class="text-xs text-gray-400">Recognition from international design councils</p>
            </div>

            <div class="text-center">
              <div class="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-white/20 flex items-center justify-center">
                <div class="text-3xl font-light">90%</div>
              </div>
              <h3 class="text-sm uppercase tracking-wider mb-2">10 Years Design</h3>
              <p class="text-xs text-gray-400">Decade of excellence in interior design</p>
            </div>

            <div class="text-center">
              <div class="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-white/20 flex items-center justify-center">
                <div class="text-3xl font-light">75%</div>
              </div>
              <h3 class="text-sm uppercase tracking-wider mb-2">Successfully</h3>
              <p class="text-xs text-gray-400">Projects completed with client satisfaction</p>
            </div>

            <div class="text-center">
              <div class="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-white/20 flex items-center justify-center">
                <div class="text-3xl font-light">89%</div>
              </div>
              <h3 class="text-sm uppercase tracking-wider mb-2">3D Rendering</h3>
              <p class="text-xs text-gray-400">Photorealistic visualization services</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p class="text-sm text-gray-400 mb-2 uppercase tracking-widest">Testimonials</p>
              <h2 class="text-4xl font-light mb-8">What People Say</h2>
              <p class="text-gray-400 mb-6 leading-relaxed italic">
                "They truly understand how to create spaces that are both beautiful and functional. The attention to detail and professionalism throughout the entire process was impressive. Our home has been transformed beyond our expectations."
              </p>
              <div class="mt-8">
                <p class="font-medium">Paola Guevara</p>
                <p class="text-xs text-gray-400">Homeowner, California</p>
              </div>
            </div>

            <div class="relative h-96">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Testimonial"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-zinc-950 py-16">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-6 gap-12 items-center opacity-40">
            <div class="text-center text-sm font-light tracking-wider">STUDIO ROOM</div>
            <div class="text-center text-sm font-light tracking-wider">THERMIO</div>
            <div class="text-center text-sm font-light tracking-wider">RADIOSCALE</div>
            <div class="text-center text-sm font-light tracking-wider">VENUE</div>
            <div class="text-center text-sm font-light tracking-wider">EMPIRE LIFE</div>
            <div class="text-center text-sm font-light tracking-wider">CARLO STONE</div>
          </div>
        </div>
      </section>

      <section class="py-24">
        <div class="max-w-7xl mx-auto px-4">
          <div class="flex justify-between items-center mb-12">
            <h2 class="text-4xl font-light">Read Our Latest News</h2>
            <button class="bg-white text-black px-6 py-2 text-sm hover:bg-gray-200 transition">
              View All
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="group cursor-pointer">
              <div class="relative h-64 overflow-hidden mb-4">
                <img
                  src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Blog"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <p class="text-xs text-gray-400 mb-2">INTERIOR / 26 DECEMBER, 2023</p>
              <h3 class="text-xl font-light mb-3 group-hover:text-gray-400 transition">Top 10 Tips for Your Interior</h3>
              <p class="text-sm text-gray-400">Transform your living space with our curated collection of expert interior design tips and tricks.</p>
            </div>

            <div class="group cursor-pointer">
              <div class="relative h-64 overflow-hidden mb-4">
                <img
                  src="https://images.pexels.com/photos/6585608/pexels-photo-6585608.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Blog"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <p class="text-xs text-gray-400 mb-2">ARCHITECTURE / 22 DECEMBER, 2023</p>
              <h3 class="text-xl font-light mb-3 group-hover:text-gray-400 transition">The Greatest Ideas For DIY Crafts</h3>
              <p class="text-sm text-gray-400">Discover creative and affordable ways to enhance your home with personalized touches.</p>
            </div>

            <div class="group cursor-pointer">
              <div class="relative h-64 overflow-hidden mb-4">
                <img
                  src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Blog"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <p class="text-xs text-gray-400 mb-2">DECOR / 18 DECEMBER, 2023</p>
              <h3 class="text-xl font-light mb-3 group-hover:text-gray-400 transition">Use These Colors & Make Beautiful</h3>
              <p class="text-sm text-gray-400">Master the art of color theory to create harmonious and stunning interior spaces.</p>
            </div>
          </div>
        </div>
      </section>

      ${createFooter()}
    </div>
  `;
}

function createPortfolioPage() {
  let currentTab = 'all';
  let showScrollTop = false;

  const updatePortfolioGrid = () => {
    const filteredItems = portfolioItems.filter(item =>
      currentTab === 'all' ? true : item.category.includes(currentTab)
    );

    const gridHTML = filteredItems.map(item => `
      <div onclick="navigateTo('project', ${item.id}); return false;" class="group relative overflow-hidden cursor-pointer bg-gray-100">
        <div class="aspect-[3/4] overflow-hidden">
          <img
            src="${item.image}"
            alt="${item.title}"
            class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
          <div class="text-white">
            <p class="text-xs text-gray-300 mb-1 uppercase tracking-wider">Interior Design</p>
            <h3 class="text-xl font-light">${item.title}</h3>
          </div>
        </div>
      </div>
    `).join('');

    document.getElementById('portfolio-grid').innerHTML = gridHTML;
  };

  const handleScroll = () => {
    const shouldShow = window.scrollY > 400;
    if (shouldShow !== showScrollTop) {
      showScrollTop = shouldShow;
      const btn = document.getElementById('scroll-top-btn');
      if (btn) {
        btn.className = `fixed bottom-8 right-8 bg-black text-white p-3 shadow-lg hover:bg-gray-800 transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`;
      }
    }
  };

  setTimeout(() => {
    window.addEventListener('scroll', handleScroll);

    document.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        currentTab = e.target.dataset.tab;
        document.querySelectorAll('[data-tab]').forEach(b => {
          const isActive = b.dataset.tab === currentTab;
          b.className = `pb-4 text-sm font-medium tracking-wider transition relative ${
            isActive ? 'text-black' : 'text-gray-500 hover:text-gray-700'
          }`;
          const indicator = b.querySelector('.tab-indicator');
          if (indicator) {
            indicator.style.display = isActive ? 'block' : 'none';
          }
        });
        updatePortfolioGrid();
      });
    });
  }, 100);

  return `
    <div class="min-h-screen bg-white text-gray-900">
      ${createHeader('portfolio')}

      <section class="relative h-96">
        <div class="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
            alt="Portfolio"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/50"></div>
        </div>
        <div class="relative z-10 h-full flex flex-col items-center justify-center text-white">
          <h1 class="text-5xl font-light mb-4 tracking-wide">Portfolio Grid</h1>
          <div class="flex items-center gap-2 text-sm">
            <a href="#" onclick="navigateTo('home'); return false;" class="hover:text-gray-300 transition">HOME</a>
            <span class="text-gray-400">•</span>
            <span class="text-gray-400">PORTFOLIO GRID</span>
          </div>
        </div>
      </section>

      <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="text-center mb-16">
            <p class="text-xs text-gray-500 mb-2 uppercase tracking-widest">[ OUR PORTFOLIO ]</p>
            <h2 class="text-4xl font-light mb-3">Some of Our Works</h2>
            <p class="text-gray-600">and Case Studies for Clients</p>
            <div class="w-16 h-px bg-gray-300 mx-auto mt-6"></div>
          </div>

          <div class="flex justify-center gap-8 mb-12 border-b border-gray-200">
            <button data-tab="all" class="pb-4 text-sm font-medium tracking-wider transition relative text-black">
              ALL
              <div class="tab-indicator absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
            </button>
            <button data-tab="architecture" class="pb-4 text-sm font-medium tracking-wider transition relative text-gray-500 hover:text-gray-700">
              ARCHITECTURE
              <div class="tab-indicator absolute bottom-0 left-0 right-0 h-0.5 bg-black" style="display: none;"></div>
            </button>
            <button data-tab="decor" class="pb-4 text-sm font-medium tracking-wider transition relative text-gray-500 hover:text-gray-700">
              DECOR
              <div class="tab-indicator absolute bottom-0 left-0 right-0 h-0.5 bg-black" style="display: none;"></div>
            </button>
            <button data-tab="furniture" class="pb-4 text-sm font-medium tracking-wider transition relative text-gray-500 hover:text-gray-700">
              FURNITURE
              <div class="tab-indicator absolute bottom-0 left-0 right-0 h-0.5 bg-black" style="display: none;"></div>
            </button>
            <button data-tab="interior" class="pb-4 text-sm font-medium tracking-wider transition relative text-gray-500 hover:text-gray-700">
              INTERIOR
              <div class="tab-indicator absolute bottom-0 left-0 right-0 h-0.5 bg-black" style="display: none;"></div>
            </button>
          </div>

          <div id="portfolio-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${portfolioItems.map(item => `
              <div onclick="navigateTo('project', ${item.id}); return false;" class="group relative overflow-hidden cursor-pointer bg-gray-100">
                <div class="aspect-[3/4] overflow-hidden">
                  <img
                    src="${item.image}"
                    alt="${item.title}"
                    class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                  <div class="text-white">
                    <p class="text-xs text-gray-300 mb-1 uppercase tracking-wider">Interior Design</p>
                    <h3 class="text-xl font-light">${item.title}</h3>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="text-center mt-12">
            <button class="bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition">
              LOAD MORE
            </button>
          </div>
        </div>
      </section>

      ${createFooter()}

      <button
        id="scroll-top-btn"
        onclick="window.scrollTo({ top: 0, behavior: 'smooth' });"
        class="fixed bottom-8 right-8 bg-black text-white p-3 shadow-lg hover:bg-gray-800 transition-all duration-300 z-50 opacity-0 translate-y-4 pointer-events-none"
        aria-label="Scroll to top"
      >
        ${getIconSVG('arrowUp')}
      </button>
    </div>
  `;
}

function createProjectDetailPage(projectId) {
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

  let currentRelatedIndex = 0;

  setTimeout(() => {
    const prevBtn = document.getElementById('prev-related');
    const nextBtn = document.getElementById('next-related');
    const carousel = document.getElementById('related-carousel');

    if (prevBtn && nextBtn && carousel) {
      prevBtn.addEventListener('click', () => {
        currentRelatedIndex = (currentRelatedIndex - 1 + relatedProjects.length) % relatedProjects.length;
        carousel.style.transform = `translateX(-${currentRelatedIndex * 100}%)`;
        updateDots();
      });

      nextBtn.addEventListener('click', () => {
        currentRelatedIndex = (currentRelatedIndex + 1) % relatedProjects.length;
        carousel.style.transform = `translateX(-${currentRelatedIndex * 100}%)`;
        updateDots();
      });

      const updateDots = () => {
        document.querySelectorAll('[data-dot]').forEach((dot, index) => {
          dot.className = `w-2 h-2 rounded-full transition ${
            currentRelatedIndex === index ? 'bg-black' : 'bg-gray-300'
          }`;
        });
      };

      document.querySelectorAll('[data-dot]').forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentRelatedIndex = index;
          carousel.style.transform = `translateX(-${currentRelatedIndex * 100}%)`;
          updateDots();
        });
      });
    }
  }, 100);

  return `
    <div class="min-h-screen bg-white text-gray-900">
      ${createHeader('portfolio')}

      <div class="max-w-7xl mx-auto px-4 py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div class="space-y-6">
            ${projectImages.map((image, index) => `
              <div key="${index}" class="w-full">
                <img
                  src="${image}"
                  alt="Project ${index + 1}"
                  class="w-full h-auto object-cover"
                />
              </div>
            `).join('')}
          </div>

          <div class="lg:pl-8">
            <div class="sticky top-24">
              <h1 class="text-4xl font-light mb-12">NEW YORK HOTEL</h1>

              <div class="space-y-8">
                <div>
                  <h3 class="text-xs font-semibold uppercase tracking-wider mb-2">TEAM</h3>
                  <p class="text-gray-600">Darlene Robertson</p>
                </div>

                <div>
                  <h3 class="text-xs font-semibold uppercase tracking-wider mb-2">CLIENT</h3>
                  <p class="text-gray-600">Hettly</p>
                </div>

                <div>
                  <h3 class="text-xs font-semibold uppercase tracking-wider mb-2">TERMS</h3>
                  <p class="text-gray-600">6 month</p>
                </div>

                <div>
                  <h3 class="text-xs font-semibold uppercase tracking-wider mb-2">SERVICES</h3>
                  <p class="text-gray-600">Architecture, Interior</p>
                </div>

                <div>
                  <h3 class="text-xs font-semibold uppercase tracking-wider mb-2">STRATEGY</h3>
                  <p class="text-gray-600">Minimalistic</p>
                </div>

                <div>
                  <h3 class="text-xs font-semibold uppercase tracking-wider mb-2">DATE</h3>
                  <p class="text-gray-600">November 22, 2021</p>
                </div>

                <div>
                  <h3 class="text-xs font-semibold uppercase tracking-wider mb-4">SHARE</h3>
                  <div class="flex gap-4">
                    <button class="text-gray-400 hover:text-gray-900 transition">
                      ${getIconSVG('facebook')}
                    </button>
                    <button class="text-gray-400 hover:text-gray-900 transition">
                      ${getIconSVG('twitter')}
                    </button>
                    <button class="text-gray-400 hover:text-gray-900 transition">
                      ${getIconSVG('instagram')}
                    </button>
                    <button class="text-gray-400 hover:text-gray-900 transition">
                      ${getIconSVG('linkedin')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-8 mb-20">
          <div class="flex items-center justify-between">
            <button class="group flex items-center gap-3 text-left hover:opacity-70 transition">
              ${getIconSVG('chevronLeft')}
              <div>
                <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">PREV</p>
                <p class="text-sm font-light">GREEN RESIDENCE</p>
              </div>
            </button>

            <a
              href="#"
              onclick="navigateTo('portfolio'); return false;"
              class="p-3 border border-gray-300 hover:bg-gray-100 transition"
              title="Back to gallery"
            >
              ${getIconSVG('grid')}
            </a>

            <button class="group flex items-center gap-3 text-right hover:opacity-70 transition">
              <div>
                <p class="text-xs text-gray-400 uppercase tracking-wider mb-1">NEXT</p>
                <p class="text-sm font-light">PARIS STUDIO</p>
              </div>
              ${getIconSVG('chevronRight')}
            </button>
          </div>
        </div>

        <div class="mb-20">
          <h2 class="text-3xl font-light text-center mb-12">Related Projects</h2>

          <div class="relative">
            <button
              id="prev-related"
              class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 bg-white shadow-lg hover:bg-gray-50 transition"
              aria-label="Previous project"
            >
              ${getIconSVG('chevronLeft')}
            </button>

            <button
              id="next-related"
              class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 bg-white shadow-lg hover:bg-gray-50 transition"
              aria-label="Next project"
            >
              ${getIconSVG('chevronRight')}
            </button>

            <div class="overflow-hidden">
              <div
                id="related-carousel"
                class="flex transition-transform duration-500 ease-out"
              >
                ${relatedProjects.map((project) => `
                  <div class="w-full flex-shrink-0 px-2">
                    <div class="grid grid-cols-3 gap-6">
                      ${relatedProjects.map((item) => `
                        <div class="group cursor-pointer">
                          <div class="aspect-[4/5] overflow-hidden mb-4">
                            <img
                              src="${item.image}"
                              alt="${item.title}"
                              class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                            />
                          </div>
                          <h3 class="text-center text-sm font-light">${item.title}</h3>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="flex justify-center gap-2 mt-8">
              ${relatedProjects.map((_, index) => `
                <button
                  data-dot="${index}"
                  class="w-2 h-2 rounded-full transition ${
                    index === 0 ? 'bg-black' : 'bg-gray-300'
                  }"
                  aria-label="Go to slide ${index + 1}"
                ></button>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      ${createFooter()}
    </div>
  `;
}

function navigateTo(page, projectId) {
  const app = document.getElementById('app');
  window.scrollTo(0, 0);

  switch (page) {
    case 'home':
      app.innerHTML = createHomePage();
      history.pushState({ page: 'home' }, '', '#/');
      break;
    case 'portfolio':
      app.innerHTML = createPortfolioPage();
      history.pushState({ page: 'portfolio' }, '', '#/portfolio');
      break;
    case 'project':
      app.innerHTML = createProjectDetailPage(projectId);
      history.pushState({ page: 'project', projectId }, '', `#/project/${projectId}`);
      break;
    default:
      app.innerHTML = createHomePage();
  }
}

window.addEventListener('popstate', (event) => {
  if (event.state) {
    navigateTo(event.state.page, event.state.projectId);
  } else {
    navigateTo('home');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  if (hash.startsWith('#/project/')) {
    const projectId = parseInt(hash.split('/')[2]);
    navigateTo('project', projectId);
  } else if (hash === '#/portfolio') {
    navigateTo('portfolio');
  } else {
    navigateTo('home');
  }
});
