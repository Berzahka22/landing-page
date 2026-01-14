<template>
    <div class="bg-slate-900 overflow-hidden relative">
      <!-- Background gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      <!-- Main content -->
      <div class="relative z-10 min-h-screen flex items-center justify-center py-8 md:py-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-stretch">
            
            <!-- Left Card - Rating -->
            <div class="animate-slide-up h-full order-1 lg:order-1" style="animation-delay: 0.2s;">
              <div class="group h-full bg-[#22355F] rounded-3xl p-4 md:p-6 transform transition-all duration-500 lg:hover:scale-105 lg:hover:shadow-2xl animate-float min-h-[400px] md:min-h-0 flex flex-col lg:hover:bg-gradient-to-br lg:hover:from-[#1a2a4f] lg:hover:to-[#2a3a6f]">
                <!-- Header -->
                <div class="mb-6 md:mb-8 lg:group-hover:translate-y-[-5px] transition-transform duration-500">
                  <div>
                    <h3 class="text-white text-lg md:text-xl font-medium mb-1 lg:group-hover:text-yellow-300 transition-colors duration-500">Sefarting</h3>
                    <div class="flex items-center space-x-1">
                      <svg v-for="(item, index) in 4" :key="index" 
                        class="w-4 h-4 text-yellow-400 lg:group-hover:scale-110 lg:group-hover:text-yellow-300 transition-all duration-300"
                        :style="{ transitionDelay: `${index * 100}ms` }"
                        fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
  
                <!-- Rating Display -->
                <div class="text-center flex-1 flex flex-col justify-center lg:group-hover:scale-110 transition-transform duration-500">
                  <div class="text-6xl sm:text-8xl md:text-[120px] h-min leading-none font-bold text-yellow-400 animate-pulses relative lg:group-hover:text-yellow-300 transition-colors duration-500">
                    4.9/5 
                    <span class="absolute top-0 right-0 md:right-0">
                      <svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 text-yellow-400 lg:group-hover:text-yellow-300 transition-colors duration-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
  
                <div class="mt-4 md:mt-6 space-y-3 md:space-y-4">
                  <p class="text-xl md:text-2xl font-semibold text-white lg:group-hover:translate-x-2 transition-transform duration-500">Text subtitle</p>
                  <p class="text-slate-300 text-sm leading-5 md:leading-5 lg:group-hover:text-slate-200 lg:group-hover:translate-x-2 transition-all duration-500 delay-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit 
                    amet sapien fringilla, mattis ligula consectetur, ultrices 
                    mauris.
                  </p>
                </div>
                
                <!-- Animated Border Effect -->
                <div class="absolute inset-0 rounded-3xl border-2 border-transparent lg:group-hover:border-yellow-400/30 lg:group-hover:animate-pulse-glow transition-all duration-500 pointer-events-none"></div>
              </div>
            </div>
  
            <!-- Middle Column - Testimonials -->
            <div class="space-y-4 md:space-y-6 order-3 lg:order-2">
              <!-- Green Testimonial -->
              <div class="animate-slide-up group" style="animation-delay: 0.4s;">
                <div class="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-4 md:p-6 transform transition-all duration-500 lg:hover:scale-105 lg:hover:shadow-2xl animate-float min-h-[200px] md:min-h-0 lg:group-hover:bg-gradient-to-br lg:group-hover:from-green-600 lg:group-hover:to-emerald-700" style="animation-delay: 0.5s;">
                  <!-- User Info -->
                  <div class="flex items-center space-x-3 mb-3 md:mb-4 lg:group-hover:translate-x-2 transition-transform duration-500">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face" 
                      alt="Sarah Jenkins" 
                      class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white/30 lg:group-hover:border-white/60 lg:group-hover:scale-110 transition-all duration-500"
                    />
                    <div>
                      <h4 class="text-white font-semibold text-base md:text-lg lg:group-hover:text-green-100 transition-colors duration-500">Sarah Jenkins</h4>
                      <p class="text-green-100 text-xs md:text-sm lg:group-hover:text-white transition-colors duration-500">+ 90 pts</p>
                    </div>
                  </div>
  
                  <!-- Progress Bar -->
                  <div class="w-full bg-green-400/30 rounded-full h-1 mb-3 md:mb-4 overflow-hidden lg:group-hover:bg-green-500/40 transition-colors duration-500">
                    <div class="bg-white h-1 rounded-full w-3/4 animate-pulse lg:group-hover:w-4/5 transition-all duration-500"></div>
                  </div>
  
                  <!-- Testimonial Text -->
                  <p class="text-xs md:text-sm font-medium leading-5 lg:group-hover:text-white lg:group-hover:translate-x-1 transition-all duration-500 delay-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit 
                    amet sapien fringilla, mattis ligula consectetur, ultrices 
                    mauris.
                  </p>
                  
                  <!-- Floating icons -->
                  <div class="absolute top-2 right-2 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                    <svg class="w-5 h-5 text-white/50" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
  
              <!-- Blue Testimonial -->
              <div class="animate-slide-up group" style="animation-delay: 0.6s;">
                <div class="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-4 md:p-6 transform transition-all duration-500 lg:hover:scale-105 lg:hover:shadow-2xl animate-float min-h-[200px] md:min-h-0 lg:group-hover:bg-gradient-to-br lg:group-hover:from-blue-600 lg:group-hover:to-indigo-700" style="animation-delay: 1s;">
                  <!-- User Info -->
                  <div class="flex items-center space-x-3 mb-3 md:mb-4 lg:group-hover:translate-x-2 transition-transform duration-500">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face" 
                      alt="Sarah Jenkins" 
                      class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white/30 lg:group-hover:border-white/60 lg:group-hover:scale-110 transition-all duration-500"
                    />
                    <div>
                      <h4 class="text-white font-semibold text-base md:text-lg lg:group-hover:text-blue-100 transition-colors duration-500">Sarah Jenkins</h4>
                      <p class="text-blue-100 text-xs md:text-sm lg:group-hover:text-white transition-colors duration-500">+ 90 pts</p>
                    </div>
                  </div>
  
                  <!-- Progress Bar -->
                  <div class="w-full bg-blue-400/30 rounded-full h-1 mb-3 md:mb-4 overflow-hidden lg:group-hover:bg-blue-500/40 transition-colors duration-500">
                    <div class="bg-white h-1 rounded-full w-3/4 animate-pulse lg:group-hover:w-4/5 transition-all duration-500" style="animation-delay: 0.3s;"></div>
                  </div>
  
                  <!-- Testimonial Text -->
                  <p class="text-xs md:text-sm font-medium leading-5 lg:group-hover:text-white lg:group-hover:translate-x-1 transition-all duration-500 delay-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit 
                    amet sapien fringilla, mattis ligula consectetur, ultrices 
                    mauris.
                  </p>
                  
                  <!-- Floating icons -->
                  <div class="absolute top-2 right-2 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                    <svg class="w-5 h-5 text-white/50" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Right Column - Content -->
            <div class="animate-slide-up group rounded-3xl p-4 md:p-6 bg-[#1B1E23] order-2 lg:order-3 lg:hover:scale-105 transition-transform duration-500" style="animation-delay: 0.8s;">
              <div class="space-y-6 md:space-y-8 h-full flex flex-col lg:group-hover:bg-gradient-to-br lg:group-hover:from-gray-900 lg:group-hover:to-gray-800 transition-all duration-500">
                <!-- User Avatar -->
                <div class="flex justify-start lg:group-hover:translate-x-2 transition-transform duration-500">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face" 
                    alt="User" 
                    class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-4 border-slate-700 shadow-lg lg:group-hover:border-slate-500 lg:group-hover:scale-110 transition-all duration-500" 
                    style="animation-delay: 1s;"
                  />
                </div>
  
                <!-- Main Content -->
                <div class="space-y-3 flex-1">
                  <h2 class="text-base md:text-lg font-semibold leading-relaxed text-white lg:group-hover:text-blue-300 lg:group-hover:translate-x-1 transition-all duration-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </h2>
                  
                  <p class="text-slate-300 text-sm md:text-[15px] font-medium leading-5 md:leading-5 lg:group-hover:text-slate-200 lg:group-hover:translate-x-2 transition-all duration-500 delay-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. 
                    Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis 
                    ligula consectetur, ultrices mauris.  consectetur adipiscing elit. Ut et massa mi. 
                    Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis 
                    ligula consectetur, ultrices mauris.
                  </p>
                </div>
  
                <!-- Bottom Section -->
                <div class="flex items-center justify-between pt-4 border-t border-slate-700/50 lg:group-hover:border-slate-600 transition-colors duration-500">
                  <div class="lg:group-hover:translate-x-2 transition-transform duration-500">
                    <h3 class="font-semibold text-sm md:text-[15px] mb-1 text-white lg:group-hover:text-slate-200 transition-colors duration-500">Text title</h3>
                    <p class="text-slate-400 text-xs md:text-[14px] lg:group-hover:text-slate-300 transition-colors duration-500">Subtitle</p>
                  </div>
                  
                  <!-- Circular Icon -->
                   <div class="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
                </div>
                
                <!-- Glow Effect -->
                <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 lg:group-hover:opacity-100 lg:group-hover:animate-shine-slow transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Floating elements for visual interest -->
      <div class="absolute top-10 right-10 md:top-20 md:right-20 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full blur-xl animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-12 h-12 md:w-24 md:h-24 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl animate-float" style="animation-delay: 3s;"></div>
      <div class="absolute top-1/2 left-10 md:left-1/4 w-8 h-8 md:w-16 md:h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-float" style="animation-delay: 4s;"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReviewsTestimonialsPage'
  }
  </script>
  
  <style scoped>
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-spin-slow {
    animation: spin 8s linear infinite;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  /* Nouvelles animations pour les effets au survol */
  @keyframes pulse-glow {
    0%, 100% {
      border-color: rgba(250, 204, 21, 0.3);
    }
    50% {
      border-color: rgba(250, 204, 21, 0.6);
    }
  }
  
  @keyframes spin-fast {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes shine-slow {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  
  .lg\:group-hover\:animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
  
  .lg\:group-hover\:animate-spin-fast {
    animation: spin-fast 1s linear infinite;
  }
  
  .lg\:group-hover\:animate-shine-slow {
    animation: shine-slow 3s ease-in-out infinite;
  }
  
  /* Classes de délai pour animations séquentielles */
  .delay-100 {
    transition-delay: 100ms;
  }
  
  .delay-200 {
    transition-delay: 200ms;
  }
  
  /* Pour mobile, on réduit l'animation de flottement */
  @media (max-width: 768px) {
    .animate-float {
      animation: float 8s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-5px);
      }
    }
  }
  </style>