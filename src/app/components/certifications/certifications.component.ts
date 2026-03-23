import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="certificacoes" class="py-20 bg-ocean-950">
      <div class="max-w-7xl mx-auto px-6">

        <!-- Header -->
        <div class="text-center mb-14">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-10 h-px bg-cyan-400/50"></div>
            <span class="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Credenciais</span>
            <div class="w-10 h-px bg-cyan-400/50"></div>
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-white">
            Certificados pelas maiores autoridades<br class="hidden md:block"> de classificação marítima
          </h2>
        </div>

        <!-- Certifications grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div
            *ngFor="let cert of certifications"
            class="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 rounded-2xl p-6 text-center transition-all duration-300">
            <div class="w-12 h-12 bg-ocean-800 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan-400/20 transition-colors duration-300">
              <i [class]="'fa-solid ' + cert.icon + ' text-cyan-400 text-lg'"></i>
            </div>
            <div class="text-white font-bold text-sm mb-1">{{ cert.name }}</div>
            <div class="text-white/40 text-xs">{{ cert.description }}</div>
          </div>
        </div>

        <!-- Compliance banner -->
        <div class="bg-gradient-to-r from-ocean-800/50 to-ocean-700/30 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div class="w-14 h-14 bg-cyan-400/10 border border-cyan-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-scale-balanced text-cyan-400 text-2xl"></i>
          </div>
          <div class="flex-1 text-center md:text-left">
            <h3 class="text-white font-bold text-lg mb-1">Conformidade regulatória total</h3>
            <p class="text-white/50 text-sm leading-relaxed">
              Operamos em conformidade com as normas da <strong class="text-white/80">Marinha do Brasil</strong>,
              <strong class="text-white/80">DPC</strong> e <strong class="text-white/80">NORMAM</strong>.
              Todos os mergulhadores possuem certificação <strong class="text-white/80">ABENDI</strong>
              e passam por treinamento contínuo de segurança.
            </p>
          </div>
          <a
            href="#contato"
            class="flex-shrink-0 bg-cyan-400 hover:bg-cyan-300 text-ocean-950 font-bold text-sm px-6 py-3 rounded-full transition-colors whitespace-nowrap">
            Solicitar documentação
          </a>
        </div>

      </div>
    </section>
  `,
})
export class CertificationsComponent {
  certifications = [
    { name: 'ISO 9001:2018', icon: 'fa-certificate', description: 'Gestão da Qualidade' },
    { name: 'ISO 45001:2018', icon: 'fa-shield-halved', description: 'Saúde e Segurança' },
    { name: 'ABENDI', icon: 'fa-user-graduate', description: 'Mergulhadores Certificados' },
    { name: 'ABS', icon: 'fa-ship', description: 'American Bureau of Shipping' },
    { name: 'Bureau Veritas', icon: 'fa-check-double', description: 'Certificadora IWS' },
    { name: "Lloyd's Register", icon: 'fa-anchor', description: 'Classificadora Naval' },
    { name: 'ClassNK', icon: 'fa-star', description: 'Nippon Kaiji Kyokai' },
    { name: 'AWS', icon: 'fa-fire-flame-curved', description: 'Soldagem Subaquática' },
  ];
}
