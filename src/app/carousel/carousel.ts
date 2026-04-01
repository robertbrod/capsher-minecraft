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
  images = input.required<string[]>();
  autoPlay = input(true);
  interval = input(5000);

  protected currentIndex = signal(0);
  protected currentImage = computed(() => this.images()[this.currentIndex()]);

  constructor() {
    effect((onCleanup) => {
      if (this.autoPlay()) {
        const timer = setInterval(() => this.next(), this.interval());
        onCleanup(() => clearInterval(timer));
      }
    });
  }

  next() {
    this.currentIndex.update((idx) => (idx + 1) % this.images().length);
  }

  prev() {
    this.currentIndex.update((idx) => (idx - 1 + this.images().length) % this.images().length);
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }
}
