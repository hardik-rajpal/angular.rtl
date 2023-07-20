import { Component, Input } from '@angular/core';
import { VersatilePageSpec } from 'src/data/utils.rtl';

@Component({
  selector: 'app-versatile-page',
  templateUrl: './versatile-page.component.html',
  styleUrls: ['./versatile-page.component.css']
})
export class VersatilePageComponent {
  @Input() data!:VersatilePageSpec;
}
