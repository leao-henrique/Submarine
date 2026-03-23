import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      [class.bg-ocean-950]="scrolled"
      [class.shadow-2xl]="scrolled"
      [class.py-3]="scrolled"
      [class.py-6]="!scrolled"
    >
      <nav class="max-w-7xl mx-auto px-6 flex items-center justify-between">

        <!-- Logo -->
        <a href="#home" class="flex items-center gap-3 group">
          <img
            src="http://www.submarine.srv.br/wp-content/uploads/2023/09/logo_submarine.png"
            alt="Submarine"
            class="h-10 w-auto brightness-0 invert transition-all duration-300 group-hover:opacity-80"
          />
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a *ngFor="let item of navItems"
            [href]="item.href"
            class="text-white/80 hover:text-cyan-400 text-sm font-medium tracking-wide transition-colors duration-200">
            {{ item.label }}
          </a>
          <a
            href="https://wa.me/5547991584282"
            target="_blank"
            class="bg-cyan-400 hover:bg-cyan-300 text-ocean-950 font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/30 hover:-translate-y-0.5">
            Falar no WhatsApp
          </a>
        </div>

        <!-- Mobile menu button -->
        <button
          (click)="mobileOpen = !mobileOpen"
          class="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
          <i class="fa-solid text-xl" [class.fa-bars]="!mobileOpen" [class.fa-xmark]="mobileOpen"></i>
        </button>
      </nav>

      <!-- Mobile menu -->
      <div
        class="md:hidden overflow-hidden transition-all duration-300 bg-ocean-950"
        [class.max-h-0]="!mobileOpen"
        [class.max-h-96]="mobileOpen">
        <div class="px-6 py-4 flex flex-col gap-4 border-t border-white/10">
          <a *ngFor="let item of navItems"
            [href]="item.href"
            (click)="mobileOpen = false"
            class="text-white/80 hover:text-cyan-400 text-sm font-medium py-1 transition-colors">
            {{ item.label }}
          </a>
          <a
            href="https://wa.me/5547991584282"
            target="_blank"
            class="bg-cyan-400 text-ocean-950 font-bold text-sm px-5 py-3 rounded-full text-center mt-2">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  `,
})
export class NavbarComponent implements OnInit {
  scrolled = false;
  mobileOpen = false;

  navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Certificações', href: '#certificacoes' },
    { label: 'Contato', href: '#contato' },
  ];

  ngOnInit() {}

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }
}
