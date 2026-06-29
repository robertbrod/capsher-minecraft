import { Component, input, signal, computed, effect } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class CarouselComponent {
  slides = input.required<Slide[]>();
  autoPlay = input(true);
  interval = input(5000);

  protected currentIndex = signal(0);
  protected currentSlide = computed(() => this.slides()[this.currentIndex()]);

  constructor() {
    effect((onCleanup) => {
      if (this.autoPlay()) {
        const timer = setInterval(() => this.next(), this.interval());
        onCleanup(() => clearInterval(timer));
      }
    });
  }

  next() {
    this.currentIndex.update((idx) => (idx + 1) % this.slides().length);
  }

  prev() {
    this.currentIndex.update((idx) => (idx - 1 + this.slides().length) % this.slides().length);
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }
}

  interface Slide {
    src: string;
    caption: string;
    submitter: string;
  }
