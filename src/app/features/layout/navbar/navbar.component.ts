import { Component, inject, HostListener, signal, WritableSignal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ModeService } from '../../../core/services/mode/mode.service';
import { CommonModule } from '@angular/common';
import { navLink, socialLink } from '../../../shared/interface/nav-link';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  private router = inject(Router);
  private modeService = inject(ModeService);

  isDarkMode = signal(this.modeService.isDarkMode());
  isMobileMenuOpen: WritableSignal<boolean> = signal(false);
  isDropdownOpen: WritableSignal<boolean> = signal(false);

  socialLinks: socialLink[] = [
    { icon: 'fa-facebook', ariaLabel: 'Facebook' },
    { icon: 'fa-twitter', ariaLabel: 'Twitter' },
    { icon: 'fa-instagram', ariaLabel: 'Instagram' },
    { icon: 'fa-tiktok', ariaLabel: 'TikTok' },
    { icon: 'fa-linkedin', ariaLabel: 'LinkedIn' },
    { icon: 'fa-youtube', ariaLabel: 'YouTube' },
  ];

  navLinks: navLink[] = [
    { route: '/home', text: 'Home' },
  ];

  toggleDarkMode(): void {
    this.modeService.toggleDarkMode();
    this.isDarkMode.set(!this.isDarkMode());
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.set(!this.isMobileMenuOpen());
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  toggleDropdown(): void {
    this.isDropdownOpen.set(!this.isDropdownOpen());
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!(event.target as HTMLElement).closest('.dropdown-container')) {
      this.isDropdownOpen.set(false);
    }
  }
}
