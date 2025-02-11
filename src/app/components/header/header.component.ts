import { AfterViewInit, Component, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy{

  ngAfterViewInit(): void {
  }
  @Input() props!: any;
  @Input() template!: any;
  openSubmenu: boolean = false;

  isScroll = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
      header?.classList.add('scrolled');
      this.isScroll = true;
    } else {
      header?.classList.remove('scrolled');
      this.isScroll = false;
    }
  }

  objKeys = Object.keys;
  isMenuOpen = false;

  constructor(private renderer: Renderer2) {
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }



  ngOnInit(): void {
  }

  showSubMenu(submenu: any) {
    if(!submenu) {
      this.openSubmenu = false;
    } else {
      this.openSubmenu = true;
    }

  }

  hideSubMenu(submenu: any) {
    if(!submenu) {
      this.openSubmenu = false;
    }
    this.openSubmenu = false;
  }

  ngOnDestroy(): void {
    this.openSubmenu = false;
  }


}
