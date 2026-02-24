<template>
  <section 
    class="min-h-screen p-4 sm:p-6 md:p-8 lg:p-16 flex flex-col lg:flex-row items-stretch justify-between gap-6 md:gap-8 lg:gap-12"
    :style="{ backgroundColor: 'var(--panel-bg)', color: 'var(--text)' }"
  >
    <div class="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-6 md:gap-8 lg:gap-12 max-w-[80%] mx-auto">
      
      <!-- Left Column - Text Content -->
      <div class="w-full lg:w-1/2 flex flex-col justify-center animate-in fade-in slide-in-from-left-8 duration-1000 order-2 lg:order-1">
        <div class="flex items-center gap-2 mb-4 md:mb-6 lg:mb-8">
          <div class="relative">
            <div class="w-4 h-4 md:w-5 md:h-5 border-2 border-blue-400 rounded-full animate-ping absolute opacity-20"></div>
            <div class="w-4 h-4 md:w-5 md:h-5 border-2 border-blue-400 rounded-full relative"></div>
          </div>
          <span class="font-bold tracking-widest uppercase text-xs md:text-sm text-blue-400">TOEIC</span>
        </div>

        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
          Trecare With <br class="hidden sm:block"/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">TOEIC Training...</span>
        </h1>
        
        <p class="text-sm sm:text-base md:text-lg mb-6 md:mb-8 lg:mb-10 leading-relaxed" :style="{ color: 'var(--muted)' }">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. 
          Aliquam in hendrerit urna.
        </p>

        <!-- Buttons with professional hover effects -->
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
          <!-- Primary Button -->
          <button 
            class="group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 shadow-lg overflow-hidden"
            :style="{ backgroundColor: '#60A5FA', color: '#fff' }"
          >
            <span class="relative z-10 flex items-center justify-center gap-2">
              Text button
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </span>
            <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>
          </button>

          <!-- Secondary Button -->
          <button 
            class="group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 border overflow-hidden"
            :style="{ borderColor: '#60A5FA', color: 'var(--text)' }"
          >
            <span class="relative z-10 flex items-center justify-center gap-2">
              Text button
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </span>
            <span class="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
        </div>

        <!-- Decorative Image - CHEMIN CORRIGÉ -->
        <div class="mt-10 sm:mt-16 md:mt-20 relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-[300px] lg:max-w-[360px] mx-auto lg:mx-0">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          
          <img 
            src="/assets/img/cube.png" 
            alt="Decorative" 
            class="w-full h-auto relative transition-all duration-500 hover:scale-110 hover:rotate-6 transform cursor-pointer" 
            loading="lazy"
          />
        </div>
      </div>

      <!-- Right Column - Card -->
      <div 
        class="w-full lg:w-1/2 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col hover:border-opacity-80 transition-all duration-700 group shadow-xl hover:shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000 order-1 lg:order-2"
        :style="{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)', color: 'var(--text)' }"
      >
        
        <!-- Card Header -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6 md:mb-8">
          <span class="text-xs uppercase tracking-widest" :style="{ color: 'var(--muted)' }">Featured Module</span>
          
          <!-- Card Button -->
          <button 
            class="group relative px-6 sm:px-8 py-2 rounded-lg font-medium transition-all duration-300 border overflow-hidden text-sm sm:text-base"
            :style="{ borderColor: 'var(--border)', color: 'var(--text)' }"
          >
            <span class="relative z-10 flex items-center justify-center gap-2">
              Text button
              <svg class="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </span>
            <span class="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span class="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>
          </button>      
        </div>
        
        <!-- Card Image - CHEMIN CORRIGÉ -->
        <div class="relative rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6 md:mb-8 flex-grow shadow-inner aspect-video sm:aspect-auto sm:h-auto" :style="{ backgroundColor: 'transparent' }">
          <img 
            src="/assets/img/file.png" 
            alt="Meeting" 
            class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            loading="lazy"
          />
          <div class="absolute inset-0" :style="{ background: 'linear-gradient(to top, var(--card-bg), transparent)', opacity: 0 }"></div>
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" :style="{ backgroundColor: 'var(--accent)', opacity: 0.06 }"></div>
        </div>

        <!-- Card Footer -->
        <div class="mt-auto"> 
          <div class="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
            <div class="w-6 h-6 sm:w-8 sm:h-8 border border-orange-500 rounded-full flex items-center justify-center text-xs sm:text-sm text-orange-500 font-bold group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 hover:scale-110 cursor-pointer">×</div>
            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">Interview Preparation</h2>
          </div>

          <p class="text-xs sm:text-sm leading-relaxed max-w-md" :style="{ color: 'var(--muted)' }">
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 
            Maecenas ut et massa mi aliquam in hendrerit urna.
          </p>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
/* Base responsive styles */
* {
  box-sizing: border-box;
}

.animate-in {
  animation-fill-mode: forwards;
}

/* Keyframes */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in-left {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slide-in-right {
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(1.05); }
}

@keyframes button-pulse {
  0% { box-shadow: 0 0 0 0 rgba(96, 165, 250, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(96, 165, 250, 0); }
  100% { box-shadow: 0 0 0 0 rgba(96, 165, 250, 0); }
}

/* Animation classes */
.fade-in { animation: fade-in 1.2s ease-out; }
.slide-in-from-left-8 { animation: slide-in-left 1s ease-out; }
.slide-in-from-right-8 { animation: slide-in-right 1s ease-out; }

/* Button styles */
.btn {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn:active::before {
  width: 300px;
  height: 300px;
}

/* Hover effects for buttons */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

/* Mobile-first responsive design */
@media (max-width: 640px) {
  .min-h-screen {
    min-height: 100vh;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  
  h1 {
    font-size: 2rem;
    line-height: 1.2;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
}

/* Tablet adjustments */
@media (min-width: 641px) and (max-width: 1024px) {
  h1 {
    font-size: 3rem;
  }
  
  .flex-col.md\:flex-row {
    flex-direction: column;
  }
}

/* Landscape orientation on mobile */
@media (max-width: 896px) and (orientation: landscape) {
  .min-h-screen {
    min-height: auto;
    padding: 2rem;
  }
  
  .flex-col.lg\:flex-row {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .w-full.lg\:w-1\/2 {
    width: 50%;
  }
}

/* High-DPI screens */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  img {
    image-rendering: -webkit-optimize-contrast;
  }
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Improved touch targets for mobile */
@media (max-width: 768px) {
  button {
    min-height: 44px;
    min-width: 44px;
  }
  
  .cursor-pointer {
    min-height: 44px;
    min-width: 44px;
  }
}

/* Loading animation for images */
img {
  opacity: 1;
  transition: opacity 0.3s ease;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(96, 165, 250, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(96, 165, 250, 0.7);
}

/* Focus styles for accessibility */
button:focus-visible {
  outline: 2px solid #60A5FA;
  outline-offset: 2px;
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Professional hover effects */
button {
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
}

/* Ripple effect */
button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
}

button:focus:not(:active)::after {
  animation: ripple 1s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 0.5;
  }
  20% {
    transform: scale(25, 25);
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    transform: scale(40, 40);
  }
}

/* Pulse animation for decorative elements */
.animate-pulse-slow {
  animation: pulse-glow 3s ease-in-out infinite;
}

/* Image hover effects */
img {
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
}

/* Card hover effect */
.group:hover {
  transform: translateY(-4px);
}

/* Loading skeleton animation */
@keyframes loading {
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
}

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: loading 1.5s infinite;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .skeleton {
    background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  }
}
</style>