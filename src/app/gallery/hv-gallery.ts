import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-hvgallery',
  imports: [MatCardModule, CarouselComponent],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class HVGallery {
  projectImages = [
    { src: 'andy_8.png', caption: 'Keplar Spaceport', submitter: 'Andy' },
    { src: 'andy_9.png', caption: 'Earthrise', submitter: 'Andy' },

  ];
}
