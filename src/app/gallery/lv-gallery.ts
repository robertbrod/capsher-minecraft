import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-lvgallery',
  imports: [MatCardModule, CarouselComponent],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class LVGallery {
  projectImages = [
    { src: 'andy_2.png', caption: 'Star Destroyer - LV Base', submitter: 'Andy' },

    { src: 'ethan_4.png', caption: 'Whimsical lava pumping', submitter: 'Ethan' },

    { src: 'jd_2.png', caption: 'Castle at night', submitter: 'JD' },
    
    { src: 'mark_1.jpg', caption: 'Wine night', submitter: 'Mark' },

    { src: 'nicholas_1.png', caption: 'Sugarcane by the river', submitter: 'Nicholas' },
    { src: 'nicholas_2.png', caption: 'Serene cabin', submitter: 'Nicholas' },
    { src: 'nicholas_3.png', caption: 'Tank and steam', submitter: 'Nicholas' },

    { src: 'travis_2.webp', caption: '', submitter: 'Travis' },
  ];
}
