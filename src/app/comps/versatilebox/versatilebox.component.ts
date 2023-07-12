import { Component, Input } from '@angular/core';
import { paraSpec } from 'src/data/utils.rtl';

@Component({
  selector: 'app-versatilebox',
  templateUrl: './versatilebox.component.html',
  styleUrls: ['./versatilebox.component.css']
})
export class VersatileboxComponent {
  @Input() group!:{
    title?:string;
    paragraphs:paraSpec[]
  };
}
