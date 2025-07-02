import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CarouselComponent } from './components/carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { SliderComponent } from './components/slider/slider.component';
import { HorizontalScrollComponent } from './components/horizontal-scroll/horizontal-scroll.component';
// import { NumberCountComponent } from './components/number-count/number-count.component';
// import { AnimatedBackgroundComponent } from './components/animated-background/animated-background.component';
import { ServicesComponent } from './components/services/services.component';
import { CarouselModule } from 'primeng/carousel';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    // CarouselComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SliderComponent,
    HorizontalScrollComponent,
    // NumberCountComponent,
    // AnimatedBackgroundComponent,
    ServicesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, CarouselModule, AccordionModule, BrowserAnimationsModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
