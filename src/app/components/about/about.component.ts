import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="sobre" class="py-28 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <!-- Grid layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <!-- Left: Image collage -->
          <div class="relative">
            <!-- Main image -->
            <div class="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1601581875039-e899893d520c?w=800&q=80&auto=format&fit=crop"
                alt="Mergulhador comercial em operação"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Floating card -->
            <div class="absolute -bottom-6 -right-6 bg-ocean-950 text-white p-5 rounded-2xl shadow-2xl max-w-[200px]">
              <div class="text-4xl font-black text-cyan-400">1987</div>
              <div class="text-white/60 text-xs mt-1 leading-snug">Fundada em São Francisco do Sul, SC</div>
            </div>
            <!-- Floating badge -->
            <div class="absolute -top-4 -left-4 bg-cyan-400 text-ocean-950 p-4 rounded-xl shadow-xl">
              <i class="fa-solid fa-shield-halved text-2xl"></i>
            </div>
          </div>

          <!-- Right: Content -->
          <div>
            <!-- Label -->
            <div class="flex items-center gap-3 mb-5">
              <div class="w-10 h-px bg-cyan-400"></div>
              <span class="text-cyan-600 text-sm font-semibold uppercase tracking-widest">Sobre a Submarine</span>
            </div>

            <h2 class="text-4xl md:text-5xl font-black text-ocean-950 leading-tight mb-6">
              Mais de três décadas<br>em operações subaquáticas.
            </h2>

            <p class="text-slate-500 text-lg leading-relaxed mb-6">
              A Submarine nasceu em São Francisco do Sul com uma missão clara: oferecer serviços
              submarinos de alto padrão para a indústria naval e portuária. Com mergulhadores
              certificados pela <strong class="text-slate-700">ABENDI</strong>, operamos com os
              mais rígidos protocolos de segurança, em conformidade com as normas da
              <strong class="text-slate-700">Marinha do Brasil e NORMAM</strong>.
            </p>

            <p class="text-slate-500 text-lg leading-relaxed mb-10">
              Nossa equipe está disponível <strong class="text-slate-700">24 horas por dia</strong>,
              atendendo os portos de São Francisco do Sul, Paranaguá e Itajaí com agilidade e
              precisão cirúrgica.
            </p>

            <!-- Feature list -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div *ngFor="let feature of features"
                class="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                <div class="w-8 h-8 bg-ocean-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i [class]="'fa-solid ' + feature.icon + ' text-ocean-600 text-sm'"></i>
                </div>
                <span class="text-slate-700 text-sm font-medium leading-snug">{{ feature.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  features = [
    { icon: 'fa-user-shield', text: 'Mergulhadores ABENDI certificados' },
    { icon: 'fa-clock', text: 'Operação 24h, 7 dias por semana' },
    { icon: 'fa-anchor', text: 'Portos de SC e PR cobertos' },
    { icon: 'fa-scale-balanced', text: 'Conformidade NORMAM/DPC' },
    { icon: 'fa-video', text: 'Relatórios com foto e vídeo subaquáticos' },
    { icon: 'fa-ship', text: 'Transporte marítimo de pessoal e equipamentos' },
  ];
}
