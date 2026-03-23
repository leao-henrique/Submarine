import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="galeria" class="py-28 bg-white">
      <div class="max-w-7xl mx-auto px-6">

        <!-- Header -->
        <div class="text-center max-w-xl mx-auto mb-14">
          <div class="flex items-center justify-center gap-3 mb-5">
            <div class="w-10 h-px bg-cyan-400"></div>
            <span class="text-cyan-600 text-sm font-semibold uppercase tracking-widest">Operações</span>
            <div class="w-10 h-px bg-cyan-400"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-ocean-950 mb-4">Registro de<br>operações realizadas</h2>
          <p class="text-slate-500">Cada intervenção subaquática é documentada com fotos e vídeo, gerando relatórios técnicos de conformidade para o cliente.</p>
        </div>

        <!-- Masonry-style grid -->
        <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <div
            *ngFor="let image of images"
            class="break-inside-avoid group relative overflow-hidden rounded-2xl">
            <img
              [src]="image.url"
              [alt]="image.alt"
              class="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              [style.aspect-ratio]="image.ratio"
            />
            <!-- Overlay -->
            <div class="absolute inset-0 bg-ocean-950/0 group-hover:bg-ocean-950/60 transition-all duration-300 flex items-end p-5">
              <span class="text-white font-semibold text-sm translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {{ image.alt }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `,
})
export class GalleryComponent {
  images = [
    {
      url: 'https://images.unsplash.com/photo-1600679472829-3044539ce8ed?w=600&q=80',
      alt: 'Mergulhador em inspeção subaquática',
      ratio: '4/3'
    },
    {
      url: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&q=80',
      alt: 'Ambiente marinho profundo',
      ratio: '3/4'
    },
    {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
      alt: 'Operação portuária',
      ratio: '16/9'
    },
    {
      url: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600&q=80',
      alt: 'Inspeção de casco de navio',
      ratio: '4/3'
    },
    {
      url: 'https://images.unsplash.com/photo-1569074183027-83b01f64ebca?w=600&q=80',
      alt: 'Profundidade oceânica',
      ratio: '3/4'
    },
    {
      url: 'https://images.unsplash.com/photo-1577733975522-2e5da26fe2a2?w=600&q=80',
      alt: 'Equipamentos de mergulho profissional',
      ratio: '4/3'
    },
  ];
}
