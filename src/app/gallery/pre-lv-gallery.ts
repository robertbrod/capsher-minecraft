import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-prelvgallery',
  imports: [MatCardModule, CarouselComponent],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class preLVGallery {
  projectImages = [
    { src: 'andy_0.png', caption: 'Steam Age Base', submitter: 'Andy' },
    { src: 'andy_1.png', caption: 'Quad BBF and Steel Multimacerator', submitter: 'Andy' },

    { src: 'ethan_0.png', caption: 'Whimsical Grove', submitter: 'Ethan' },
    { src: 'ethan_1.png', caption: 'Whimsical Tank', submitter: 'Ethan' },

    { src: 'jd_1.png', caption: 'Castle Foundations', submitter: 'JD' },

    { src: 'josh_1.png', caption: 'My beta house because im a beta', submitter: 'Josh' },

    { src: 'nicholas_1.png', caption: 'Sugarcane by the river', submitter: 'Nicholas' },
    { src: 'nicholas_2.png', caption: 'Serene cabin', submitter: 'Nicholas' },
    { src: 'nicholas_3.png', caption: 'Tank and steam', submitter: 'Nicholas' },

    { src: 'rob_1.png', caption: 'Nether Highway', submitter: 'Rob' },
    { src: 'rob_7.png', caption: 'Basement', submitter: 'Rob' },
    { src: 'rob_8.png', caption: 'Crops', submitter: 'Rob' },

    { src: 'travis_1.webp', caption: 'Fire disaster', submitter: 'Travis' },

    { src: 'tripper_1.png', caption: 'Cursed Liquid Zone', submitter: 'Tripper' },
  ];
}
