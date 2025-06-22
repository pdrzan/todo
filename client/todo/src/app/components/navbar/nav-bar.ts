import { Component } from '@angular/core';
import { LinkButton } from '../link-button/link-button';

@Component({
  selector: 'nav-bar',
  imports: [LinkButton],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
}
