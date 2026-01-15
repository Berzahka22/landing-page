<template>
    <div
        class="min-h-screen bg-gradient-to-tr from-gray-950 via-orange-500/5 to-orange-600/30 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex items-center justify-center">
        <div class="max-w-7xl w-full">
            <div class="text-center mb-8 sm:mb-12 animate-fade-in-down">
                <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold mb-3 sm:mb-4 text-white">Pricing Text title</h2>
                <p class="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12 perspective">
                <div v-for="(plan, index) in plans" :key="index" class="group pricing-card" :class="{
                    'lg:scale-105 lg:z-10': index === 1,
                    'highlight-blue': index === 0,
                    'highlight-orange': index !== 0
                }" :style="{ 'animation-delay': `${index * 150}ms` }">
                    <div class="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500" :class="[
                        index === 0
                            ? 'bg-gradient-to-br from-blue-950/80 via-gray-900/80 to-gray-950/80 border border-blue-800/40'
                            : 'bg-gradient-to-br from-gray-800/40 via-gray-900/40 to-gray-950/80 border border-gray-700/40',
                        'hover:border-opacity-60 group-hover:shadow-2xl group-hover:shadow-blue-900/30 backdrop-blur-xl'
                    ]">
                        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            :class="[
                                index === 0 ? 'bg-gradient-to-br from-blue-600/10 to-transparent' : 'bg-gradient-to-br from-orange-600/10 to-transparent'
                            ]"></div>

                        <div class="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                            <!-- Titre avec fond de la couleur du bouton -->
                            <div class="mb-4 sm:mb-6">
                                <!-- Fond coloré derrière le titre -->
                                <div class="inline-flex items-center px-3 py-1 rounded-full mb-3 sm:mb-4" :class="[
                                    index === 0 
                                        ? 'bg-gradient-to-r from-blue-600 to-blue-700' 
                                        : 'bg-gradient-to-r from-[#FF551C] to-[#FF6B39]'
                                ]">
                                    <h3 class="text-white text-xs sm:text-sm font-semibold uppercase tracking-widest">
                                        {{ index === 0 ? 'Plan' : 'Offer' }}
                                    </h3>
                                </div>
                                
                                <h2 :class="[
                                    'text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 transition-colors duration-300 text-white'
                                ]">
                                    {{ plan.title }}
                                </h2>
                                <p class="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed">
                                    {{ plan.description }}
                                </p>
                            </div>

                            <div class="mb-4 sm:mb-5">
                                <!-- Prix avec fond coloré -->
                                <div class="inline-flex items-center px-3 py-1 rounded-full mb-2 sm:mb-3" :class="[
                                    index === 0 
                                        ? 'bg-gradient-to-r from-blue-600/20 to-blue-700/20 border border-blue-500/30' 
                                        : 'bg-gradient-to-r from-[#FF551C]/20 to-[#FF6B39]/20 border border-[#FF551C]/30'
                                ]">
                                    <p class="text-xs sm:text-sm font-medium" :class="[
                                        index === 0 ? 'text-blue-300' : 'text-[#FF6B39]'
                                    ]">
                                        {{ plan.discount }}
                                    </p>
                                </div>
                                
                                <div class="flex items-baseline gap-1">
                                    <span class="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-white">{{ plan.price }}</span>
                                    <span class="text-gray-400 text-sm sm:text-base lg:text-lg">/month</span>
                                </div>
                            </div>

                            <div class="border-b border-[#2B3261] mb-3 sm:mb-4"></div>

                            <div class="mb-6 sm:mb-8 lg:mb-10 xl:mb-12 flex-1 space-y-2 sm:space-y-3 lg:space-y-4">
                                <div v-for="(feature, featureIndex) in plan.features" :key="featureIndex"
                                    class="flex items-start gap-2 sm:gap-3 feature-item"
                                    :style="{ 'animation-delay': `${300 + featureIndex * 50}ms` }">
                                    <!-- Icône simple sans fond -->
                                    <svg v-if="index === 0 && featureIndex >= 3" 
                                        class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-red-500 mt-0.5" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                    <svg v-else-if="index === 0" 
                                        class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-blue-400 mt-0.5" 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <svg v-else 
                                        class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-[#FF6B39] mt-0.5" 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span class="text-gray-300 text-xs sm:text-sm lg:text-[15px]">{{ feature }}</span>
                                </div>
                            </div>

                            <button
                                class="w-full py-2 sm:py-3 lg:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform"
                                :class="[
                                    index === 0
                                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95'
                                        : 'bg-gradient-to-r from-[#FF551C] to-[#FF6B39] hover:from-[#FF6B39] hover:to-[#FF804D] hover:shadow-lg hover:shadow-[#FF551C]/50 hover:scale-105 active:scale-95 text-white'
                                ]">
                                Get started <span class="ml-1 sm:ml-2">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const plans = [
    {
        title: 'TOEIC Offers',
        description: 'For growing agencies or design teams with multiple clients.',
        discount: 'Save up to 100%',
        price: '$0',
        features: [
            '1 template',
            'Figma files',
            'Figma files',
            'Figma files',
            'Figma files',
            'Priority support'
        ]
    },
    {
        title: 'Premium',
        description: 'For growing agencies or design teams with multiple clients.',
        discount: 'Save up to 20%',
        price: '$299',
        features: [
            '3 templates',
            'Figma files',
            'Figma files',
            'Figma files',
            'Figma files',
            'Priority support'
        ]
    },
    {
        title: 'HR Pro Offer',
        description: 'For growing agencies or design teams with multiple clients.',
        discount: 'Save up to 20%',
        price: '$299',
        features: [
            '5 templates',
            'Figma files',
            'Figma files',
            'Figma files',
            'Figma files',
            'Priority support'
        ]
    }
]
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

.highlight-blue {
    filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.2));
}

.highlight-orange {
    filter: drop-shadow(0 0 30px rgba(255, 85, 28, 0.15));
}

.group:hover .highlight-blue {
    filter: drop-shadow(0 0 50px rgba(103, 158, 245, 0.4));
}

.group:hover .highlight-orange {
    filter: drop-shadow(0 0 50px rgba(255, 85, 28, 0.3));
}

.perspective {
    perspective: 1200px;
}

@media (max-width: 1024px) {
    .pricing-card:nth-child(2) {
        transform: scale(1) !important;
    }
}
</style>