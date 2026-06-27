import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-gallery',
  imports: [MatCardModule, CarouselComponent],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  projectImages = [
    'andy_0.png',
    'andy_1.png',
    'andy_2.png',
    'andy_3.png',
    'andy_4.png',
    'andy_5.png',
    'andy_6.png',
    'andy_7.png',
    'andy_8.png',
    'bassel_1.png',
    'ethan_0.png',
    'ethan_1.png',
    'ethan_2.png',
    'ethan_3.png',
    'ethan_4.png',
    'jd_1.png',
    'jd_2.png',
    'josh_1.png',
    'mark_1.jpg',
    'nicholas_1.png',
    'nicholas_2.png',
    'nicholas_3.png',
    'rob_1.png',
    'rob_2.png',
    'rob_3.png',
    'rob_4.png',
    'rob_5.png',
    'rob_6.png',
    'rob_7.png',
    'rob_8.png',
    'travis_1.webp',
    'travis_2.webp',
    'travis_3.webp',
    'travis_4.webp',
    'travis_5.webp',
    'travis_6.webp',
    'travis_7.webp',
    'travis_8.webp',
    'tripper_1.png',
  ];
}
