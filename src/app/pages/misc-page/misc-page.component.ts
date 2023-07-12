import { Component } from '@angular/core';
import { miscData, othersSpec } from 'src/data/miscdata.rtl';
import { VersatilePageSpec } from 'src/data/utils.rtl';

@Component({
  selector: 'app-misc-page',
  templateUrl: './misc-page.component.html',
  styleUrls: ['./misc-page.component.css']
})
export class MiscPageComponent {
  allData:othersSpec = miscData;
  data:VersatilePageSpec = {
    title:`Loading`,
    groups:[]
  }
  ngOnInit(){
    let parts = (window.location.href).split('/')
    let key = parts[parts.length-1]
    this.data = this.allData[key]
  }
}
