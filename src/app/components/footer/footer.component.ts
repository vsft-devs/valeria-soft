import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isScrollToTop: boolean = false;

  // @HostListener('window:scroll', [])
  // onWindowScroll(): void {
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   this.isScrollToTop = scrollTop > 200;
  // }

  // scrollToTop(): void {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }
}
