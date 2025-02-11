import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss'],
})
export class HorizontalScrollComponent implements OnInit {
  companies = [
    {
      "name": "GMR Aerocity",
      "path": "assets/images/gmr-aero-logo.png",
    },
    {
    "name": "GMR RAXA Techno | Expert Security",
    "path": "assets/images/gmr-logo-small.png"},
    {
      "name": "GMR Aviation - Experience Personalised luxury air travel",
      "path": "assets/images/aviation-logo.png"
    },
    {
      "name": "TAZO Home",
      "path": "assets/images/tazo.png"
    },
    {
      "name": "Wealthworks Partners",
      "path": 'assets/images/wwpts3.png'
    }];
  autoScrollInterval: any;
  loading = false;
  selectedCompany: string;
  isMouseover = false;

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  ngOnInit(): void {
    this.show('GMR Aerocity');
  }

  show(company: string) {
    this.selectedCompany = company;
    this.isMouseover = true;
  }

  hide(company: string) {
    this.isMouseover = false;
    this.selectedCompany = '';
  }
}
