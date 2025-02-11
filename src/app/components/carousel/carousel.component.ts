import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit, OnDestroy {
  slides: any;


  currentIndex: number = 0;
  timeoutId?: number;
  childKey = 0;
  showChild = true;
  childTimeout?: number;
  @ViewChild('carousel') carousel: ElementRef;

  ngAfterViewInit(): void {
    this.carousel.nativeElement.focus();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        this.goToPrevious();
        break;
      case 'ArrowRight':
        this.goToNext();
        break;
      case 'Home':
        this.goToSlide(0);
        break;
      case 'End':
        this.goToSlide(this.slides.length - 1);
        break;
    }
  }

  ngOnInit(): void {
    this.slides = [ {
      path: 'assets/images/business.png',
      content: 'With 350+ strong workforce of technocrats Valeria Soft helps many of the best-known organizations in every varied industry and geography envision, build, manage & efficiently transform the Business Growth'
    },
    {
      path: 'assets/images/consultancy.jpg',
      content: 'To offer Client centric innovative services and Business Solutions in the area of IT Services Outsourcing, Managed Services & Temp Staffing'
    }
  ];
    this.resetTimer();
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    if (this.childTimeout) {
      window.clearTimeout(this.childTimeout);
    }
    this.childKey++;
    this.showChild = false;
    this.timeoutId = window.setTimeout(() => this.goToNext(), 7000);
    this.childTimeout = window.setTimeout(() => (this.showChild = true),1);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 1;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;
    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
    this.resetTimer();
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
    this.resetTimer();
  }

  getCurrentSlideUrl() {
    return this.slides[this.currentIndex].path;
  }

  getCurrentSlideContent() {
    return this.slides[this.currentIndex].content;
  }
}
