import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-side-nav',
  imports: [MatIconModule, RouterOutlet, MatSidenavModule, MatListModule, RouterLink, MatExpansionModule, CommonModule],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss',
})

export class SideNav {
  galleryOpen = false;

  toggleGallery() {
  this.galleryOpen = !this.galleryOpen;
}
}
