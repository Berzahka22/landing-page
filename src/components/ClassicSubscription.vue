<template>
  <div class="relative py-12 lg:py-16 lg:pb-40" :style="{ backgroundColor: 'var(--panel-bg)', color: 'var(--text)' }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        <!-- Left Section -->
        <div class="lg:col-span-2">
          <div class="animate-slideInLeft mb-8 lg:mb-0">
            <h1 class="text-3xl md:text-4xl lg:text-[50px] font-bold leading-tight mb-4 lg:mb-6">
              Classic subscriptent
            </h1>
            <p class="text-base md:text-lg lg:text-[20px] leading-relaxed mb-6 lg:mb-8" :style="{ color: 'var(--muted)' }">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
              hendrerit
              urna. Pellentesque sit amet sapien fringilla.
            </p>
          </div>

          <!-- Pricing Cards -->
          <div class="animate-slideInLeft grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6" style="animation-delay: 0.1s">
            <!-- Premium Card -->
            <div class="group cursor-pointer p-2 lg:p-[8px] rounded-xl transition-all duration-500 lg:hover:scale-105"
              :style="{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }">
              <div
                class="relative overflow-hidden transition-all duration-500 lg:group-hover:shadow-2xl lg:group-hover:shadow-orange-500/30">
                <!-- Header -->
                <div
                  class="h-12 lg:h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-md flex items-center px-4 lg:px-6 group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all duration-500 lg:group-hover:translate-y-[-2px]">
                  <h3 class="text-lg lg:text-xl font-bold text-white lg:group-hover:scale-105 transition-transform duration-500">Premium</h3>
                </div>

                <!-- Content -->
                <div class="p-4 lg:p-6 space-y-4 lg:space-y-6 mt-6 lg:mt-10 rounded-2xl transition-all duration-500"
                  :style="{ backgroundColor: 'var(--card-bg)' }">
                  <div class="lg:group-hover:translate-x-2 transition-transform duration-500">
                    <h4 class="font-semibold mb-2 text-sm lg:text-base">Text Price</h4>
                    <p class="text-xs lg:text-sm" :style="{ color: 'var(--muted)' }">Lorem ipsum dolor sit amet, consectetur
                      adipiscing
                      elit. Ut et massa mi.</p>
                  </div>

                  <div class="lg:group-hover:translate-x-2 transition-transform duration-500 delay-100">
                    <p class="text-2xl lg:text-4xl font-bold mb-2 lg:mb-3 transition-colors duration-500" :style="{ color: 'var(--text)' }">$22150</p>
                    <p class="text-xs lg:text-sm" :style="{ color: 'var(--muted)' }">Lorem ipsum dolor sit amet, consectetur
                      adipiscing
                      elit. Ut et massa mi.</p>
                  </div>
                </div>
                
                <!-- Shine Effect -->
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 lg:group-hover:opacity-100 lg:group-hover:animate-shine transition-opacity duration-500"></div>
              </div>
            </div>

            <!-- Pro-RH Card -->
            <div class="group cursor-pointer p-2 lg:p-[8px] rounded-xl transition-all duration-500 lg:hover:scale-105"
              :style="{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }">
              <div
                class="relative overflow-hidden transition-all duration-500 lg:group-hover:shadow-2xl lg:group-hover:shadow-blue-500/30">
                <!-- Header -->
                <div
                  class="h-12 lg:h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-md flex items-center px-4 lg:px-6 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500 lg:group-hover:translate-y-[-2px]">
                  <h3 class="text-lg lg:text-xl font-bold text-white lg:group-hover:scale-105 transition-transform duration-500">Pro-RH</h3>
                </div>

                <!-- Content -->
                <div class="p-4 lg:p-6 space-y-4 lg:space-y-6 mt-6 lg:mt-10 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 lg:group-hover:bg-gradient-to-br lg:group-hover:from-gray-800 lg:group-hover:to-gray-900 transition-all duration-500">
                  <div class="lg:group-hover:translate-x-2 transition-transform duration-500">
                    <h4 class="text-white font-semibold mb-2 text-sm lg:text-base">Text Price</h4>
                    <p class="text-gray-400 text-xs lg:text-sm">Lorem ipsum dolor sit amet, consectetur
                      adipiscing
                      elit. Ut et massa mi.</p>
                  </div>

                  <div class="lg:group-hover:translate-x-2 transition-transform duration-500 delay-100">
                    <p class="text-2xl lg:text-4xl font-bold mb-2 lg:mb-3 text-white lg:group-hover:text-blue-400 transition-colors duration-500">$22150</p>
                    <p class="text-gray-400 text-xs lg:text-sm">Lorem ipsum dolor sit amet, consectetur
                      adipiscing
                      elit. Ut et massa mi.</p>
                  </div>
                </div>
                
                <!-- Shine Effect -->
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 lg:group-hover:opacity-100 lg:group-hover:animate-shine transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Section - Certification Card -->
        <div class="animate-slideInRight h-full mt-6 lg:mt-0" style="animation-delay: 0.2s">
          <div class="relative group cursor-pointer h-full lg:hover:scale-105 transition-transform duration-500">
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500">
            </div>

                <div
              class="relative h-full rounded-2xl transition-all duration-500 p-6 lg:p-8 flex flex-col justify-between min-h-[300px] lg:min-h-96 lg:group-hover:shadow-2xl"
              :style="{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }">
              <div class="lg:group-hover:translate-y-[-5px] transition-transform duration-500">
                <h3 class="text-xl lg:text-[36px] font-semibold mb-3 transition-colors duration-500">TOEIC Certification Pack-All-one</h3>
                <p class="text-sm lg:text-[15px] mb-6 lg:mb-8 transition-colors duration-500" :style="{ color: 'var(--muted)' }">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>

              <div class="flex flex-col justify-between flex-1">
                <p class="text-base lg:text-xl leading-relaxed mb-6 lg:mb-8 lg:group-hover:translate-x-2 transition-all duration-500" :style="{ color: 'var(--muted)' }">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
                  hendrerit urna. Pellentesque sit amet sapien fringilla.
                </p>

                <div class="lg:group-hover:translate-y-2 transition-transform duration-500">
                  <button
                    class="btn w-full px-4 py-3 lg:px-6 lg:py-3 text-sm lg:text-[17px] font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg lg:group-hover:shadow-2xl"
                    :style="{ background: 'linear-gradient(90deg,#2563eb,#4f46e5)', color: '#fff' }">
                    Text button
                  </button>
                </div>
              </div>
              
              <!-- Floating Particles Effect -->
              <div class="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div v-for="i in 5" :key="i" 
                  class="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"
                  :class="`lg:group-hover:animate-float-${i}`"
                  :style="{
                    top: `${15 + i * 15}%`,
                    left: `${10 + i * 15}%`
                  }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Blobs -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute top-0 left-0 w-48 h-48 lg:w-96 lg:h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob">
      </div>
      <div
        class="absolute bottom-0 right-0 w-48 h-48 lg:w-96 lg:h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob"
        style="animation-delay: 2s"></div>
      <div
        class="absolute top-1/2 right-1/4 w-36 h-36 lg:w-72 lg:h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-blob"
        style="animation-delay: 4s"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(15px, -25px) scale(1.1);
  }
  66% {
    transform: translate(-10px, 10px) scale(0.9);
  }
}

@keyframes shine {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(5px, -5px); }
  50% { transform: translate(-5px, 5px); }
  75% { transform: translate(3px, -3px); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-5px, 5px); }
  50% { transform: translate(5px, -5px); }
  75% { transform: translate(-3px, 3px); }
}

@keyframes float3 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(3px, 3px); }
  50% { transform: translate(-3px, -3px); }
  75% { transform: translate(5px, 5px); }
}

@keyframes float4 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-3px, -3px); }
  50% { transform: translate(3px, 3px); }
  75% { transform: translate(-5px, -5px); }
}

@keyframes float5 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(4px, -4px); }
  50% { transform: translate(-4px, 4px); }
  75% { transform: translate(2px, -2px); }
}

.animate-slideInLeft {
  animation: slideInLeft 0.7s ease-out forwards;
}

.animate-slideInRight {
  animation: slideInRight 0.7s ease-out forwards;
  opacity: 0;
}

.animate-blob {
  animation: blob 7s infinite;
}

.lg\:group-hover\:animate-shine {
  animation: shine 1.5s ease-in-out infinite;
}

.lg\:group-hover\:animate-float-1 {
  animation: float1 3s ease-in-out infinite;
}

.lg\:group-hover\:animate-float-2 {
  animation: float2 4s ease-in-out infinite;
  animation-delay: 0.2s;
}

.lg\:group-hover\:animate-float-3 {
  animation: float3 3.5s ease-in-out infinite;
  animation-delay: 0.4s;
}

.lg\:group-hover\:animate-float-4 {
  animation: float4 4.5s ease-in-out infinite;
  animation-delay: 0.6s;
}

.lg\:group-hover\:animate-float-5 {
  animation: float5 3.8s ease-in-out infinite;
  animation-delay: 0.8s;
}

 @media (max-width: 768px) {
  @keyframes blob {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(10px, -15px) scale(1.05);
    }
    66% {
      transform: translate(-5px, 5px) scale(0.95);
    }
  }
}

 .delay-100 {
  transition-delay: 100ms;
}

.delay-200 {
  transition-delay: 200ms;
}

.delay-300 {
  transition-delay: 300ms;
}
</style>