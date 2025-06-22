import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'link-button',
  imports: [CommonModule],
  templateUrl: './link-button.html',
  styleUrl: './link-button.css',
})
export class LinkButton {
  @Input()
  title: string = "";

  @Input()
  href: string = "";

  @Input()
  icon_path: string = "";

  constructor() {
  }
}
