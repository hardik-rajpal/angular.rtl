import { Component, Input } from '@angular/core';
import { paraSpec } from 'src/data/utils.rtl';

@Component({
  selector: 'app-flashbox',
  templateUrl: './flashbox.component.html',
  styleUrls: ['./flashbox.component.css']
})
export class FlashboxComponent {
  @Input() title?:string;
  @Input() paras?:paraSpec[];
  @Input() innerHTML?:string;
  @Input() width?:string;
  styleStr:string = '';
  
}
