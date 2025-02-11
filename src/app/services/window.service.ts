import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() { }

  openFullScreen(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.requestFullscreen) {
      target.requestFullscreen(); // For most modern browsers
    } else if ((target as any).webkitRequestFullscreen) {
      (target as any).webkitRequestFullscreen(); // For Safari
    } else if ((target as any).msRequestFullscreen) {
      (target as any).msRequestFullscreen(); // For IE11
    }
  }
}
