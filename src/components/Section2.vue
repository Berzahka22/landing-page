<template>
  <section class="bg-[#080B14] text-white py-12 md:py-20 pb-16 md:pb-32 px-4">
    <div class="max-w-[84%] mx-auto">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        
        <div class="flex flex-col justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
          <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Drive Success...
            <br/><span class="text-[#ff6600]">thry Ineeam</span>
          </h1>
          <p class="text-gray-400 mb-6 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
          </p>
          
          <div class="flex gap-4">
            <button class="bg-[#ff6600] hover:bg-[#ff8533] px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20">
              Get Started
            </button>
            <button class="border border-gray-600 hover:border-gray-400 px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:bg-white/5">
              Learn More
            </button>
          </div>
        </div>

        <div class="relative group animate-in fade-in zoom-in-95 duration-1000 delay-200">
          <div class="absolute -inset-1 bg-gradient-to-r from-[#ff6600]/20 to-blue-500/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div class="relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl border border-gray-800 transition-transform duration-500 group-hover:-translate-y-2">
            <img src="/public/assets/img/dashboardb.png" alt="Dashboard" class="w-full h-auto object-cover" />
          </div>
        </div>
      </div> 

      <div class="animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
        <h4 class="text-2xl font-bold mb-8 flex items-center gap-3">
          <span class="w-8 h-[2px] bg-[#ff6600]"></span>
          Benefits
        </h4>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="i in 4" :key="i" 
            class="group relative rounded-2xl overflow-hidden h-52 border border-gray-800 bg-[#0d1117] transition-all duration-500 hover:border-[#ff6600]/50 hover:-translate-y-2"
          >
            <div 
              class="absolute inset-0 bg-[url(./assets/img/dashboard2.png)] bg-center bg-cover opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
            ></div>

            <div class="absolute inset-0 bg-gradient-to-t from-[#080B14] via-[#080B14]/40 to-transparent p-6 flex flex-col justify-end">
              
              <p class="text-xs text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
 .animate-in {
  animation-fill-mode: forwards;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in-from-bottom {
  from { transform: translateY(2rem); }
  to { transform: translateY(0); }
}

@keyframes zoom-in {
  from { transform: scale(0.95); }
  to { transform: scale(1); }
}

.fade-in { animation: fade-in 1s; }
.slide-in-from-bottom-8 { animation: slide-in-from-bottom 0.8s; }
.zoom-in-95 { animation: zoom-in 0.8s; }
</style>
