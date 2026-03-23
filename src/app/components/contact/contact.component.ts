import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contato" class="py-28 bg-slate-50">
      <div class="max-w-7xl mx-auto px-6">

        <!-- Header -->
        <div class="text-center max-w-xl mx-auto mb-16">
          <div class="flex items-center justify-center gap-3 mb-5">
            <div class="w-10 h-px bg-cyan-400"></div>
            <span class="text-cyan-600 text-sm font-semibold uppercase tracking-widest">Fale conosco</span>
            <div class="w-10 h-px bg-cyan-400"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-ocean-950 mb-4">Solicite uma<br>proposta técnica</h2>
          <p class="text-slate-500 text-lg">Nossa equipe analisa cada operação e responde com agilidade. Para urgências, acione diretamente pelo WhatsApp.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">

          <!-- Left: Contact info -->
          <div class="lg:col-span-2 flex flex-col gap-5">

            <!-- WhatsApp CTA (highlight) -->
            <a
              href="https://wa.me/5547991584282"
              target="_blank"
              class="flex items-center gap-4 bg-ocean-950 hover:bg-ocean-800 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group">
              <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <i class="fa-brands fa-whatsapp text-green-400 text-2xl"></i>
              </div>
              <div>
                <div class="text-white/60 text-xs uppercase tracking-widest mb-0.5">WhatsApp (preferencial)</div>
                <div class="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">+55 47 99158-4282</div>
              </div>
            </a>

            <!-- Phone 1 -->
            <a
              href="tel:+5547996050497"
              class="flex items-center gap-4 bg-white hover:bg-slate-50 border border-slate-200 p-5 rounded-2xl transition-all duration-200 group">
              <div class="w-10 h-10 bg-ocean-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-phone text-ocean-700 text-sm"></i>
              </div>
              <div>
                <div class="text-slate-400 text-xs uppercase tracking-widest mb-0.5">Telefone</div>
                <div class="text-slate-800 font-semibold group-hover:text-ocean-700 transition-colors">+55 47 99605-0497</div>
              </div>
            </a>

            <!-- Phone 2 -->
            <a
              href="tel:+5547996586089"
              class="flex items-center gap-4 bg-white hover:bg-slate-50 border border-slate-200 p-5 rounded-2xl transition-all duration-200 group">
              <div class="w-10 h-10 bg-ocean-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-phone text-ocean-700 text-sm"></i>
              </div>
              <div>
                <div class="text-slate-400 text-xs uppercase tracking-widest mb-0.5">Telefone</div>
                <div class="text-slate-800 font-semibold group-hover:text-ocean-700 transition-colors">+55 47 99658-6089</div>
              </div>
            </a>

            <!-- Email -->
            <a
              href="mailto:submarine@submarine.srv.br"
              class="flex items-center gap-4 bg-white hover:bg-slate-50 border border-slate-200 p-5 rounded-2xl transition-all duration-200 group">
              <div class="w-10 h-10 bg-ocean-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i class="fa-solid fa-envelope text-ocean-700 text-sm"></i>
              </div>
              <div>
                <div class="text-slate-400 text-xs uppercase tracking-widest mb-0.5">E-mail</div>
                <div class="text-slate-800 font-semibold text-sm group-hover:text-ocean-700 transition-colors">submarine&#64;submarine.srv.br</div>
              </div>
            </a>

            <!-- Address -->
            <div class="flex items-start gap-4 bg-white border border-slate-200 p-5 rounded-2xl">
              <div class="w-10 h-10 bg-ocean-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <i class="fa-solid fa-location-dot text-ocean-700 text-sm"></i>
              </div>
              <div>
                <div class="text-slate-400 text-xs uppercase tracking-widest mb-1">Endereço</div>
                <div class="text-slate-700 text-sm leading-relaxed font-medium">
                  Rua Guilherme Luiz Winter, 700<br>
                  Iperoba – São Francisco do Sul<br>
                  Santa Catarina – Brasil
                </div>
              </div>
            </div>

          </div>

          <!-- Right: Form -->
          <div class="lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 class="text-xl font-bold text-ocean-950 mb-6">Envie uma mensagem</h3>

            <form (ngSubmit)="onSubmit()" class="flex flex-col gap-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="flex flex-col gap-1.5">
                  <label class="text-slate-600 text-sm font-medium">Nome</label>
                  <input
                    [(ngModel)]="form.name" name="name"
                    type="text" placeholder="Seu nome completo"
                    class="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-ocean-600/20 focus:border-ocean-600 transition-all" />
                </div>
                <div class="flex flex-col gap-1.5">
                  <label class="text-slate-600 text-sm font-medium">Empresa</label>
                  <input
                    [(ngModel)]="form.company" name="company"
                    type="text" placeholder="Nome da empresa"
                    class="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-ocean-600/20 focus:border-ocean-600 transition-all" />
                </div>
              </div>

              <div class="flex flex-col gap-1.5">
                <label class="text-slate-600 text-sm font-medium">E-mail</label>
                <input
                  [(ngModel)]="form.email" name="email"
                  type="email" placeholder="seu@email.com"
                  class="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-ocean-600/20 focus:border-ocean-600 transition-all" />
              </div>

              <div class="flex flex-col gap-1.5">
                <label class="text-slate-600 text-sm font-medium">Serviço de interesse</label>
                <select
                  [(ngModel)]="form.service" name="service"
                  class="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-ocean-600/20 focus:border-ocean-600 transition-all appearance-none bg-white">
                  <option value="">Selecione um serviço</option>
                  <option>Inspeção Visual Subaquática</option>
                  <option>Medição por Ultrassom</option>
                  <option>Solda e Corte Subaquático</option>
                  <option>Lançamento de Dutos</option>
                  <option>Salvamento Marítimo</option>
                  <option>Dragagem Air-Lift</option>
                  <option>Outro</option>
                </select>
              </div>

              <div class="flex flex-col gap-1.5">
                <label class="text-slate-600 text-sm font-medium">Mensagem</label>
                <textarea
                  [(ngModel)]="form.message" name="message"
                  rows="4" placeholder="Descreva sua necessidade ou urgência..."
                  class="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-ocean-600/20 focus:border-ocean-600 transition-all resize-none"></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-ocean-950 hover:bg-ocean-800 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <i class="fa-solid fa-paper-plane text-cyan-400"></i>
                Enviar mensagem
              </button>

              <p class="text-center text-slate-400 text-xs">
                Para acionamento imediato, <a href="https://wa.me/5547991584282" target="_blank" class="text-cyan-600 font-semibold hover:underline">acione via WhatsApp</a>
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  `,
})
export class ContactComponent {
  form = {
    name: '',
    company: '',
    email: '',
    service: '',
    message: '',
  };

  onSubmit() {
    const text = encodeURIComponent(
      `Olá! Me chamo ${this.form.name}${this.form.company ? ' da empresa ' + this.form.company : ''}.\n\n` +
      `Tenho interesse em: ${this.form.service || 'Consulta geral'}\n\n` +
      `${this.form.message}`
    );
    window.open(`https://wa.me/5547991584282?text=${text}`, '_blank');
  }
}
