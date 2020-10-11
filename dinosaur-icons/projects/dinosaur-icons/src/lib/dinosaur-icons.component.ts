import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import { dinosaurIcons } from './dinosaur-icons';

@Component({
  selector: 'lib-dinosaur-icons',
  template: ` <ng-content></ng-content>`,
  styles: [':host::ng-deep svg{width: 50px; height: 50px}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DinosaurIconsComponent {
  @Input()
  set name(iconName: string) {
    const svgData = dinosaurIcons[iconName] || null;
    this.svgIcon = this.svgElementFromString(svgData);;
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  private svgIcon: SVGElement;

  constructor(private element: ElementRef, @Optional() @Inject(DOCUMENT) private document: any) {}

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
}
}
