// animated-circles.component.ts
import { Component, OnInit, OnDestroy, ElementRef, NgZone } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

interface Circle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  direction: number;
  opacity: number;
  hue: number;
  pulsePhase: number;
  originalSize: number;
}

@Component({
  selector: 'app-animated-background',
  template: `
    <div #container class="fixed top-0 left-0 w-full h-full overflow-hidden"
         style="background: linear-gradient(to bottom right, #EEF2FF, #E0E7FF)">
      <svg class="w-full h-full">
        <defs>
          <radialGradient id="circleGradient">
            <stop offset="0%" stop-color="white" stop-opacity="0.9" />
            <stop offset="100%" stop-color="rgb(59, 130, 246)" stop-opacity="0.2" />
          </radialGradient>
        </defs>
        <g *ngFor="let circle of circles">
          <!-- Main circle with sharp edges -->
          <circle
            [attr.cx]="circle.x + '%'"
            [attr.cy]="circle.y + '%'"
            [attr.r]="circle.size + 'vmin'"
            [style.fill]="'hsl(' + (210 + circle.hue) + ', 100%, 65%)'"
            [style.opacity]="circle.opacity"
            style="transition: all 200ms ease-in-out"
          />
          <!-- Smaller inner circle for depth -->
          <circle
            [attr.cx]="circle.x + '%'"
            [attr.cy]="circle.y + '%'"
            [attr.r]="circle.size * 0.6 + 'vmin'"
            [style.fill]="'hsl(' + (210 + circle.hue) + ', 100%, 75%)'"
            [style.opacity]="circle.opacity * 0.8"
            style="transition: all 200ms ease-in-out"
          />
        </g>
      </svg>
    </div>
  `,
  styles: []
})
export class AnimatedBackgroundComponent implements OnInit, OnDestroy {
  circles: Circle[] = [];
  mousePos = { x: 0, y: 0 };
  private animationFrame: any;
  private mouseMoveSubscription?: Subscription;

  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.initializeCircles();
    this.setupMouseTracking();
    this.startAnimation();
  }

  ngOnDestroy(): void {
    if (this.animationFrame) {
      clearInterval(this.animationFrame);
    }
    this.mouseMoveSubscription?.unsubscribe();
  }

  private initializeCircles(): void {
    this.circles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2, // Slightly larger base size
      speed: Math.random() * 0.4 + 0.1,
      direction: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.4 + 0.3, // Increased minimum opacity
      hue: Math.random() * 40 - 20, // Reduced color variation
      pulsePhase: Math.random() * Math.PI * 2,
      originalSize: Math.random() * 3 + 2
    }));
  }

  private setupMouseTracking(): void {
    this.ngZone.runOutsideAngular(() => {
      this.mouseMoveSubscription = fromEvent<MouseEvent>(this.elementRef.nativeElement, 'mousemove')
        .subscribe((e: MouseEvent) => {
          const rect = this.elementRef.nativeElement.getBoundingClientRect();
          this.mousePos = {
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100
          };
        });
    });
  }

  private startAnimation(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationFrame = setInterval(() => {
        this.updateCircles();
        this.ngZone.run(() => {});
      }, 50);
    });
  }

  private updateCircles(): void {
    this.circles = this.circles.map(circle => {
      // Basic movement
      let newX = circle.x + Math.cos(circle.direction) * circle.speed;
      let newY = circle.y + Math.sin(circle.direction) * circle.speed;

      // Bounce off edges
      if (newX < 0 || newX > 100) {
        circle.direction = Math.PI - circle.direction;
        newX = circle.x;
      }
      if (newY < 0 || newY > 100) {
        circle.direction = -circle.direction;
        newY = circle.y;
      }

      // Calculate distance from mouse
      const dx = this.mousePos.x - newX;
      const dy = this.mousePos.y - newY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Mouse interaction effect
      const repelStrength = Math.max(0, 1 - distance / 20) * 2;
      newX -= dx * repelStrength * 0.1;
      newY -= dy * repelStrength * 0.1;

      // Update pulse phase
      const newPulsePhase = (circle.pulsePhase + 0.05) % (Math.PI * 2);

      // Calculate new size with pulse effect
      const pulseEffect = Math.sin(newPulsePhase) * 0.2 + 1; // Reduced pulse amplitude
      const newSize = circle.originalSize * pulseEffect;

      return {
        ...circle,
        x: newX,
        y: newY,
        pulsePhase: newPulsePhase,
        size: newSize
      };
    });
  }
}
