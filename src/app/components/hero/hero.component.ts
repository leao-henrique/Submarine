import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">

      <!-- Background image with overlay -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=85&auto=format&fit=crop"
          alt="Mergulho comercial"
          class="w-full h-full object-cover"
        />
        <!-- Deep gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-ocean-950/80 via-ocean-900/70 to-ocean-950/95"></div>
        <!-- Subtle texture -->
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/5 via-transparent to-transparent"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 md:pt-28">

        <!-- Badge -->
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8 animate-fade-in">
          <span class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          <span class="text-white/90 text-sm font-medium tracking-widest uppercase">Desde 1987</span>
        </div>

        <!-- Main headline -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6 animate-fade-in-up">
          Engenharia subaquática<br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
            onde outros não chegam.
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
          Inspeções, reparos e intervenções subaquáticas para a indústria naval e portuária.
          Equipe certificada ABENDI, operando 24h nos principais portos do Sul do Brasil.
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <a
            href="https://wa.me/5547991584282"
            target="_blank"
            class="group flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-ocean-950 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/40 hover:-translate-y-1 text-base">
            <i class="fa-brands fa-whatsapp text-xl"></i>
            Falar com Especialista
          </a>
          <a
            href="#servicos"
            class="flex items-center gap-3 text-white/80 hover:text-white border border-white/30 hover:border-white/60 px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 text-base">
            Conhecer Serviços
            <i class="fa-solid fa-arrow-right text-sm"></i>
          </a>
        </div>

        <!-- Stats bar -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-600">
          <div *ngFor="let stat of stats" class="text-center p-4 border-t border-white/20">
            <div class="text-3xl md:text-4xl font-black text-white mb-1">{{ stat.value }}</div>
            <div class="text-white/50 text-xs uppercase tracking-widest font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre" class="text-white/40 hover:text-white/80 transition-colors">
          <i class="fa-solid fa-chevron-down text-xl"></i>
        </a>
      </div>
    </section>
  `,
  imports: [CommonModule],
})
export class HeroComponent {
  stats = [
    { value: '+35', label: 'Anos de operação' },
    { value: '3', label: 'Portos atendidos' },
    { value: '24h', label: 'Disponibilidade' },
    { value: 'ISO', label: '9001 & 45001' },
  ];
}
