<template>
    <div :class="containerClasses" 
         class="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex items-center justify-center transition-colors duration-500">
        <div class="max-w-7xl w-full">
            <div class="text-center mb-8 sm:mb-12 animate-fade-in-down">
                <h2 :class="titleClasses" 
                    class="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold mb-3 sm:mb-4 transition-colors duration-500">
                    Pricing Plans
                </h2>
                <p :class="subtitleClasses" 
                   class="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto transition-colors duration-500">
                    Choose the perfect plan for your needs. All plans include core features with flexible options.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12 perspective">
                <div v-for="(plan, index) in plans" 
                     :key="index" 
                     class="group pricing-card transition-all duration-300" 
                     :class="[
                         isMobile ? '' : index === 1 ? 'lg:scale-105 lg:z-10' : '',
                         planCardClasses[index]
                     ]" 
                     :style="{ 'animation-delay': `${index * 150}ms` }">
                    
                    <div class="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 backdrop-blur-xl border" 
                         :class="planContainerClasses[index]">
                        
                        <!-- Background overlay -->
                        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                             :class="hoverOverlayClasses[index]"></div>

                        <!-- Recommended badge for middle card -->
                       

                        <div class="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                            <!-- Plan header -->
                            <div class="mb-4 sm:mb-6">
                                <!-- Badge -->
                                <div class="inline-flex items-center px-3 py-1 rounded-full mb-3 sm:mb-4 transition-all duration-300" 
                                     :class="badgeClasses[index]">
                                    <h3 class="text-xs sm:text-sm font-semibold uppercase tracking-widest transition-colors duration-300" 
                                        :class="badgeTextClasses[index]">
                                        {{ plan.badge }}
                                    </h3>
                                </div>
                                
                                <!-- Title -->
                                <h2 :class="planTitleClasses[index]" 
                                    class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 transition-colors duration-300">
                                    {{ plan.title }}
                                </h2>
                                
                                <!-- Description -->
                                <p :class="planDescriptionClasses" 
                                   class="text-xs sm:text-sm font-medium leading-relaxed transition-colors duration-300">
                                    {{ plan.description }}
                                </p>
                            </div>

                            <!-- Pricing section -->
                            <div class="mb-4 sm:mb-5">
                                <!-- Discount badge -->
                                <div v-if="plan.discount" 
                                     class="inline-flex items-center px-3 py-1 rounded-full mb-2 sm:mb-3 border transition-all duration-300" 
                                     :class="discountBadgeClasses[index]">
                                    <p class="text-xs sm:text-sm font-medium transition-colors duration-300" 
                                       :class="discountTextClasses[index]">
                                        {{ plan.discount }}
                                    </p>
                                </div>
                                
                                <!-- Price -->
                                <div class="flex items-baseline gap-1">
                                    <span :class="priceClasses[index]" 
                                          class="text-2xl sm:text-3xl lg:text-[36px] font-semibold transition-colors duration-300">
                                        {{ plan.price }}
                                    </span>
                                    <span :class="periodClasses" 
                                          class="text-sm sm:text-base lg:text-lg transition-colors duration-300">/month</span>
                                </div>
                                
                                <!-- Billing note -->
                                <p v-if="plan.note" 
                                   :class="noteClasses" 
                                   class="text-xs mt-1 transition-colors duration-300">
                                    {{ plan.note }}
                                </p>
                            </div>

                            <!-- Divider -->
                            <div :class="dividerClasses" 
                                 class="border-b mb-3 sm:mb-4 transition-colors duration-300"></div>

                            <!-- Features list -->
                            <div class="mb-6 sm:mb-8 lg:mb-10 xl:mb-12 flex-1 space-y-2 sm:space-y-3 lg:space-y-4">
                                <div v-for="(feature, featureIndex) in plan.features" 
                                     :key="featureIndex"
                                     class="flex items-start gap-2 sm:gap-3 feature-item transition-colors duration-300"
                                     :style="{ 'animation-delay': `${300 + featureIndex * 50}ms` }">
                                    
                                    <!-- Icon -->
                                    <div :class="featureIconWrapperClasses[index]" 
                                         class="flex-shrink-0 mt-0.5 rounded-full p-1 transition-colors duration-300">
                                        <svg v-if="feature.included === false" 
                                             class="w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300" 
                                             :class="featureIconExcludedClasses" 
                                             fill="none" 
                                             stroke="currentColor" 
                                             viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                        <svg v-else-if="feature.limited" 
                                             class="w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300" 
                                             :class="featureIconLimitedClasses" 
                                             fill="currentColor" 
                                             viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                                                  clip-rule="evenodd" />
                                        </svg>
                                        <svg v-else 
                                             class="w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300" 
                                             :class="featureIconIncludedClasses[index]" 
                                             fill="currentColor" 
                                             viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                  clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    
                                    <!-- Feature text -->
                                    <div class="flex-1">
                                        <span :class="featureTextClasses" 
                                              class="text-xs sm:text-sm lg:text-[15px] transition-colors duration-300">
                                            {{ feature.text }}
                                        </span>
                                        <span v-if="feature.limit" 
                                              :class="featureLimitClasses" 
                                              class="text-xs ml-1 transition-colors duration-300">
                                            ({{ feature.limit }})
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <!-- CTA Button -->
                            <button
                                class="btn w-full py-2 sm:py-3 lg:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform group-hover:shadow-lg hover:scale-105 active:scale-95"
                                :class="buttonClasses[index]">
                                <span class="flex items-center justify-center transition-colors duration-300">
                                    {{ plan.buttonText }}
                                    <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                                         fill="none" 
                                         stroke="currentColor" 
                                         viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- FAQ/Note section -->
            <div class="mt-8 sm:mt-12 lg:mt-16 text-center animate-fade-in-up" style="animation-delay: 600ms">
                     <p :class="faqTextClasses" 
                         class="text-sm sm:text-base transition-colors duration-500">
                          Need help choosing? <button @click="showContact = true" 
                            :class="faqLinkClasses" 
                            class="btn font-medium hover:underline transition-colors duration-300">Contact our sales team</button>
                     </p>
                <div v-if="showContact" class="mt-4">
                    <p :class="contactTextClasses" 
                       class="text-xs sm:text-sm transition-colors duration-500">
                        Our team will help you find the perfect solution for your needs.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
    isDarkMode: {
        type: Boolean,
        required: true,
        default: true
    }
})

const showContact = ref(false)
const isMobile = ref(false)

// Check if mobile on mount
if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth < 1024
    window.addEventListener('resize', () => {
        isMobile.value = window.innerWidth < 1024
    })
}

const plans = [
    {
        title: 'TOEIC Starter',
        badge: 'Free Plan',
        description: 'Perfect for individuals starting their TOEIC preparation journey.',
        discount: '100% Free',
        price: '$0',
        note: 'No credit card required',
        buttonText: 'Get Started Free',
        features: [
            { text: '1 practice test', included: true },
            { text: 'Basic vocabulary exercises', included: true },
            { text: 'Listening practice (10 hours)', included: true, limit: '10h' },
            { text: 'Reading comprehension', included: true, limited: true },
            { text: 'Progress tracking', included: false },
            { text: 'Priority support', included: false }
        ]
    },
    {
        title: 'Premium',
        badge: 'Recommended',
        description: 'For serious learners aiming for high scores and comprehensive preparation.',
        discount: 'Save 20%',
        price: '$29',
        note: 'Billed monthly',
        buttonText: 'Start Premium Trial',
        features: [
            { text: '10+ practice tests', included: true },
            { text: 'Advanced vocabulary', included: true },
            { text: 'Listening practice (unlimited)', included: true },
            { text: 'Full reading comprehension', included: true },
            { text: 'Detailed progress analytics', included: true },
            { text: 'Priority email support', included: true }
        ]
    },
    {
        title: 'HR Pro',
        badge: 'Enterprise',
        description: 'For companies and HR departments managing multiple employees.',
        discount: 'Save 30%',
        price: '$99',
        note: 'Volume discounts available',
        buttonText: 'Start HR Pro Trial',
        features: [
            { text: 'Unlimited practice tests', included: true },
            { text: 'Custom vocabulary modules', included: true },
            { text: 'Advanced listening labs', included: true },
            { text: 'Comprehensive reading suite', included: true },
            { text: 'Team progress dashboard', included: true },
            { text: '24/7 dedicated support', included: true }
        ]
    }
]

// Computed properties for dynamic classes
const containerClasses = computed(() => 
    props.isDarkMode 
        ? 'bg-gradient-to-tr from-gray-950 via-orange-500/5 to-orange-600/30' 
        : 'bg-gradient-to-tr from-[#eae0cd] via-white to-[#eae0cd]/30'
)

const titleClasses = computed(() => 
    props.isDarkMode ? 'text-white' : 'text-gray-900'
)

const subtitleClasses = computed(() => 
    props.isDarkMode ? 'text-slate-400' : 'text-gray-600'
)

// Card classes
const planCardClasses = computed(() => [
    props.isDarkMode ? 'highlight-blue' : 'highlight-blue-light',
    props.isDarkMode ? 'highlight-orange' : 'highlight-orange-light',
    props.isDarkMode ? 'highlight-purple' : 'highlight-purple-light'
])

const planContainerClasses = computed(() => [
    props.isDarkMode 
        ? 'bg-gradient-to-br from-blue-950/80 via-gray-900/80 to-gray-950/80 border-blue-800/40 hover:border-blue-600/60' 
        : 'bg-gradient-to-br from-blue-50/90 via-white/90 to-blue-50/90 border-blue-200/60 hover:border-blue-400/60',
    
    props.isDarkMode 
        ? 'bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-gray-950/80 border-gray-700/40 hover:border-orange-500/60' 
        : 'bg-gradient-to-br from-[#eae0cd]/90 via-white/90 to-[#eae0cd]/90 border-[#eae0cd]/60 hover:border-[#eae0cd]/60',
    
    props.isDarkMode 
        ? 'bg-gradient-to-br from-purple-950/80 via-gray-900/80 to-gray-950/80 border-purple-800/40 hover:border-purple-600/60' 
        : 'bg-gradient-to-br from-purple-50/90 via-white/90 to-purple-50/90 border-purple-200/60 hover:border-purple-400/60'
])

const hoverOverlayClasses = computed(() => [
    props.isDarkMode 
        ? 'bg-gradient-to-br from-blue-600/10 to-transparent' 
        : 'bg-gradient-to-br from-blue-400/10 to-transparent',
    
    props.isDarkMode 
        ? 'bg-gradient-to-br from-orange-600/10 to-transparent' 
        : 'bg-gradient-to-br from-orange-600/10 to-transparent',
    
    props.isDarkMode 
        ? 'bg-gradient-to-br from-purple-600/10 to-transparent' 
        : 'bg-gradient-to-br from-purple-400/10 to-transparent'
])

// Badge classes
const badgeClasses = computed(() => [
    props.isDarkMode 
        ? 'bg-gradient-to-r from-blue-600 to-blue-700' 
        : 'bg-gradient-to-r from-blue-500 to-blue-600',
    
    props.isDarkMode 
        ? 'bg-gradient-to-r from-orange-500 to-orange-600' 
        : 'bg-gradient-to-r from-orange-500 to-orange-600',
    
    props.isDarkMode 
        ? 'bg-gradient-to-r from-purple-600 to-purple-700' 
        : 'bg-gradient-to-r from-purple-500 to-purple-600'
])

const badgeTextClasses = computed(() => [
    props.isDarkMode ? 'text-white' : 'text-white',
    props.isDarkMode ? 'text-white' : 'text-gray-800',
    props.isDarkMode ? 'text-white' : 'text-white'
])

// Title classes
const planTitleClasses = computed(() => [
    props.isDarkMode ? 'text-white' : 'text-gray-900',
    props.isDarkMode ? 'text-white' : 'text-gray-900',
    props.isDarkMode ? 'text-white' : 'text-gray-900'
])

const planDescriptionClasses = computed(() => 
    props.isDarkMode ? 'text-gray-400' : 'text-gray-600'
)

// Discount badge classes
const discountBadgeClasses = computed(() => [
    props.isDarkMode 
        ? 'bg-gradient-to-r from-blue-600/20 to-blue-700/20 border-blue-500/30' 
        : 'bg-gradient-to-r from-blue-400/20 to-blue-500/20 border-blue-400/40',
    
    props.isDarkMode 
        ? 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-orange-500/30' 
        : 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-orange-500/30',
    
    props.isDarkMode 
        ? 'bg-gradient-to-r from-purple-600/20 to-purple-700/20 border-purple-500/30' 
        : 'bg-gradient-to-r from-purple-400/20 to-purple-500/20 border-purple-400/40'
])

const discountTextClasses = computed(() => [
    props.isDarkMode ? 'text-blue-300' : 'text-blue-600',
    props.isDarkMode ? 'text-orange-300' : 'text-[00000]',
    props.isDarkMode ? 'text-purple-300' : 'text-purple-600'
])

// Price classes
const priceClasses = computed(() => [
    props.isDarkMode ? 'text-white' : 'text-gray-900',
    props.isDarkMode ? 'text-white' : 'text-gray-900',
    props.isDarkMode ? 'text-white' : 'text-gray-900'
])

const periodClasses = computed(() => 
    props.isDarkMode ? 'text-gray-400' : 'text-gray-500'
)

const noteClasses = computed(() => 
    props.isDarkMode ? 'text-gray-500' : 'text-gray-600'
)

// Divider
const dividerClasses = computed(() => 
    props.isDarkMode ? 'border-gray-700' : 'border-gray-300'
)

// Feature icons
const featureIconWrapperClasses = computed(() => [
    props.isDarkMode 
        ? 'bg-blue-900/30' 
        : 'bg-blue-100',
    
    props.isDarkMode 
        ? 'bg-orange-900/30' 
        : 'bg-[#d3a485]/30',
    
    props.isDarkMode 
        ? 'bg-purple-900/30' 
        : 'bg-purple-100'
])

const featureIconIncludedClasses = computed(() => [
    props.isDarkMode ? 'text-blue-400' : 'text-blue-600',
    props.isDarkMode ? 'text-orange-400' : 'text-[#7a6a4f]',
    props.isDarkMode ? 'text-purple-400' : 'text-purple-600'
])

const featureIconExcludedClasses = computed(() => 
    props.isDarkMode ? 'text-red-400' : 'text-red-500'
)

const featureIconLimitedClasses = computed(() => 
    props.isDarkMode ? 'text-yellow-400' : 'text-yellow-500'
)

// Feature text
const featureTextClasses = computed(() => 
    props.isDarkMode ? 'text-gray-300' : 'text-gray-700'
)

const featureLimitClasses = computed(() => 
    props.isDarkMode ? 'text-gray-500' : 'text-gray-600'
)

// Button classes
const buttonClasses = computed(() => [
    props.isDarkMode 
        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-blue-500/50' 
        : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-blue-400/50',
    
    props.isDarkMode 
        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-orange-500/50' 
        : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-orange-500/50' ,
    
    props.isDarkMode 
        ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-purple-500/50' 
        : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-purple-400/50'
])

 const faqTextClasses = computed(() => 
    props.isDarkMode ? 'text-gray-400' : 'text-gray-600'
)

const faqLinkClasses = computed(() => 
    props.isDarkMode ? 'text-orange-400 hover:text-orange-300' : 'text-[#7a6a4f] hover:text-[#6b5b3f]'
)

const contactTextClasses = computed(() => 
    props.isDarkMode ? 'text-gray-500' : 'text-gray-600'
)
</script>

<style scoped>
@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-40px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(40px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes featureFadeIn {
    from {
        opacity: 0;
        transform: translateX(-10px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulseSlow {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.8;
    }
}

.pricing-card {
    animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    opacity: 0;
}

.pricing-card:nth-child(1) {
    animation: slideInLeft 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.pricing-card:nth-child(3) {
    animation: slideInRight 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.feature-item {
    animation: featureFadeIn 0.4s ease-out forwards;
    opacity: 0;
}

.animate-fade-in-down {
    animation: fadeInDown 0.6s ease-out forwards;
}

.animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
}

.animate-pulse-slow {
    animation: pulseSlow 2s ease-in-out infinite;
}

.highlight-blue {
    filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.2));
}

.highlight-blue-light {
    filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.1));
}

.highlight-orange {
    filter: drop-shadow(0 0 30px rgba(29, 9, 2, 0.15));
}

.highlight-orange-light {
    filter: drop-shadow(0 0 20px rgba(255, 85, 28, 0.1));
}

.highlight-purple {
    filter: drop-shadow(0 0 30px rgba(139, 92, 246, 0.15));
}

.highlight-purple-light {
    filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.1));
}

.group:hover .highlight-blue,
.group:hover .highlight-blue-light {
    filter: drop-shadow(0 0 50px rgba(103, 158, 245, 0.3));
}

.group:hover .highlight-orange,
.group:hover .highlight-orange-light {
    filter: drop-shadow(0 0 50px rgba(134, 46, 17, 0.2));
}

.group:hover .highlight-purple,
.group:hover .highlight-purple-light {
    filter: drop-shadow(0 0 50px rgba(139, 92, 246, 0.2));
}

.perspective {
    perspective: 1200px;
}

 * {
    transition-property: transform, opacity, background-color, border-color, color, box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

 @media (prefers-reduced-motion: reduce) {
    .pricing-card,
    .feature-item,
    .animate-fade-in-down,
    .animate-fade-in-up,
    .animate-pulse-slow {
        animation: none !important;
    }
    
    .transition-all,
    .transition-transform,
    .transition-colors,
    .transition-opacity {
        transition: none !important;
    }
}

@media (max-width: 1024px) {
    .pricing-card:nth-child(2) {
        transform: scale(1) !important;
    }
}

 .backdrop-blur-xl {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}

 .group:hover .border {
    border-image-slice: 1;
}

.group:hover .border-blue-800\/40,
.group:hover .border-blue-600\/60 {
    border-image-source: linear-gradient(135deg, #3b82f6, #1d4ed8);
}

.group:hover .border-orange-500\/60 {
    border-image-source: linear-gradient(135deg, #f97316, #ea580c);
}
 
</style>