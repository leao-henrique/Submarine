import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="servicos" class="py-28 bg-slate-50">
      <div class="max-w-7xl mx-auto px-6">

        <!-- Section header -->
        <div class="text-center max-w-2xl mx-auto mb-16">
          <div class="flex items-center justify-center gap-3 mb-5">
            <div class="w-10 h-px bg-cyan-400"></div>
            <span class="text-cyan-600 text-sm font-semibold uppercase tracking-widest">O que fazemos</span>
            <div class="w-10 h-px bg-cyan-400"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-ocean-950 leading-tight mb-4">
            Serviços especializados<br>para ambientes submarinos
          </h2>
          <p class="text-slate-500 text-lg">
            Atuamos em toda a cadeia de serviços subaquáticos para a indústria naval,
            portuária e de infraestrutura.
          </p>
        </div>

        <!-- Services grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            *ngFor="let service of services; let i = index"
            class="group relative bg-white rounded-2xl p-7 border border-slate-100 hover:border-ocean-600/30 hover:shadow-2xl hover:shadow-ocean-900/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden">

            <!-- Background accent on hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-ocean-950 to-ocean-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

            <!-- Content -->
            <div class="relative z-10">
              <!-- Icon -->
              <div class="w-12 h-12 bg-ocean-100 group-hover:bg-cyan-400/20 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <i [class]="'fa-solid ' + service.icon + ' text-ocean-700 group-hover:text-cyan-400 text-lg transition-colors duration-300'"></i>
              </div>

              <!-- Title -->
              <h3 class="text-lg font-bold text-slate-900 group-hover:text-white mb-3 transition-colors duration-300">
                {{ service.title }}
              </h3>

              <!-- Description -->
              <p class="text-slate-500 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300">
                {{ service.description }}
              </p>

              <!-- Arrow indicator -->
              <div class="mt-5 flex items-center gap-2 text-ocean-600 group-hover:text-cyan-400 transition-colors duration-300">
                <span class="text-xs font-semibold uppercase tracking-wider">Saiba mais</span>
                <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="text-center mt-14">
          <p class="text-slate-500 mb-5">Sua operação tem requisitos específicos? Nossa equipe técnica elabora uma solução sob medida.</p>
          <a
            href="https://wa.me/5547991584282"
            target="_blank"
            class="inline-flex items-center gap-3 bg-ocean-950 hover:bg-ocean-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
            <i class="fa-brands fa-whatsapp text-xl text-cyan-400"></i>
            Solicitar proposta técnica
          </a>
        </div>

      </div>
    </section>
  `,
})
export class ServicesComponent {
  services = [
    {
      icon: 'fa-eye',
      title: 'Inspeção Visual Subaquática',
      description: 'Inspeção detalhada de cascos, estruturas portuárias e dutos com registro fotográfico e de vídeo em alta resolução.'
    },
    {
      icon: 'fa-wave-square',
      title: 'Medição por Ultrassom',
      description: 'Medição de espessura de paredes e detecção de corrosão em estruturas metálicas submersas com equipamentos de última geração.'
    },
    {
      icon: 'fa-fire-flame-curved',
      title: 'Solda e Corte Subaquático',
      description: 'Soldagem e corte molhado/seco por mergulhadores certificados AWS, para reparos emergenciais e estruturais.'
    },
    {
      icon: 'fa-route',
      title: 'Lançamento de Dutos',
      description: 'Instalação de emissários, gasodutos e adutoras submarinas com acompanhamento técnico especializado.'
    },
    {
      icon: 'fa-ship',
      title: 'Salvamento Marítimo',
      description: 'Operações de salvamento de embarcações e estruturas oceânicas com equipamentos apropriados para cada operação.'
    },
    {
      icon: 'fa-anchor',
      title: 'Amarração e Atracação',
      description: 'Serviços de amarração em monobóias e berços de bóias, acoplamentos de superfície e subsuperfície.'
    },
    {
      icon: 'fa-arrows-down-to-line',
      title: 'Dragagem Air-Lift',
      description: 'Dragagem por sucção pneumática em profundidades de até 30 metros para desobstrução e manutenção de leitos.'
    },
    {
      icon: 'fa-gauge-high',
      title: 'Medição Eletroquímica',
      description: 'Medição de potencial eletroquímico e avaliação de sistemas de proteção catódica em estruturas submarinas.'
    },
    {
      icon: 'fa-water',
      title: 'Manutenção de Usinas',
      description: 'Serviços especializados em instalações hidrelétricas, incluindo inspeção e manutenção de grades e comportas.'
    },
  ];
}
