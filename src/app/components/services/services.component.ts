import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {

  @ViewChild('advisory') watchedElement!: ElementRef;
  private triggered = false;
  ngAfterViewInit(): void {
    this.checkPosition();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkPosition();
  }

  private checkPosition(): void {
    const rect = this.watchedElement.nativeElement.getBoundingClientRect();
    const elementTop = rect.top;
    const triggerPosition = 200;

    if (elementTop <= triggerPosition && !this.triggered) {
      this.triggered = true;
    } else if (elementTop > triggerPosition && this.triggered) {
      this.triggered = false;
    }
  }

}
