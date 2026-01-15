<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-blob"></div>
        <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob-delay"></div>
        <div class="absolute bottom-1/4 left-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-blob-delay-2"></div>
        <canvas ref="threeCanvas" class="absolute inset-0 pointer-events-none"></canvas>
      </div>
  
      <div class="relative z-10">
        <!-- Navigation -->
        <div class="relative z-10">
          <!-- Navigation -->
          <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-6 border-b border-gray-800/50">
            <div class="flex items-center gap-2 group">
              <div class="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center">
                <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
              <span class="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                <a href="">TOEIC</a>
              </span>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center gap-8">
              <button class="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-lg">TOEIC TRAINING</button>
              <button class="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-lg">CAREER BOOST</button>
              <button class="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-lg">TEST OPTION</button>
            </div>

            <!-- Mobile Menu Button -->
            <button @click="toggleMobileMenu" class="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-300">
              <svg v-if="!isMobileMenuOpen" class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg v-else class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <!-- Desktop Auth Buttons -->
            <div class="hidden md:flex items-center gap-3">
              <button class="px-4 py-2 border border-gray-600 text-gray-300 rounded-full hover:border-orange-500 hover:text-orange-400 text-sm font-medium transition-all duration-300">
                Sign in
              </button>
              <button class="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full hover:from-orange-600 hover:to-orange-700 text-sm font-medium transition-all duration-300">
                Sign up
              </button>
            </div>
          </nav>

          <!-- Mobile Menu -->
          <div v-if="isMobileMenuOpen" class="md:hidden bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 animate-slide-down">
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
              <h1 class="text-3xl md:text-5xl font-bold leading-tight text-white">
                More than a score.
                <br class="hidden md:block" />
                Your next career.
              </h1>
              <p class="text-base md:text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed mx-auto md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
              </p>
              <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 justify-center md:justify-start"> 
                <!-- Bouton réduit sur mobile -->
                <button class="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-orange-500 text-white text-sm md:text-base lg:text-[17px] font-medium rounded-lg hover:bg-orange-600 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  Get started
                </button>
                <!-- Bouton réduit sur mobile -->
                <button class="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-orange-500/20 text-orange-300 border border-orange-500/30 text-sm md:text-base lg:text-[17px] font-medium rounded-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
                  Learn more <span class="ml-2">→</span>
                </button>
              </div>
            </div>
  
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 animate-fade-in-right h-full">
              <!-- Training Card -->
              <div class="animate-float backdrop-blur-xl rounded-2xl p-6 hover:border-orange-500 hover:scale-105 md:hover:scale-110 transition-all duration-300 h-full flex flex-col justify-end
                bg-[url(./assets/img/hero-training-img.png)] bg-cover bg-no-repeat overflow-hidden min-h-[200px]">
                <div class="ml-2">
                  <p class="text-lg md:text-[19px] font-semibold text-slate-200">Training</p>
                  <p class="text-sm md:text-[15px] font-normal text-orange-400">Text subtitle</p>
                </div>
              </div>
  
              <!-- Career Card -->
              <div class="animate-float bg-white backdrop-blur-xl border border-slate-300 rounded-2xl p-6 hover:border-orange-500 hover:scale-105 md:hover:scale-110 transition-all duration-300 h-full flex flex-col justify-end
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
        <section class="border-t border-slate-800/50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div class="space-y-4 md:space-y-6 animate-fade-in-left text-center md:text-left">
                <h2 class="text-2xl md:text-5xl font-black leading-tight text-white">
                  One interface.
                  <br />
                  Three steps to success
                </h2>
                <p class="text-sm md:text-lg text-slate-400 max-w-xl mx-auto md:mx-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
                </p>
                <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
                  <!-- Bouton réduit sur mobile -->
                  <button class="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-orange-500 text-white text-sm md:text-base lg:text-[17px] font-medium rounded-lg hover:bg-orange-600 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                    Text button
                  </button>
                  <!-- Bouton réduit sur mobile -->
                  <button class="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-orange-500/20 text-orange-300 border border-orange-500/30 text-sm md:text-base lg:text-[17px] font-medium rounded-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
                    Text button<span class="ml-2">→</span>
                  </button>
                </div>
              </div>
    
              <!-- Dashboard Mockup -->
              <div class="animate-fade-in-right h-[50vh] md:h-[45vh] hover:h-[55vh] md:hover:h-[50vh] w-full bg-[url(./assets/img/admin-dashboard-panel-1.png)] bg-cover bg-no-repeat overflow-hidden hover:scale-125 md:hover:scale-130 transition-all duration-300 border-2 border-transparent rounded-2xl">
              </div>
            </div>
    
            <!-- Steps Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-20">
              <div v-for="step in 3" :key="step" class="animate-card-appear rounded-2xl overflow-hidden">
                <div class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-4 md:p-6 hover:border-orange-500 hover:scale-105 transition-all duration-500 h-auto md:h-[200px] overflow-hidden flex flex-col items-center text-center max-w-sm mx-auto" :class="step % 2 ? 'bg-orange-950/30' : ''">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold mb-3">{{ step }}</div>
                  <h3 class="text-base md:text-lg font-bold text-white mb-2 md:mb-3">Lorem ipsum dolor sit amet</h3>
                  <p class="text-slate-400 text-xs md:text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Power of Two Worlds -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-t border-slate-800/50">
          <div class="mb-8 md:mb-16 space-y-4 text-center md:text-left">
            <h1 class="text-2xl md:text-5xl font-black animate-fade-in-down text-white">
              The power of our two worlds
            </h1>
            <p class="text-sm md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto md:mx-0 animate-slide-up" style="animation-delay: 0.2s;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam
            </p>
          </div>
  
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
            <!-- Mockups Grid -->
            <div class="animate-fade-in-left animate-slow-bounce h-full w-auto">
              <div class="h-[300px] md:h-full w-full backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden p-4 md:p-8 hover:scale-105 hover:border-orange-500 transition-all duration-500
                bg-[url(./assets/img/4927380_2585277-1.png)] bg-center bg-contain bg-no-repeat">
              </div> 
            </div>
  
            <!-- Features List -->
            <div class="animate-slide-up border border-slate-700/50 rounded-2xl overflow-hidden p-4 md:p-8 hover:border-orange-500 transition-all duration-300" style="animation-delay: 0.6s;">
              <!-- Features header -->
              <div class="flex items-center justify-between mb-6 md:mb-8">
                <h2 class="text-lg md:text-2xl font-bold text-white">Features</h2>
                <div class="w-8 h-8 border-2 border-orange-500 rounded-full flex items-center justify-center">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                </div>
              </div>
  
              <!-- Features list -->
              <div class="space-y-4 md:space-y-6">
                <!-- Feature 1 to 4 -->
                <div v-for="(item, index) in 4" :key="index" class="flex items-center justify-between p-3 md:p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-orange-500 transition-all duration-300 transform hover:scale-105 animate-slide-up" style="animation-delay: 0.8s;">
                  <div class="flex items-center space-x-3 md:space-x-4">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face" 
                      alt="Sarah Jenkins" 
                      class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 class="text-white font-semibold text-sm md:text-base">Sarah Jenkins</h3>
                      <p class="text-slate-400 text-xs md:text-sm">To thirst out a deepen content conversation</p>
                    </div>
                  </div>
                  <div class="bg-orange-500/20 text-orange-400 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium border border-orange-500/30">
                    $9172
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
        <div class="bg-[#0a0e1a]">
          <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-t border-slate-800/50">
            <div class="text-center mb-8 md:mb-12 animate-fade-in-down">
              <h2 class="text-2xl md:text-[50px] font-semibold mb-4 text-white">Your questions. our answers</h2>
              <p class="text-slate-400 text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
    
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <div v-for="faq in 2" :key="faq" class="animate-card-appear" :style="{ animationDelay: `${faq * 0.1}s` }">
                <button class="w-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 md:p-8 hover:border-orange-500 transition-all duration-500 text-left group space-y-2 md:space-y-3">
                  <h3 class="text-base md:text-lg font-semibold text-orange-400 group-hover:text-orange-300 transition-colors duration-300">Question?</h3>
                  <p class="text-slate-300 font-medium text-sm md:text-[17px] mt-2 md:mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
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
      isMobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }
}
</script>

<style scoped>
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
.animate-slide-down {
  will-change: transform, opacity;
}
</style>