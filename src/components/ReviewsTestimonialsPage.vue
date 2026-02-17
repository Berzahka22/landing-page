<template>
    <div :class="containerClasses" class="overflow-hidden relative min-h-screen transition-colors duration-500">
      <!-- Background particles effect -->
      <div class="absolute inset-0 bg-gradient-to-br transition-colors duration-500" :class="backgroundGradient"></div>
      
      <!-- Animated particles - réduit sur mobile -->
      <div class="absolute inset-0 overflow-hidden">
          <div class="absolute top-10 md:top-20 left-5 md:left-10 w-12 h-12 md:w-20 md:h-20 rounded-full blur-xl md:blur-2xl animate-float-slow transition-colors duration-500" 
             :class="particle1Classes"></div>
           <div class="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-20 h-20 md:w-32 md:h-32 rounded-full blur-2xl md:blur-2xl animate-float-delay transition-colors duration-500" 
             :class="particle2Classes"></div>
        <div class="absolute top-1/2 left-1/4 md:left-1/3 w-16 h-16 md:w-24 md:h-24 rounded-full blur-xl md:blur-2xl animate-float-delay-2 transition-colors duration-500" 
             :class="particle3Classes"></div>
      </div>
  
      <!-- Main content -->
      <div class="relative z-10 min-h-screen flex items-center justify-center py-8 md:py-12 lg:py-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-stretch">
            
            <!-- Left Card - Rating -->
            <div class="animate-fade-in-up h-full order-1 lg:order-1" style="animation-delay: 0.2s;">
              <div class="group h-full rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-xl md:hover:shadow-2xl min-h-[320px] md:min-h-[400px] flex flex-col relative overflow-hidden transition-colors duration-500"
                   :class="ratingCardClasses">
                <!-- Background pattern -->
                <div class="absolute inset-0 opacity-5">
                  <div class="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 rounded-full transition-colors duration-500"
                       :class="ratingPattern1Classes"></div>
                  <div class="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 rounded-full transition-colors duration-500"
                       :class="ratingPattern2Classes"></div>
                </div>
                
                <!-- Animated border -->
                <div class="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-transparent group-hover:animate-pulse-glow transition-all duration-500"
                     :class="ratingBorderClasses"></div>
                
                <!-- Header -->
                <div class="mb-4 md:mb-6 lg:mb-8 relative z-10">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-sm md:text-lg font-medium mb-1 md:mb-2 group-hover:transition-colors duration-500"
                          :class="ratingTitleClasses">Rating</h3>
                      <div class="flex items-center space-x-1">
                        <svg v-for="(item, index) in 4" :key="index" 
                          class="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-all duration-300"
                          :style="{ transitionDelay: `${index * 100}ms` }"
                          :class="ratingStarClasses"
                          fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-4 h-4 md:w-5 md:h-5 transition-colors duration-500"
                             :class="ratingStarInactiveClasses"
                             fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                    </div>
                    <!-- Crown icon -->
                    <div class="group-hover:animate-bounce transition-colors duration-500"
                         :class="crownIconClasses">
                      <svg class="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 5a5 5 0 0110 0v2A5 5 0 015 7V5zM0 16.68A19.9 19.9 0 0110 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"/>
                      </svg>
                    </div>
                  </div>
                </div>
  
                <!-- Rating Display -->
                <div class="text-center flex-1 flex flex-col justify-center mb-4 md:mb-6 relative z-10">
                  <div class="relative inline-block">
                    <div class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[140px] font-bold text-transparent bg-clip-text animate-pulse-slow group-hover:transition-all duration-500"
                         :class="ratingNumberClasses">
                      4.9
                    </div>
                    <div class="absolute -top-1 -right-6 text-xl md:text-2xl lg:text-3xl xl:text-4xl transition-colors duration-500"
                         :class="ratingFractionClasses">/5</div>
                    <div class="absolute -bottom-3 md:-bottom-4 right-0 text-xs md:text-sm transition-colors duration-500"
                         :class="ratingLabelClasses">Rating</div>
                  </div>
                </div>
  
                <div class="relative z-10 space-y-3 md:space-y-4 lg:space-y-6">
                  <p class="text-lg md:text-xl lg:text-2xl font-semibold group-hover:translate-x-2 transition-transform duration-500"
                     :class="ratingSubtitleClasses">Exceptional Quality</p>
                  <p class="text-xs md:text-sm leading-relaxed group-hover:translate-x-1 transition-all duration-500 delay-100"
                     :class="ratingDescriptionClasses">
                    Trusted by thousands of users worldwide. Our platform consistently delivers outstanding results with unparalleled customer satisfaction.
                  </p>
                </div>
                
                <!-- Shimmer effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500"
                     :class="ratingShimmerClasses"></div>
              </div>
            </div>
  
            <!-- Middle Column - Testimonials -->
            <div class="space-y-4 md:space-y-6 lg:space-y-8 order-3 lg:order-2">
              <!-- Green Testimonial -->
              <div class="animate-fade-in-up" style="animation-delay: 0.4s;">
                <div class="group relative rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 transform transition-all duration-700 hover:scale-[1.03] hover:shadow-xl md:hover:shadow-2xl min-h-[180px] md:min-h-[220px] overflow-hidden transition-colors duration-500"
                     :class="testimonialGreenClasses">
                  <!-- Animated background pattern -->
                  <div class="absolute inset-0 opacity-10">
                    <div class="absolute top-0 right-0 w-24 h-24 md:w-32 lg:w-40 md:h-32 lg:h-40 rounded-full blur-2xl md:blur-2xl transition-colors duration-500"
                         :class="testimonialGreenPatternClasses"></div>
                  </div>
                  
                  <!-- Floating badges -->
                  <div class="absolute top-2 right-2 md:top-3 md:right-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div class="backdrop-blur-sm px-1.5 py-0.5 md:px-2 md:py-1 rounded-full text-xs transition-colors duration-500"
                         :class="badgeGreenClasses">Verified</div>
                  </div>
                  
                  <!-- User Info -->
                  <div class="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4 lg:mb-6 relative z-10">
                    <div class="relative">
                      <img 
                        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face" 
                        alt="Sarah Jenkins" 
                        class="responsive-img w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 md:border-3 group-hover:scale-110 transition-all duration-500"
                        :class="avatarBorderGreenClasses"
                      />
                      <div class="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 rounded-full border flex items-center justify-center transition-colors duration-500"
                           :class="avatarBadgeGreenClasses">
                        <svg class="w-2 h-2 md:w-3 md:h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 10.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 class="font-bold text-sm md:text-base lg:text-lg group-hover:transition-colors duration-500"
                          :class="userNameGreenClasses">Sarah Jenkins</h4>
                      <div class="flex items-center space-x-1 md:space-x-2">
                        <p class="text-xs md:text-sm group-hover:transition-colors duration-500"
                           :class="userRoleGreenClasses">Marketing Director</p>
                        <div class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full group-hover:animate-pulse transition-colors duration-500"
                             :class="dotGreenClasses"></div>
                      </div>
                    </div>
                  </div>
  
                  <!-- Progress Bar -->
                  <div class="mb-3 md:mb-4 lg:mb-6 relative z-10">
                    <div class="flex justify-between text-xs mb-1 md:mb-2 transition-colors duration-500"
                         :class="progressTextGreenClasses">
                      <span>Satisfaction</span>
                      <span class="font-bold">94%</span>
                    </div>
                    <div class="w-full rounded-full h-1.5 md:h-2 overflow-hidden transition-colors duration-500"
                         :class="progressBgGreenClasses">
                      <div class="h-1.5 md:h-2 rounded-full w-[94%] animate-progress group-hover:w-[96%] transition-all duration-700"
                           :class="progressBarGreenClasses"></div>
                    </div>
                  </div>
  
                  <!-- Testimonial Text -->
                  <div class="relative z-10">
                    <div class="text-base md:text-lg mb-0.5 md:mb-1 transition-colors duration-500"
                         :class="quoteSymbolGreenClasses">"</div>
                    <p class="text-xs md:text-sm lg:text-[15px] font-medium leading-relaxed group-hover:translate-y-[-2px] transition-all duration-500"
                       :class="testimonialTextGreenClasses">
                      The platform transformed our workflow completely. The efficiency gains have been remarkable.
                    </p>
                  </div>
                  
                  <!-- Hover effect -->
                  <div class="absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       :class="testimonialHoverGreenClasses"></div>
                </div>
              </div>
  
              <!-- Blue Testimonial -->
              <div class="animate-fade-in-up" style="animation-delay: 0.6s;">
                <div class="group relative rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 transform transition-all duration-700 hover:scale-[1.03] hover:shadow-xl md:hover:shadow-2xl min-h-[180px] md:min-h-[220px] overflow-hidden transition-colors duration-500"
                     :class="testimonialBlueClasses">
                  <!-- Animated background pattern -->
                  <div class="absolute inset-0 opacity-10">
                    <div class="absolute bottom-0 left-0 w-24 h-24 md:w-32 lg:w-40 md:h-32 lg:h-40 rounded-full blur-2xl md:blur-2xl transition-colors duration-500"
                         :class="testimonialBluePatternClasses"></div>
                  </div>
                  
                  <!-- Floating badges -->
                  <div class="absolute top-2 right-2 md:top-3 md:right-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div class="backdrop-blur-sm px-1.5 py-0.5 md:px-2 md:py-1 rounded-full text-xs transition-colors duration-500"
                         :class="badgeBlueClasses">Top User</div>
                  </div>
                  
                  <!-- User Info -->
                  <div class="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4 lg:mb-6 relative z-10">
                    <div class="relative">
                      <img 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face" 
                        alt="Michael Chen" 
                        class="responsive-img w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 md:border-3 group-hover:scale-110 transition-all duration-500"
                        :class="avatarBorderBlueClasses"
                      />
                      <div class="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 rounded-full border flex items-center justify-center transition-colors duration-500"
                           :class="avatarBadgeBlueClasses">
                        <svg class="w-2 h-2 md:w-3 md:h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 10.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 class="font-bold text-sm md:text-base lg:text-lg group-hover:transition-colors duration-500"
                          :class="userNameBlueClasses">Michael Chen</h4>
                      <div class="flex items-center space-x-1 md:space-x-2">
                        <p class="text-xs md:text-sm group-hover:transition-colors duration-500"
                           :class="userRoleBlueClasses">Tech Lead</p>
                        <div class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full group-hover:animate-pulse transition-colors duration-500"
                             :class="dotBlueClasses"></div>
                      </div>
                    </div>
                  </div>
  
                  <!-- Progress Bar -->
                  <div class="mb-3 md:mb-4 lg:mb-6 relative z-10">
                    <div class="flex justify-between text-xs mb-1 md:mb-2 transition-colors duration-500"
                         :class="progressTextBlueClasses">
                      <span>Productivity</span>
                      <span class="font-bold">88%</span>
                    </div>
                    <div class="w-full rounded-full h-1.5 md:h-2 overflow-hidden transition-colors duration-500"
                         :class="progressBgBlueClasses">
                      <div class="h-1.5 md:h-2 rounded-full w-[88%] animate-progress group-hover:w-[90%] transition-all duration-700" 
                           style="animation-delay: 0.3s;"
                           :class="progressBarBlueClasses"></div>
                    </div>
                  </div>
  
                  <!-- Testimonial Text -->
                  <div class="relative z-10">
                    <div class="text-base md:text-lg mb-0.5 md:mb-1 transition-colors duration-500"
                         :class="quoteSymbolBlueClasses">"</div>
                    <p class="text-xs md:text-sm lg:text-[15px] font-medium leading-relaxed group-hover:translate-y-[-2px] transition-all duration-500"
                       :class="testimonialTextBlueClasses">
                      Incredible features and outstanding support. Our development process has accelerated by 40%.
                    </p>
                  </div>
                  
                  <!-- Hover effect -->
                  <div class="absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       :class="testimonialHoverBlueClasses"></div>
                </div>
              </div>
            </div>
  
            <!-- Right Column - Content -->
            <div class="animate-fade-in-up order-2 lg:order-3" style="animation-delay: 0.8s;">
              <div class="group relative h-full rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-xl md:hover:shadow-2xl flex flex-col overflow-hidden transition-colors duration-500"
                   :class="featuredCardClasses">
                <!-- Animated grid pattern -->
                <div class="absolute inset-0 opacity-[0.03]">
                  <div class="absolute inset-0 transition-colors duration-500"
                       :style="gridPatternStyle"></div>
                </div>
                
                <!-- Floating orb -->
                <div class="absolute top-3 right-3 md:top-4 md:right-4 w-12 h-12 md:w-16 md:h-16 rounded-full opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-1000"
                     :class="featuredOrbClasses"></div>
  
                <!-- User Avatar -->
                <div class="mb-4 md:mb-6 lg:mb-8 relative z-10">
                  <div class="flex items-center space-x-3 md:space-x-4">
                    <div class="relative">
                      <img 
                        src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face" 
                        alt="Featured User" 
                        class="responsive-img w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-3 md:border-4 shadow-lg md:shadow-xl group-hover:scale-105 transition-all duration-500" 
                        :class="featuredAvatarBorderClasses"
                      />
                      <div class="absolute -bottom-1.5 -right-1.5 md:-bottom-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full border md:border-2 flex items-center justify-center transition-colors duration-500"
                           :class="featuredAvatarBadgeClasses">
                        <svg class="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 class="font-bold text-base md:text-lg lg:text-xl group-hover:transition-colors duration-500"
                          :class="featuredTitleClasses">Featured Story</h3>
                      <p class="text-xs md:text-sm group-hover:transition-colors duration-500"
                         :class="featuredSubtitleClasses">Success Highlight</p>
                    </div>
                  </div>
                </div>
  
                <!-- Main Content -->
                <div class="flex-1 mb-4 md:mb-6 lg:mb-8 relative z-10">
                  <h2 class="text-base md:text-lg lg:text-xl font-bold leading-snug group-hover:translate-x-1 transition-all duration-500"
                      :class="featuredHeadingClasses">
                    Transforming Businesses with Innovative Solutions
                  </h2>
                  
                  <div class="space-y-3 md:space-y-4">
                    <p class="text-xs md:text-sm lg:text-[15px] leading-relaxed group-hover:translate-x-2 transition-all duration-500 delay-100"
                       :class="featuredDescriptionClasses">
                      Discover how leading companies leverage our platform to achieve unprecedented growth and efficiency.
                    </p>
                    
                    <div class="rounded-lg md:rounded-xl p-3 md:p-4 border-l-3 md:border-l-4 group-hover:transition-all duration-500"
                         :class="featuredQuoteCardClasses">
                      <p class="text-xs md:text-sm italic transition-colors duration-500"
                         :class="featuredQuoteTextClasses">
                        "The integration was seamless and the results exceeded all expectations within the first quarter."
                      </p>
                    </div>
                  </div>
                </div>
  
                <!-- Bottom Section -->
                <div class="relative z-10 pt-4 md:pt-6 border-t group-hover:transition-colors duration-500"
                     :class="featuredBorderClasses">
                  <div class="flex items-center justify-between">
                    <div class="group-hover:translate-x-2 transition-transform duration-500">
                      <h3 class="font-bold text-sm md:text-base lg:text-lg mb-1.5 md:mb-2 group-hover:transition-colors duration-500"
                          :class="featuredBottomTitleClasses">Key Achievements</h3>
                      <div class="flex items-center space-x-3 md:space-x-4">
                        <div class="text-center">
                          <div class="text-lg md:text-xl font-bold transition-colors duration-500"
                               :class="featuredStatClasses">+250%</div>
                          <div class="text-xs transition-colors duration-500"
                               :class="featuredStatLabelClasses">Growth</div>
                        </div>
                        <div class="text-center">
                          <div class="text-lg md:text-xl font-bold transition-colors duration-500"
                               :class="featuredStatClasses">99.8%</div>
                          <div class="text-xs transition-colors duration-500"
                               :class="featuredStatLabelClasses">Uptime</div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Animated button -->
                    <div class="w-6 h-6 md:w-8 md:h-8 border md:border-2 rounded-full flex items-center justify-center transition-colors duration-500"
                         :class="featuredButtonBorderClasses">
                      <div class="w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-500"
                           :class="featuredButtonDotClasses"></div>
                    </div>
                  </div>
                </div>
                
                <!-- Shimmer effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-current/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500"
                     :class="featuredShimmerClasses"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ReviewsTestimonialsPage',
  props: {
    isDarkMode: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  computed: {
    // Classes pour le conteneur principal
    containerClasses() {
      return this.isDarkMode 
        ? 'bg-slate-900' 
        : 'bg-gradient-to-br from-[#eae0cd] via-white to-[#eae0cd]';
    },
    
    backgroundGradient() {
      return this.isDarkMode 
        ? 'from-slate-900 via-slate-800/80 to-slate-900' 
        : 'from-white via-[#eae0cd]/80 to-white';
    },
    
    // Classes pour les particules
    particle1Classes() {
      return this.isDarkMode 
        ? 'bg-purple-500/10' 
        : 'bg-[#eae0cd]/10';
    },
    
    particle2Classes() {
      return this.isDarkMode 
        ? 'bg-blue-500/10' 
        : 'bg-[#eae0cd]/10';
    },
    
    particle3Classes() {
      return this.isDarkMode 
        ? 'bg-orange-500/10' 
        : 'bg-[#eae0cd]/10';
    },
    
    // Classes pour la carte de rating
    ratingCardClasses() {
      return this.isDarkMode 
        ? 'bg-gradient-to-br from-[#1A2747] via-[#22355F] to-[#2A4377] hover:shadow-blue-500/20' 
        : 'bg-gradient-to-br from-blue-50 via-white to-blue-50 hover:shadow-blue-500/10 border border-blue-200/50';
    },
    
    ratingPattern1Classes() {
      return this.isDarkMode 
        ? 'bg-gradient-to-bl from-blue-500 to-transparent' 
        : 'bg-gradient-to-bl from-blue-400 to-transparent';
    },
    
    ratingPattern2Classes() {
      return this.isDarkMode 
        ? 'bg-gradient-to-tr from-yellow-500 to-transparent' 
        : 'bg-gradient-to-tr from-yellow-400 to-transparent';
    },
    
    ratingBorderClasses() {
      return this.isDarkMode 
        ? 'group-hover:border-blue-500/30' 
        : 'group-hover:border-blue-400/30';
    },
    
    ratingTitleClasses() {
      return this.isDarkMode 
        ? 'text-white group-hover:text-yellow-300' 
        : 'text-gray-800 group-hover:text-orange-600';
    },
    
    ratingStarClasses() {
      return this.isDarkMode 
        ? 'text-yellow-400 group-hover:text-yellow-300' 
        : 'text-yellow-500 group-hover:text-orange-500';
    },
    
    ratingStarInactiveClasses() {
      return this.isDarkMode 
        ? 'text-yellow-400/40' 
        : 'text-yellow-500/40';
    },
    
    crownIconClasses() {
      return this.isDarkMode 
        ? 'text-yellow-400' 
        : 'text-yellow-500';
    },
    
    ratingNumberClasses() {
      return this.isDarkMode 
        ? 'bg-gradient-to-r from-yellow-400 to-yellow-300 group-hover:from-yellow-300 group-hover:to-yellow-200' 
        : 'bg-gradient-to-r from-orange-500 to-orange-400 group-hover:from-orange-600 group-hover:to-orange-500';
    },
    
    ratingFractionClasses() {
      return this.isDarkMode 
        ? 'text-yellow-400/60' 
        : 'text-orange-500/60';
    },
    
    ratingLabelClasses() {
      return this.isDarkMode 
        ? 'text-yellow-400/60' 
        : 'text-orange-500/60';
    },
    
    ratingSubtitleClasses() {
      return this.isDarkMode 
        ? 'text-white' 
        : 'text-gray-800';
    },
    
    ratingDescriptionClasses() {
      return this.isDarkMode 
        ? 'text-slate-300/80 group-hover:text-slate-200' 
        : 'text-gray-600/80 group-hover:text-gray-700';
    },
    
    ratingShimmerClasses() {
      return this.isDarkMode 
        ? '' 
        : 'via-blue-500/5';
    },
    
    // Classes pour le témoignage vert
    testimonialGreenClasses() {
      return this.isDarkMode 
        ? 'bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 hover:shadow-emerald-500/30' 
        : 'bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 hover:shadow-emerald-700/20 border border-emerald-300/50';
    },
    
    testimonialGreenPatternClasses() {
      return this.isDarkMode 
        ? 'bg-white' 
        : 'bg-emerald-200';
    },
    
    badgeGreenClasses() {
      return this.isDarkMode 
        ? 'bg-white/20 text-white' 
        : 'bg-white/50 text-emerald-800';
    },
    
    avatarBorderGreenClasses() {
      return this.isDarkMode 
        ? 'border-white/30 group-hover:border-white/60' 
        : 'border-white/40 group-hover:border-white/70';
    },
    
    avatarBadgeGreenClasses() {
      return this.isDarkMode 
        ? 'bg-emerald-400 border-white' 
        : 'bg-emerald-500 border-white';
    },
    
    userNameGreenClasses() {
      return this.isDarkMode 
        ? 'text-white group-hover:text-emerald-100' 
        : 'text-white group-hover:text-emerald-50';
    },
    
    userRoleGreenClasses() {
      return this.isDarkMode 
        ? 'text-emerald-100 group-hover:text-white' 
        : 'text-emerald-50 group-hover:text-white';
    },
    
    dotGreenClasses() {
      return this.isDarkMode 
        ? 'bg-emerald-300' 
        : 'bg-emerald-400';
    },
    
    progressTextGreenClasses() {
      return this.isDarkMode 
        ? 'text-emerald-100' 
        : 'text-emerald-50';
    },
    
    progressBgGreenClasses() {
      return this.isDarkMode 
        ? 'bg-emerald-400/30' 
        : 'bg-emerald-500/30';
    },
    
    progressBarGreenClasses() {
      return this.isDarkMode 
        ? 'bg-white' 
        : 'bg-white';
    },
    
    quoteSymbolGreenClasses() {
      return this.isDarkMode 
        ? 'text-white' 
        : 'text-white';
    },
    
    testimonialTextGreenClasses() {
      return this.isDarkMode 
        ? 'text-white/90 group-hover:text-white' 
        : 'text-white/95 group-hover:text-white';
    },
    
    testimonialHoverGreenClasses() {
      return this.isDarkMode 
        ? 'from-emerald-600/20 to-transparent' 
        : 'from-emerald-500/20 to-transparent';
    },
    
    // Classes pour le témoignage bleu
    testimonialBlueClasses() {
      return this.isDarkMode 
        ? 'bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-700 hover:shadow-blue-500/30' 
        : 'bg-gradient-to-br from-blue-400 via-indigo-500 to-blue-600 hover:shadow-blue-500/20 border border-blue-300/50';
    },
    
    testimonialBluePatternClasses() {
      return this.isDarkMode 
        ? 'bg-white' 
        : 'bg-blue-100';
    },
    
    badgeBlueClasses() {
      return this.isDarkMode 
        ? 'bg-white/20 text-white' 
        : 'bg-white/50 text-blue-700';
    },
    
    avatarBorderBlueClasses() {
      return this.isDarkMode 
        ? 'border-white/30 group-hover:border-white/60' 
        : 'border-white/40 group-hover:border-white/70';
    },
    
    avatarBadgeBlueClasses() {
      return this.isDarkMode 
        ? 'bg-blue-400 border-white' 
        : 'bg-blue-500 border-white';
    },
    
    userNameBlueClasses() {
      return this.isDarkMode 
        ? 'text-white group-hover:text-blue-100' 
        : 'text-white group-hover:text-blue-50';
    },
    
    userRoleBlueClasses() {
      return this.isDarkMode 
        ? 'text-blue-100 group-hover:text-white' 
        : 'text-blue-50 group-hover:text-white';
    },
    
    dotBlueClasses() {
      return this.isDarkMode 
        ? 'bg-blue-300' 
        : 'bg-blue-400';
    },
    
    progressTextBlueClasses() {
      return this.isDarkMode 
        ? 'text-blue-100' 
        : 'text-blue-50';
    },
    
    progressBgBlueClasses() {
      return this.isDarkMode 
        ? 'bg-blue-400/30' 
        : 'bg-blue-500/30';
    },
    
    progressBarBlueClasses() {
      return this.isDarkMode 
        ? 'bg-white' 
        : 'bg-white';
    },
    
    quoteSymbolBlueClasses() {
      return this.isDarkMode 
        ? 'text-white' 
        : 'text-white';
    },
    
    testimonialTextBlueClasses() {
      return this.isDarkMode 
        ? 'text-white/90 group-hover:text-white' 
        : 'text-white/95 group-hover:text-white';
    },
    
    testimonialHoverBlueClasses() {
      return this.isDarkMode 
        ? 'from-blue-600/20 to-transparent' 
        : 'from-blue-500/20 to-transparent';
    },
    
    // Classes pour la carte featured
    featuredCardClasses() {
      return this.isDarkMode 
        ? 'bg-gradient-to-br from-[#1B1E23] via-[#22262D] to-[#2A2F38] hover:shadow-gray-800/30' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 hover:shadow-gray-800/10 border border-gray-300/50';
    },
    
    gridPatternStyle() {
      const color = this.isDarkMode ? '#ffffff' : '#000000';
      return {
        backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(to bottom, ${color} 1px, transparent 1px)`,
        backgroundSize: '30px 30px md:40px 40px'
      };
    },
    
    featuredOrbClasses() {
      return this.isDarkMode 
        ? 'bg-gradient-to-r from-[#FF551C] to-[#FF6B39]' 
        : 'bg-gradient-to-r from-orange-500 to-orange-400';
    },
    
    featuredAvatarBorderClasses() {
      return this.isDarkMode 
        ? 'border-slate-700 group-hover:border-[#FF551C]/50' 
        : 'border-gray-300 group-hover:border-orange-400/50';
    },
    
    featuredAvatarBadgeClasses() {
      return this.isDarkMode 
        ? 'bg-gradient-to-r from-[#FF551C] to-[#FF6B39] border-[#1B1E23]' 
        : 'bg-gradient-to-r from-orange-500 to-orange-400 border-white';
    },
    
    featuredTitleClasses() {
      return this.isDarkMode 
        ? 'text-white group-hover:text-[#FF6B39]' 
        : 'text-gray-800 group-hover:text-orange-600';
    },
    
    featuredSubtitleClasses() {
      return this.isDarkMode 
        ? 'text-slate-400 group-hover:text-slate-300' 
        : 'text-gray-600 group-hover:text-gray-700';
    },
    
    featuredHeadingClasses() {
      return this.isDarkMode 
        ? 'text-white group-hover:text-slate-100' 
        : 'text-gray-800 group-hover:text-gray-900';
    },
    
    featuredDescriptionClasses() {
      return this.isDarkMode 
        ? 'text-slate-300/80 group-hover:text-slate-200/90' 
        : 'text-gray-600/80 group-hover:text-gray-700/90';
    },
    
    featuredQuoteCardClasses() {
      return this.isDarkMode 
        ? 'bg-slate-800/30 border-[#FF551C] group-hover:bg-slate-800/50' 
        : 'bg-gray-100 border-orange-400 group-hover:bg-gray-200';
    },
    
    featuredQuoteTextClasses() {
      return this.isDarkMode 
        ? 'text-slate-300' 
        : 'text-gray-600';
    },
    
    featuredBorderClasses() {
      return this.isDarkMode 
        ? 'border-slate-700/50 group-hover:border-slate-600/50' 
        : 'border-gray-300/50 group-hover:border-gray-400/50';
    },
    
    featuredBottomTitleClasses() {
      return this.isDarkMode 
        ? 'text-white group-hover:text-slate-200' 
        : 'text-gray-800 group-hover:text-gray-900';
    },
    
    featuredStatClasses() {
      return this.isDarkMode 
        ? 'text-[#FF6B39]' 
        : 'text-orange-600';
    },
    
    featuredStatLabelClasses() {
      return this.isDarkMode 
        ? 'text-slate-400' 
        : 'text-gray-600';
    },
    
    featuredButtonBorderClasses() {
      return this.isDarkMode 
        ? 'border-[#FF551C]' 
        : 'border-orange-400';
    },
    
    featuredButtonDotClasses() {
      return this.isDarkMode 
        ? 'bg-[#FF551C]' 
        : 'bg-orange-500';
    },
    
    featuredShimmerClasses() {
      return this.isDarkMode 
        ? 'text-white' 
        : 'text-orange-500';
    }
  }
}
</script>

<style scoped>
/* Animations améliorées */
@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) translateX(8px) rotate(5deg);
  }
  50% {
    transform: translateY(0) translateX(15px) rotate(0deg);
  }
  75% {
    transform: translateY(15px) translateX(8px) rotate(-5deg);
  }
}

@keyframes float-delay {
  0%, 100% {
    transform: translateY(0) translateX(0) scale(1);
  }
  33% {
    transform: translateY(-10px) translateX(-10px) scale(1.05);
  }
  66% {
    transform: translateY(10px) translateX(10px) scale(0.95);
  }
}

@keyframes float-delay-2 {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(8px) translateX(-8px);
  }
  66% {
    transform: translateY(-8px) translateX(8px);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.01);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes progress {
  0% {
    width: 0%;
  }
  100% {
    width: var(--progress-width, 100%);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

/* Classes d'animation */
.animate-float-slow {
  animation: float-slow 15s ease-in-out infinite;
}

.animate-float-delay {
  animation: float-delay 12s ease-in-out infinite 2s;
}

.animate-float-delay-2 {
  animation: float-delay-2 18s ease-in-out infinite 4s;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

.animate-shimmer {
  animation: shimmer 2s ease-in-out infinite;
}

.animate-progress {
  animation: progress 1.2s ease-out forwards;
  --progress-width: 94%;
}

.animate-bounce {
  animation: bounce 1s ease-in-out infinite;
}

/* Optimisations pour mobile */
@media (max-width: 768px) {
  .animate-float-slow,
  .animate-float-delay,
  .animate-float-delay-2 {
    animation-duration: 20s;
    animation-timing-function: ease;
  }
  
  .animate-fade-in-up {
    animation-duration: 0.5s;
  }
  
  .animate-pulse-slow {
    animation-duration: 4s;
  }
  
  .group:hover {
    transform: none !important;
  }
  
  .group:hover .animate-shimmer {
    animation: none;
  }
}

/* Smooth transitions */
* {
  transition-property: transform, opacity, background-color, border-color, color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Performance optimizations */
@media (prefers-reduced-motion: reduce) {
  .animate-float-slow,
  .animate-float-delay,
  .animate-float-delay-2,
  .animate-fade-in-up,
  .animate-pulse-glow,
  .animate-pulse-slow,
  .animate-shimmer,
  .animate-progress,
  .animate-bounce {
    animation: none !important;
  }
  
  .transition-all,
  .transition-transform,
  .transition-colors,
  .transition-opacity {
    transition: none !important;
  }
}
</style>