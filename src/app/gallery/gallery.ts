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
  projectImages = ['ethan_terrain.png', 'rob_crops.png'];
}
