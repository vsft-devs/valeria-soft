import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Router, Scroll } from '@angular/router';
import { DataService } from './services/data.service';
import AOS from 'aos';
import { filter } from 'rxjs';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'valeria-soft';

  isSticky: boolean = false;
  persona: any;
  responsiveOptions: any;

  images = [
    {
      src: 'assets/images/consulting.webp',
      alt: 'Consulting.',
    },
    {
      src: 'assets/images/advisory.png',
      alt: 'Advisory.',
    },
    {
      src: 'assets/images/product.png',
      alt: 'Product.',
    },
    {
      src: 'assets/images/global.png',
      alt: 'Global.',
    },
    {
      src: 'assets/images/strategic-alliance.png',
      alt: 'Strategic Alliance.',
    }
  ];

  chooseUs = [
    'Valeria Softwares specializes in helping some of the world\'s most established companies to stay the most loved brands in today’s fast-changing technology landscape by advancing every aspect of how they serve their customers, with Enhanced customer experience, Automated workflow & Modernized business process.',
    'With a unique industry-based, consultative approach we have worked closely with large organizations to Digitally transformation them as stronger businesses.',
    'Having highly skilled and Experienced technocrats, Valeria Softwares helps many of the best-known organizations in every varied industry and geography envision, build, manage and efficiently transform the business growth.',
  ];

  companies = [
    {
      name: 'GMR Aerocity',
      path: 'assets/images/gmr-aero-logo.png',
      alt: 'GMR Aerocity Logo.',
      desc: 'GMR Aerocity, located near Delhi International Airport, is a comprehensive lifestyle and business hub offering a blend of commercial spaces, luxury hotels, dining, shopping, and entertainment options.',
      site: 'https://gmraerocity.com',
      images: [
        {
          src: 'assets/images/gmr-delhi.png',
          alt: 'GMR Delhi Office.'
        },
        {
          src: 'assets/images/web-hospitality-1.jpg',
          alt: 'Web Hospitality.'
        }
      ],
    },
    {
      name: 'GMR RAXA Techno | Expert Security',
      path: 'assets/images/gmr-logo-small.png',
      alt: 'GMR RAXA Techno Logo.',
      desc: "RAXA Techno Security Solutions, a subsidiary of the GMR Group, provides integrated security services across various industries and locations.",
      site: 'https://www.gmrgroup.in/aerobusiness/raxa-tech',
      images: [
        {
          src: 'assets/images/raxa-banner-new-1.jpg',
          alt: 'RAXA Banner.',
        }, 
        {
          src: 'assets/images/aviation-academy-class.jpg',
          alt: 'GMR Academy Class.',
        },
        {
          src: 'assets/images/aviation.jpg',
          alt: 'Aircraft.',
        }
      ]
    },
    {
      name: 'GMR Aviation - Experience Personalised luxury air travel',
      path: 'assets/images/aviation-logo.png',
      alt: 'GMR Aviation Logo.',
      desc: 'GMR Aviation, a subsidiary of the GMR Group, is a leading air charter company in India, established in 2006. They offer personalized luxury air travel services, operating over 10,000 flights and covering more than 200 airports across India.',
      site: 'https://www.gmraviation.com/',
      images: [
        {
          src: 'assets/images/av-exterior-6.jpg',
          alt: 'Aircraft Exterior.',
        },
        {
          src: 'assets/images/fleet-show.jpg',
          alt: 'Fleet Show.',
        },
        {
          src: 'assets/images/av-Group46.png',
          alt: 'Aviation Group.',
        }
      ]
    },
    {
      name: 'TAZO Home',
      path: 'assets/images/tazo.png',
      alt: 'Tazo Logo.',
      desc: 'Tazo Home offers a range of natural, eco-friendly cleaning products designed to keep your home spotless and safe. Their product line includes solutions for surface, bathroom, kitchen, and laundry cleaning, all made from100% natural ingredients.',
      site: 'https://tazohome.com/',
      images: [
        {
          src: 'assets/images/tazo-1.png',
          alt: 'Tazo Image 1.',
        },
        {
          src: 'assets/images/tazo-2.jpg',
          alt: 'Tazo Image 2.',
        },
        {
          src: 'assets/images/tazo-3.jpg',
          alt: 'Tazo Image 3.',
        }
      ]
    },
    {
      name: 'Wealthworks Partners',
      path: 'assets/images/wwpts3.png',
      alt: 'Wealthworks Partners Logo.',
      desc: 'Wealthworks Partners, Inc is a leading professional advisory firm and offering six service lines that cover a broad range of professional services.',
      site: 'https://wwpts.com/',
      images: [
        {
          src: 'assets/images/wwp-1.jpg',
          alt: 'WWP Image 1.',
        },
        {
          src: 'assets/images/wwp-2.jpg',
          alt: 'WWP Image 2.',
        },
        {
          src: 'assets/images/wwp-3.jpg',
          alt: 'WWP Image 3.',
        }        
      ]
    },
  ];

  constructor(private router: Router, private dataservice: DataService) {
    this.persona = this.dataservice.getPersonaData();
    AOS.init();
    Carousel.prototype.onTouchMove = () => {};
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.router.events
      .pipe(filter((e) => e instanceof Scroll))
      .subscribe((e: any) => {
        if (e.anchor) {
          const element = document.getElementById(e.anchor);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
  }

  componentsMap: { [key: string]: any } = {
    Header: HeaderComponent,
    Footer: FooterComponent,
  };
  getComponentName(template: string): any {
    return this.componentsMap[template];
  }

  getHeaderComponent() {
    return this.componentsMap['Header'];
  }
  getFooterComponent() {
    return this.componentsMap['Footer'];
  }
}
