<template>
    <div :class="themeClasses" class="min-h-screen relative overflow-hidden transition-colors duration-500">
      <!-- Animated background elements (uniquement en mode dark) -->
      <div v-if="isDarkMode" class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-blob"></div>
        <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob-delay"></div>
        <div class="absolute bottom-1/4 left-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-blob-delay-2"></div>
        <canvas ref="threeCanvas" class="absolute inset-0 pointer-events-none"></canvas>
      </div>

      <!-- Gradient background pour light mode avec touches orange -->
      <div v-else class="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-white">
        <!-- Subtle orange blobs in light mode -->
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-blob"></div>
        <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-blob-delay"></div>
        <div class="absolute bottom-1/4 left-1/2 w-96 h-96 bg-orange-300/5 rounded-full blur-3xl animate-blob-delay-2"></div>
      </div>
  
      <!-- Bouton Toggle Theme Flottant et Déplaçable -->
      <div 
        ref="draggableButton"
        class="fixed z-50 cursor-grab active:cursor-grabbing select-none touch-none"
        :style="{
          top: buttonPosition.y + 'px',
          left: buttonPosition.x + 'px',
          transform: `scale(${isDragging ? 1.1 : 1})`
        }"
        @touchstart="startDrag"
        @mousedown="startDrag"
        @touchmove="handleDrag"
        @mousemove="handleDrag"
        @touchend="stopDrag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
      >
        <button 
          @click="toggleTheme"
          class="w-14 h-14 rounded-full backdrop-blur-lg border-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 group flex items-center justify-center"
          :class="isDarkMode 
            ? 'bg-slate-900/90 border-orange-500/50 hover:border-orange-400 shadow-orange-500/30' 
            : 'bg-white/95 border-orange-600/50 hover:border-orange-500 shadow-orange-400/30'"
          aria-label="Toggle theme"
        >
          <!-- Icône Sun (light mode) -->
          <svg 
            v-if="isDarkMode"
            class="w-7 h-7 transition-all duration-500 transform group-hover:rotate-180 group-active:rotate-360"
            :class="isDarkMode ? 'text-yellow-400' : 'text-orange-600'"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          
          <!-- Icône Moon (dark mode) -->
          <svg 
            v-else
            class="w-7 h-7 transition-all duration-500 transform group-hover:-rotate-45 group-active:rotate-45"
            :class="isDarkMode ? 'text-slate-300' : 'text-orange-700'"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          
          <!-- Ripple effect orange -->
          <span class="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span class="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
          </span>
        </button>
      </div>
  
      <div class="relative z-10">
        <!-- Navigation -->
        <div class="relative z-10">
          <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-6 border-b transition-all duration-500"
            :class="isDarkMode ? 'border-gray-800/50' : 'border-orange-200/50'">
            <div class="flex items-center gap-2 group">
              <div class="w-8 h-8 border-2 rounded-full flex items-center justify-center transition-all duration-500"
                :class="isDarkMode ? 'border-orange-500' : 'border-orange-600'">
                <div class="w-3 h-3 rounded-full transition-all duration-500"
                  :class="isDarkMode ? 'bg-orange-500' : 'bg-orange-600'"></div>
              </div>
              <span class="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500"
                :class="isDarkMode 
                  ? 'from-orange-500 to-orange-600' 
                  : 'from-orange-600 to-orange-700'">
                <a href="">TOEIC</a>
              </span>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center gap-8">
              <button class="transition-colors duration-300 text-lg"
                :class="isDarkMode 
                  ? 'text-gray-300 hover:text-orange-500' 
                  : 'text-gray-700 hover:text-orange-600'">
                TOEIC TRAINING
              </button>
              <button class="transition-colors duration-300 text-lg"
                :class="isDarkMode 
                  ? 'text-gray-300 hover:text-orange-500' 
                  : 'text-gray-700 hover:text-orange-600'">
                CAREER BOOST
              </button>
              <button class="transition-colors duration-300 text-lg"
                :class="isDarkMode 
                  ? 'text-gray-300 hover:text-orange-500' 
                  : 'text-gray-700 hover:text-orange-600'">
                TEST OPTION
              </button>
            </div>

            <!-- Mobile Menu Button -->
            <button @click="toggleMobileMenu" class="md:hidden p-2 rounded-lg transition-colors duration-300"
              :class="isDarkMode 
                ? 'hover:bg-gray-800/50' 
                : 'hover:bg-orange-100'">
              <svg v-if="!isMobileMenuOpen" class="w-6 h-6 transition-colors duration-300"
                :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg v-else class="w-6 h-6 transition-colors duration-300"
                :class="isDarkMode ? 'text-orange-500' : 'text-orange-600'"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <!-- Desktop Auth Buttons -->
            <div class="hidden md:flex items-center gap-3">
              <button class="px-4 py-2 border rounded-full text-sm font-medium transition-all duration-300"
                :class="isDarkMode 
                  ? 'border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-400' 
                  : 'border-orange-300 text-gray-700 hover:border-orange-600 hover:text-orange-600'">
                Sign in
              </button>
              <button class="px-4 py-2 text-white rounded-full text-sm font-medium transition-all duration-300"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' 
                  : 'bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800'">
                Sign up
              </button>
            </div>
          </nav>

          <!-- Mobile Menu -->
          <div v-if="isMobileMenuOpen" 
            class="md:hidden bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 animate-slide-down">
            <div class="max-w-7xl mx-auto px-4 py-6 space-y-4">
              <button class="w-full text-left px-4 py-3 text-gray-300 hover:text-orange-500 hover:bg-gray-800/50 rounded-lg transition-colors duration-300 text-lg">
                TOEIC TRAINING
              </button>
              <button class="w-full text-left px-4 py-3 text-gray-300 hover:text-orange-500 hover:bg-gray-800/50 rounded-lg transition-colors duration-300 text-lg">
                CAREER BOOST
              </button>
              <button class="w-full text-left px-4 py-3 text-gray-300 hover:text-orange-500 hover:bg-gray-800/50 rounded-lg transition-colors duration-300 text-lg">
                TEST OPTION
              </button>
              <div class="pt-4 border-t border-gray-800/50 space-y-3">
                <button class="w-full px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-orange-500 hover:text-orange-400 text-sm font-medium transition-all duration-300">
                  Sign in
                </button>
                <button class="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 text-sm font-medium transition-all duration-300">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Hero Section -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 pb-16 md:pb-32">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center animate-fade-in-down">
            <div class="space-y-6 md:space-y-8 text-center md:text-left">
              <h1 class="text-3xl md:text-5xl font-bold leading-tight transition-colors duration-500"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                More than a score.
                <br class="hidden md:block" />
                Your next career.
              </h1>
              <p class="text-base md:text-lg lg:text-xl max-w-xl leading-relaxed mx-auto md:mx-0 transition-colors duration-500"
                :class="isDarkMode ? 'text-slate-400' : 'text-gray-700'">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
              </p>
              <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 justify-center md:justify-start"> 
                <button class="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-orange-500 text-white text-sm md:text-base lg:text-[17px] font-medium rounded-lg hover:bg-orange-600 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  Get started
                </button>
                <button class="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-orange-500/20 text-orange-300 border border-orange-500/30 text-sm md:text-base lg:text-[17px] font-medium rounded-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
                  Learn more <span class="ml-2">→</span>
                </button>
              </div>
            </div>
  
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 animate-fade-in-right h-full">
              <!-- Training Card -->
              <div class="animate-float-slow backdrop-blur-xl rounded-2xl p-6 hover:border-orange-500 hover:scale-105 md:hover:scale-110 transition-all duration-300 h-full flex flex-col justify-end
                bg-[url(./assets/img/hero-training-img.png)] bg-cover bg-no-repeat overflow-hidden min-h-[200px]">
                <div class="ml-2">
                  <p class="text-lg md:text-[19px] font-semibold text-slate-200">Training</p>
                  <p class="text-sm md:text-[15px] font-normal text-orange-400">Text subtitle</p>
                </div>
              </div>
  
              <!-- Career Card -->
              <div class="animate-float-slow2 bg-white backdrop-blur-xl border border-slate-300 rounded-2xl p-6 hover:border-orange-500 hover:scale-105 md:hover:scale-110 transition-all duration-300 h-full flex flex-col justify-end
                bg-[url(./assets/img/hero-career-img.png)] bg-cover bg-no-repeat overflow-hidden min-h-[200px]">
                <div class="">
                  <p class="text-lg md:text-[19px] font-semibold text-slate-900">Career</p>
                  <p class="text-sm md:text-[15px] font-normal text-orange-500">Text subtitle</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Interface Section -->
        <section :class="isDarkMode ? 'border-t border-slate-800/50' : 'border-t border-gray-300'">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div class="space-y-4 md:space-y-6 animate-fade-in-left text-center md:text-left">
                <h2 class="text-2xl md:text-5xl font-black leading-tight transition-colors duration-500"
                  :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                  One interface.
                  <br />
                  Three steps to success
                </h2>
                <p class="text-sm md:text-lg max-w-xl mx-auto md:mx-0 transition-colors duration-500"
                  :class="isDarkMode ? 'text-slate-400' : 'text-gray-600'">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                </p>
                <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
                  <button class="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-orange-500 text-white text-sm md:text-base lg:text-[17px] font-medium rounded-lg hover:bg-orange-600 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                    Text button
                  </button>
                  <button class="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-orange-500/20 text-orange-300 border border-orange-500/30 text-sm md:text-base lg:text-[17px] font-medium rounded-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
                    Text button<span class="ml-2">→</span>
                  </button>
                </div>
              </div>
    
              <!-- Dashboard Mockup -->
              <div class="animate-fade-in-right h-[50vh] md:h-[45vh] w-full overflow-hidden transition-all duration-300 border-2 border-transparent rounded-2xl group">
                <div class="w-full h-full bg-[url(./assets/img/admin-dashboard-panel-1.png)] bg-center bg-contain bg-no-repeat group-hover:scale-100 md:group-hover:scale-125 transition-transform duration-500"></div>
              </div>
            </div>
    
            <!-- Steps Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-20">
              <div v-for="step in 3" :key="step" class="animate-card-appear rounded-2xl overflow-hidden">
                <div class="backdrop-blur-xl border rounded-2xl p-4 md:p-6 hover:border-orange-500 hover:scale-105 transition-all duration-500 h-auto md:h-[200px] overflow-hidden flex flex-col items-center text-center max-w-sm mx-auto"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/30' 
                    : 'bg-gradient-to-br from-gray-100/50 to-gray-200/50 border-gray-300'">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold mb-3">{{ step }}</div>
                  <h3 class="text-base md:text-lg font-bold mb-2 md:mb-3 transition-colors duration-500"
                    :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p class="text-xs md:text-sm leading-relaxed transition-colors duration-500"
                    :class="isDarkMode ? 'text-slate-400' : 'text-gray-600'">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Power of Two Worlds -->
        <section :class="isDarkMode ? 'border-t border-slate-800/50' : 'border-t border-gray-300'">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div class="mb-8 md:mb-16 space-y-4 text-center">
              <h1 class="text-2xl md:text-5xl font-black animate-fade-in-down transition-colors duration-500"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                The power of our two worlds
              </h1>
              <p class="text-sm md:text-lg leading-relaxed max-w-2xl mx-auto animate-slide-up transition-colors duration-500"
                :class="isDarkMode ? 'text-slate-300' : 'text-gray-700'"
                style="animation-delay: 0.2s;">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam
              </p>
            </div>
  
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
              <!-- Mockups Grid -->
              <div class="animate-fade-in-left animate-slow-bounce h-full w-auto">
                <div class="h-[300px] md:h-full w-full backdrop-blur-xl border rounded-2xl overflow-hidden p-4 md:p-8 hover:scale-105 hover:border-orange-500 transition-all duration-500
                  bg-[url(./assets/img/4927380_2585277-1.png)] bg-center bg-contain bg-no-repeat"
                  :class="isDarkMode ? 'border-slate-700/50' : 'border-gray-300'">
                </div> 
              </div>
  
              <!-- Features List -->
              <div class="animate-slide-up border rounded-2xl overflow-hidden p-4 md:p-8 hover:border-orange-500 transition-all duration-300"
                :class="isDarkMode ? 'border-slate-700/50' : 'border-gray-300'"
                style="animation-delay: 0.6s;">
                <!-- Features header -->
                <div class="flex items-center justify-between mb-6 md:mb-8">
                  <h2 class="text-lg md:text-2xl font-bold transition-colors duration-500"
                    :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                    Features
                  </h2>
                  <div class="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center">
                    <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
  
                <!-- Features list -->
                <div class="space-y-4 md:space-y-6">
                  <!-- Feature 1 to 4 -->
                  <div v-for="(item, index) in 4" :key="index" class="flex items-center justify-between p-3 md:p-4 rounded-xl border hover:border-orange-500 transition-all duration-300 transform hover:scale-105 animate-slide-up"
                    :class="isDarkMode 
                      ? 'bg-slate-800/50 border-slate-700/50' 
                      : 'bg-gray-100/50 border-gray-300'"
                    style="animation-delay: 0.8s;">
                    <div class="flex items-center space-x-3 md:space-x-4">
                      <img 
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face" 
                        alt="Sarah Jenkins" 
                        class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 class="font-semibold text-sm md:text-base transition-colors duration-500"
                          :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                          Sarah Jenkins
                        </h3>
                        <p class="text-xs md:text-sm transition-colors duration-500"
                          :class="isDarkMode ? 'text-slate-400' : 'text-gray-600'">
                          To thirst out a deepen content conversation
                        </p>
                      </div>
                    </div>
                    <div class="bg-orange-500/20 text-orange-400 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium border border-orange-500/30">
                      $9172
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Rating and Testimonials -->
        <ReviewsTestimonialsPage />
        
        <!-- Pricing Section -->
        <PricingPlans />
  
        <!-- FAQ Section -->
        <div :class="isDarkMode ? 'bg-[#0a0e1a]' : 'bg-gray-50'">
          <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-t"
            :class="isDarkMode ? 'border-slate-800/50' : 'border-gray-300'">
            <div class="text-center mb-8 md:mb-12 animate-fade-in-down">
              <h2 class="text-2xl md:text-[50px] font-semibold mb-4 transition-colors duration-500"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                Your questions. our answers
              </h2>
              <p class="text-sm md:text-lg transition-colors duration-500"
                :class="isDarkMode ? 'text-slate-400' : 'text-gray-600'">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
    
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <div v-for="faq in 2" :key="faq" class="animate-card-appear" :style="{ animationDelay: `${faq * 0.1}s` }">
                <button class="w-full backdrop-blur-xl border rounded-2xl p-4 md:p-8 hover:border-orange-500 transition-all duration-500 text-left group space-y-2 md:space-y-3"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50' 
                    : 'bg-gradient-to-br from-gray-100/50 to-gray-200/50 border-gray-300'">
                  <h3 class="text-base md:text-lg font-semibold text-orange-400 group-hover:text-orange-300 transition-colors duration-300">Question?</h3>
                  <p class="font-medium text-sm md:text-[17px] mt-2 md:mt-3 transition-colors duration-500"
                    :class="isDarkMode ? 'text-slate-300' : 'text-gray-800'">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  </p>
                  <div class="flex items-center justify-end">
                    <svg class="w-7 h-7 md:w-9 md:h-9 text-orange-500 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </section>
        </div>
  
        <!-- Subscription Section -->
        <ClassicSubscription />
        
        <!-- Footer -->
        <Footer />
      </div>
    </div>
  </template>
  
  <script>
import ReviewsTestimonialsPage from '../components/ReviewsTestimonialsPage.vue';
import PricingPlans from '../components/PricingPlans.vue';
import ClassicSubscription from '../components/ClassicSubscription.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    ReviewsTestimonialsPage,
    PricingPlans,
    ClassicSubscription,
    Footer
  },
  data() {
    return {
      isMobileMenuOpen: false,
      isDarkMode: true,
      isDragging: false,
      dragStartX: 0,
      dragStartY: 0,
      buttonPosition: {
        x: 20,
        y: 20
      },
      showMobileHint: false
    }
  },
  computed: {
    themeClasses() {
      return this.isDarkMode 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
        : 'bg-gradient-to-br from-white via-orange-50/30 to-white';
    },
    isMobile() {
      return window.innerWidth < 768;
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      // Sauvegarder la préférence dans localStorage
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    },
    startDrag(e) {
      e.preventDefault();
      this.isDragging = true;
      
      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
      
      this.dragStartX = clientX - this.buttonPosition.x;
      this.dragStartY = clientY - this.buttonPosition.y;
      
      // Cacher l'indication après le premier drag
      this.showMobileHint = false;
      localStorage.setItem('themeButtonHintShown', 'true');
    },
    handleDrag(e) {
      if (!this.isDragging) return;
      
      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
      
      // Calculer la nouvelle position avec limites
      let newX = clientX - this.dragStartX;
      let newY = clientY - this.dragStartY;
      
      // Limites de l'écran
      const maxX = window.innerWidth - 56; // 56px = w-14
      const maxY = window.innerHeight - 56;
      
      newX = Math.max(10, Math.min(newX, maxX));
      newY = Math.max(10, Math.min(newY, maxY));
      
      this.buttonPosition.x = newX;
      this.buttonPosition.y = newY;
      
      // Sauvegarder la position
      localStorage.setItem('themeButtonPosition', JSON.stringify(this.buttonPosition));
    },
    stopDrag() {
      this.isDragging = false;
    }
  },
  mounted() {
    // Récupérer la préférence de thème depuis localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      // Vérifier la préférence système
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkMode = prefersDark;
    }
    
    // Récupérer la position sauvegardée
    const savedPosition = localStorage.getItem('themeButtonPosition');
    if (savedPosition) {
      this.buttonPosition = JSON.parse(savedPosition);
    }
    
    // Vérifier si c'est la première fois sur mobile
    const isMobile = window.innerWidth < 768;
    const hintShown = localStorage.getItem('themeButtonHintShown');
    if (isMobile && !hintShown) {
      this.showMobileHint = true;
      // Cacher l'indication après 5 secondes
      setTimeout(() => {
        this.showMobileHint = false;
        localStorage.setItem('themeButtonHintShown', 'true');
      }, 5000);
    }
    
    // Empêcher le menu contextuel sur le bouton
    this.$nextTick(() => {
      const button = this.$refs.draggableButton;
      if (button) {
        button.addEventListener('contextmenu', (e) => e.preventDefault());
      }
    });
  }
}
</script>

<style scoped>
/* ===============================
   Animations de flottement
================================ */
@keyframes float-slow {
  0%, 100% {
    margin-top: 0px;
  }
  50% {
    margin-top: -15px;
  }
}

.animate-float-slow {
  animation: float-slow 2s ease-in-out infinite;
}

.animate-float-slow2 {
  animation: float-slow 3s ease-in-out infinite;
}

/* ===============================
   Animations de base (fade)
================================ */
@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translate3d(-50px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fade-in-right {
  0% {
    opacity: 0;
    transform: translate3d(50px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

/* ===============================
   Animation cartes
================================ */

@keyframes card-appear {
  0% {
    opacity: 0;
    transform: translate3d(0, 30px, 0) scale(0.97);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
}

/* ===============================
   Animations blobs (background)
================================ */

@keyframes blob {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  33% {
    transform: translate3d(30px, -50px, 0) scale(1.1);
  }
  66% {
    transform: translate3d(-20px, 20px, 0) scale(0.9);
  }
}

@keyframes blob-delay {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  33% {
    transform: translate3d(-30px, 50px, 0) scale(0.9);
  }
  66% {
    transform: translate3d(20px, -20px, 0) scale(1.1);
  }
}

@keyframes blob-delay-2 {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  33% {
    transform: translate3d(20px, 20px, 0) scale(1.05);
  }
  66% {
    transform: translate3d(-30px, -30px, 0) scale(0.95);
  }
}

@keyframes slow-bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===============================
   Classes utilitaires
================================ */

.animate-fade-in-down {
  animation: fade-in-down 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.15s both;
}

.animate-fade-in {
  animation: fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.animate-card-appear {
  animation: card-appear 0.7s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-blob {
  animation: blob 8s ease-in-out infinite;
}

.animate-blob-delay {
  animation: blob-delay 8s ease-in-out infinite 0.3s;
}

.animate-blob-delay-2 {
  animation: blob-delay-2 8s ease-in-out infinite 0.6s;
}

.animate-slow-bounce {
  animation: slow-bounce 3s infinite;
}

.animate-slide-down {
  animation: slide-down 0.3s cubic-bezier(0.4, 0, 0.2, 1) both;
}

/* ===============================
   Optimisation performances
================================ */

.animate-fade-in-down,
.animate-fade-in-left,
.animate-fade-in-right,
.animate-fade-in,
.animate-card-appear,
.animate-float,
.animate-blob,
.animate-blob-delay,
.animate-blob-delay-2,
.animate-slow-bounce,
.animate-slide-down,
.animate-float-slow,
.animate-float-slow2 {
  will-change: transform, opacity;
}
</style>