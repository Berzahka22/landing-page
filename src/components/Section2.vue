<template>
  <section 
    class="py-12 sm:py-16 md:py-20 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 lg:px-8"
    :style="{ backgroundColor: 'var(--panel-bg)', color: 'var(--text)' }"
  >
    <div class="max-w-7xl mx-auto w-full max-w-[78%] mx-auto">
      
      <!-- Hero Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
        
        <!-- Left Column - Text Content -->
        <div class="flex flex-col justify-center gap-4 sm:gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out order-2 lg:order-1">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 sm:mb-4">
            Drive Success...
            <br/>
            <span class="text-[#ff6600] inline-block mt-1 sm:mt-2">thry Ineeam</span>
          </h1>
          
          <p 
            class="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-md leading-relaxed" 
            :style="{ color: 'var(--muted)' }"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
          </p>
          
          <!-- Buttons with enhanced hover animations -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <!-- Primary Button - Enhanced hover effect -->
            <button 
              class="group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold shadow-lg overflow-hidden"
              :style="{ backgroundColor: 'var(--accent)', color: '#fff' }"
            >
              <span class="relative z-10 block transform transition-transform duration-300 group-hover:scale-105">Get Started</span>
              
              <!-- Shine effect - smoother -->
              <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-in-out"></span>
              
              <!-- Gradient sweep - smoother animation -->
              <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></span>
              
              <!-- Pulse effect on hover -->
              <span class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span class="absolute inset-0 animate-pulse-slow" :style="{ backgroundColor: 'rgba(255,255,255,0.1)' }"></span>
              </span>
            </button>
            
            <!-- Secondary Button - Enhanced hover effect -->
            <button 
              class="group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold border overflow-hidden"
              :style="{ borderColor: 'var(--border)', color: 'var(--text)' }"
            >
              <span class="relative z-10 block transform transition-transform duration-300 group-hover:scale-105">Learn More</span>
              
              <!-- Background glow - smoother -->
              <span class="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out"></span>
              
              <!-- Underline animation - smoother -->
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></span>
              
              <!-- Ripple effect on hover -->
              <span class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span class="absolute inset-0 animate-ripple-slow" :style="{ backgroundColor: 'rgba(255,102,0,0.05)' }"></span>
              </span>
            </button>
          </div>
        </div>

        <!-- Right Column - Image with enhanced hover -->
        <div class="relative group animate-in fade-in zoom-in-95 duration-1000 delay-200 order-1 lg:order-2">
          <!-- Glow effect - smoother -->
          <div class="absolute -inset-1 bg-gradient-to-r from-[#ff6600]/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out blur-md"></div>
          
          <div 
            class="relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-3xl"
            :style="{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }"
          >
            <img 
              src="/assets/img/dashboardb.png" 
              alt="Dashboard" 
              class="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            
            <!-- Overlay effect on hover -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>
          </div>
        </div>
      </div> 

      <!-- Benefits Section -->
      <div class="animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
        <h4 class="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
          <span class="w-6 sm:w-8 h-[2px] bg-[#ff6600]" :style="{ backgroundColor: 'var(--accent)' }"></span>
          Benefits
        </h4>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          <div 
            v-for="(item, index) in benefits" 
            :key="index" 
            class="group relative rounded-2xl overflow-hidden h-48 sm:h-52 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl"
            :style="{ 
              border: '1px solid var(--border)', 
              backgroundColor: 'var(--card-bg)'
            }"
          >
            <!-- Background Image with smoother transition -->
            <div 
              class="absolute inset-0 bg-center bg-cover opacity-40 group-hover:opacity-60 transition-all duration-700 ease-out group-hover:scale-110"
              :style="{ backgroundImage: `url(${item.image})`, willChange: 'transform, opacity' }"
            ></div>

            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#080B14] via-[#080B14]/40 to-transparent p-4 sm:p-6 flex flex-col justify-end">
              
              <!-- Content with smoother hover animation -->
              <div class="transform transition-all duration-500 ease-out group-hover:translate-y-[-4px]">
                <h5 class="text-base sm:text-lg font-semibold mb-2 text-white">{{ item.title }}</h5>
                <p 
                  class="text-xs sm:text-sm leading-relaxed transition-colors duration-500 ease-out line-clamp-3" 
                  :style="{ color: 'var(--muted)' }"
                >
                  {{ item.description }}
                </p>
              </div>
            </div>

            <!-- Hover Glow Effect with smoother transition -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none">
              <div class="absolute inset-0 bg-gradient-to-t from-[#ff6600]/20 to-transparent"></div>
            </div>
            
            <!-- Border glow on hover -->
            <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none" 
                 :style="{ boxShadow: 'inset 0 0 20px rgba(255,102,0,0.3)' }">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Benefits data for better maintainability
const benefits = [
  {
    title: "Performance",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi.",
    image: "/assets/img/dashboard2.png"
  },
  {
    title: "Efficiency",
    description: "Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.",
    image: "/assets/img/dashboard2.png"
  },
  {
    title: "Scalability",
    description: "Maecenas ut et massa mi aliquam in hendrerit urna consectetur.",
    image: "/assets/img/dashboard2.png"
  },
  {
    title: "Innovation",
    description: "Mattis ligula consectetur ultrices mauris. Ut et massa mi.",
    image: "/assets/img/dashboard2.png"
  }
]
</script>

<style scoped>
/* Base responsive styles */
* {
  box-sizing: border-box;
}

/* Animation keyframes - optimized */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in-from-bottom {
  from { 
    opacity: 0;
    transform: translateY(40px); 
  }
  to { 
    opacity: 1;
    transform: translateY(0); 
  }
}

@keyframes zoom-in {
  from { 
    opacity: 0;
    transform: scale(0.95); 
  }
  to { 
    opacity: 1;
    transform: scale(1); 
  }
}

/* New smooth animations for hover effects */
@keyframes pulse-slow {
  0%, 100% { opacity: 0; }
  50% { opacity: 0.1; }
}

@keyframes ripple-slow {
  0% { transform: scale(0.8); opacity: 0; }
  50% { transform: scale(1.2); opacity: 0.1; }
  100% { transform: scale(0.8); opacity: 0; }
}

@keyframes shine {
  0% { left: -100%; }
  20% { left: 100%; }
  100% { left: 100%; }
}

/* Animation classes */
.animate-in {
  animation-fill-mode: forwards;
  opacity: 0;
}

.fade-in { 
  animation: fade-in 1s ease-out forwards; 
}

.slide-in-from-bottom-8 { 
  animation: slide-in-from-bottom 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards; 
}

.slide-in-from-bottom-10 { 
  animation: slide-in-from-bottom 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; 
}

.zoom-in-95 { 
  animation: zoom-in 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards; 
}

/* New hover animation classes */
.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

.animate-ripple-slow {
  animation: ripple-slow 3s ease-in-out infinite;
}

/* Responsive typography */
h1 {
  letter-spacing: -0.02em;
}

/* Button styles - optimized for smoothness */
button {
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;
}

/* Card hover effects - optimized */
.group {
  will-change: transform, box-shadow;
}

.group:hover {
  transform: translateY(-4px);
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

/* Image optimization - smoother transitions */
img {
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  will-change: transform;
  transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
}

/* Smooth transitions for all interactive elements */
.group * {
  transition-property: transform, opacity, background-color, box-shadow;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
}

/* Responsive breakpoints */
@media (max-width: 640px) {
  .grid {
    gap: 1rem;
  }
  
  h1 {
    font-size: 2.25rem;
    line-height: 1.2;
  }
  
  .benefits-grid {
    gap: 0.75rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .grid {
    gap: 1.5rem;
  }
  
  h1 {
    font-size: 3.5rem;
  }
}

/* Touch device optimizations */
@media (hover: hover) {
  .group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
    transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }
}

@media (hover: none) {
  .group:active {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }
  
  .group:active .group-hover\:scale-110 {
    transform: scale(1.05);
    transition: transform 0.2s ease;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Focus styles for accessibility */
button:focus-visible {
  outline: 2px solid #ff6600;
  outline-offset: 2px;
  transition: outline 0.2s ease;
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
  background: #ff6600;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #ff8533;
}

/* Text truncation for benefits cards */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Improved touch targets for mobile */
@media (max-width: 768px) {
  button {
    min-height: 44px;
    padding: 0.75rem 1.5rem;
  }
  
  .cursor-pointer {
    min-height: 44px;
  }
}

/* Landscape orientation */
@media (max-width: 896px) and (orientation: landscape) {
  .min-h-screen {
    min-height: auto;
    padding: 2rem;
  }
  
  .grid {
    gap: 1rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .group:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
}

/* Smooth transitions */
* {
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Hardware acceleration for smoother animations */
.group, button, img {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
}

/* Optimize animations for GPU */
.transform-gpu {
  transform: translateZ(0);
  will-change: transform;
}
</style>