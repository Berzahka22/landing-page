<template>
  <section class="min-h-screen bg-[#0d1117] text-white p-8 md:p-16 flex flex-col md:flex-row items-stretch justify-between gap-12">
    <div class="max-w-[90%] mx-auto flex flex-col md:flex-row items-stretch gap-12">
      
      <div class="max-w-xl flex flex-col justify-center animate-in fade-in slide-in-from-left-8 duration-1000">
        <div class="flex items-center gap-2 mb-8">
          <div class="w-5 h-5 border-2 border-blue-400 rounded-full animate-ping absolute opacity-20"></div>
          <div class="w-5 h-5 border-2 border-blue-400 rounded-full relative"></div>
          <span class="font-bold tracking-widest uppercase text-sm text-blue-400">TOEIC</span>
        </div>

        <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Trecare With <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">TOEIC Training</span>
        </h1>
        
        <p class="text-gray-400 text-lg mb-10 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. 
          Aliquam in hendrerit urna.
        </p>

        <div class="flex gap-4 items-center">
          <button class="bg-[#007bff] hover:bg-blue-600 hover:scale-105 active:scale-95 px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/40">
            Text button
          </button>
          <button class="border border-gray-600 hover:border-blue-400 hover:text-blue-400 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:bg-blue-400/5">
            Text button
          </button>
        </div>

        <div class="mt-20 relative  w-90 h-20 ">
          <div class="absolute inset-0    transition-all duration-700 animate-pulse"></div>
          
          <img 
            src="/public/assets/img/cube.png" 
            alt="Decorative" 
            class="relative   transition-all duration-500 hover:scale-110 hover:rotate-6 transform" 
          />
        </div>
      </div>

      <div class="bg-[#080B14] rounded-3xl p-8 w-full md:w-[900px] flex flex-col border border-gray-800 hover:border-blue-500/30 transition-all duration-700 group shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000">
        
        <div class="flex justify-between items-center mb-8">
          <span class="text-xs text-gray-500 uppercase tracking-widest">Featured Module</span>
          <button class="border border-gray-600 hover:border-blue-400 hover:text-blue-400 px-8 py-2 rounded-lg font-medium transition-all duration-300 transform hover:bg-blue-400/5">
            Text button
          </button>      
        </div>
        
        <div class="relative rounded-2xl overflow-hidden mb-8 flex-grow shadow-inner ">
          <img 
            src="/public/assets/img/file.png" 
            alt="Meeting" 
            class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#080B14] to-transparent opacity-60"></div>
          <div class="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div class="mt-auto"> 
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 border border-orange-500 rounded-full flex items-center justify-center text-sm text-orange-500 font-bold group-hover:bg-orange-500 group-hover:text-white transition-all">×</div>
            <h2 class="text-3xl font-bold tracking-tight">Interview Preparation</h2>
          </div>

          <p class="text-gray-400 text-sm leading-relaxed max-w-md">
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. 
            Maecenas ut et massa mi aliquam in hendrerit urna.
          </p>
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

@keyframes slide-in-left {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slide-in-right {
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.fade-in { animation: fade-in 1.2s ease-out; }
.slide-in-from-left-8 { animation: slide-in-left 1s ease-out; }
.slide-in-from-right-8 { animation: slide-in-right 1s ease-out; }
</style>
