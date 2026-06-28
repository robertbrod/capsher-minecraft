import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-mvgallery',
  imports: [MatCardModule, CarouselComponent],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class MVGallery {
  projectImages = [
    { src: 'andy_3.png', caption: 'HV Preparations', submitter: 'Andy' },
    { src: 'andy_4.png', caption: 'ICBMs', submitter: 'Andy' },
    { src: 'andy_5.png', caption: 'LeBron and Air Defense Cannons', submitter: 'Andy' },
    { src: 'andy_6.png', caption: 'Oil Rig and Diesel Production', submitter: 'Andy' },
    { src: 'andy_7.png', caption: 'Quad Kanthal EBF', submitter: 'Andy' },
    { src: 'andy_10.png', caption: 'Tower, Observatory, and Ship', submitter: 'Andy' },

    { src: 'rob_2.png', caption: 'Night cyber vibes', submitter: 'Rob' },
    { src: 'rob_3.png', caption: 'Logistics', submitter: 'Rob' },
    { src: 'rob_4.png', caption: 'Benzene', submitter: 'Rob' },
    { src: 'rob_5.png', caption: 'Fish Pixel Art', submitter: 'Rob' },
    { src: 'rob_6.png', caption: 'Fish Murderer', submitter: 'Rob' },
    { src: 'travis_3.webp', caption: 'Farms galore', submitter: 'Travis' },
    { src: 'travis_4.webp', caption: 'Recipes', submitter: 'Travis' },
    { src: 'travis_5.webp', caption: 'Storage', submitter: 'Travis' },
    { src: 'travis_6.webp', caption: 'Machines', submitter: 'Travis' },
    { src: 'travis_7.webp', caption: 'Machines cont.', submitter: 'Travis' },
    { src: 'travis_8.webp', caption: 'Machines cont.', submitter: 'Travis' },
  ];
}
