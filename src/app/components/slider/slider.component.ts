import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  companies = [
    'TAZO Home',
    'GMR Aviation',
    'GMR Aerocity',
    'GMR RAXA'
  ];
  allVisibleNames: string[] = [];
  ngOnInit(): void {
    // Duplicate the company names for smooth looping
    this.allVisibleNames = [...this.companies, ...this.companies];
  }
}
