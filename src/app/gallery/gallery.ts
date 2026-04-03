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
    'andy_base.png',
    'ethan_terrain.png',
    'josh_house.png',
    'nicholas_home1.png',
    'nicholas_home2.png',
    'nicholas_steam.png',
    'rob_base.png',
    'rob_farm.png',
    'tripper_tent.png',
  ];
}
