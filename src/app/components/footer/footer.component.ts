import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-ocean-950 text-white">

      <!-- Main footer content -->
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <!-- Brand column -->
          <div class="lg:col-span-2">
            <img
              src="http://www.submarine.srv.br/wp-content/uploads/2023/09/logo_submarine.png"
              alt="Submarine"
              class="h-10 w-auto brightness-0 invert mb-5"
            />
            <p class="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Desde 1987 realizamos serviços submarinos de alta complexidade para a indústria
              naval e portuária nos principais portos do Sul do Brasil.
            </p>
            <!-- Social / WhatsApp -->
            <div class="flex items-center gap-3">
              <a
                href="https://wa.me/5547991584282"
                target="_blank"
                class="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors duration-200">
                <i class="fa-brands fa-whatsapp text-sm"></i>
              </a>
              <a
                href="mailto:submarine@submarine.srv.br"
                class="w-10 h-10 bg-white/10 hover:bg-ocean-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                <i class="fa-solid fa-envelope text-sm"></i>
              </a>
            </div>
          </div>

          <!-- Services -->
          <div>
            <h4 class="text-white font-semibold text-sm uppercase tracking-widest mb-5">Serviços</h4>
            <ul class="flex flex-col gap-3">
              <li *ngFor="let link of serviceLinks">
                <a href="#servicos" class="text-white/50 hover:text-cyan-400 text-sm transition-colors">{{ link }}</a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-white font-semibold text-sm uppercase tracking-widest mb-5">Contato</h4>
            <ul class="flex flex-col gap-3 text-sm text-white/50">
              <li class="flex items-start gap-2">
                <i class="fa-solid fa-location-dot text-cyan-400 mt-0.5 text-xs"></i>
                <span>Rua Guilherme Luiz Winter, 700<br>Iperoba, São Francisco do Sul – SC</span>
              </li>
              <li>
                <a href="tel:+5547996050497" class="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <i class="fa-solid fa-phone text-cyan-400 text-xs"></i>
                  +55 47 99605-0497
                </a>
              </li>
              <li>
                <a href="tel:+5547996586089" class="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <i class="fa-solid fa-phone text-cyan-400 text-xs"></i>
                  +55 47 99658-6089
                </a>
              </li>
              <li>
                <a href="https://wa.me/5547991584282" target="_blank" class="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <i class="fa-brands fa-whatsapp text-cyan-400 text-xs"></i>
                  +55 47 99158-4282
                </a>
              </li>
              <li>
                <a href="mailto:submarine@submarine.srv.br" class="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <i class="fa-solid fa-envelope text-cyan-400 text-xs"></i>
                  submarine&#64;submarine.srv.br
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/10">
        <div class="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-white/30 text-xs">
            © {{ currentYear }} Submarine. Todos os direitos reservados.
          </p>
          <div class="flex items-center gap-4 text-white/30 text-xs">
            <span>Portos atendidos: São Francisco do Sul · Paranaguá · Itajaí</span>
          </div>
        </div>
      </div>

    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  serviceLinks = [
    'Inspeção Visual Subaquática',
    'Medição por Ultrassom',
    'Solda e Corte Subaquático',
    'Lançamento de Dutos',
    'Salvamento Marítimo',
    'Dragagem Air-Lift',
  ];
}
