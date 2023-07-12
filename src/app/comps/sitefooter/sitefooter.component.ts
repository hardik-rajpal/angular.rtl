import { Component } from '@angular/core';
import { footerData } from 'src/data/common.rtl';

@Component({
  selector: 'app-sitefooter',
  templateUrl: './sitefooter.component.html',
  styleUrls: ['./sitefooter.component.css']
})
export class SitefooterComponent {
  data = footerData;
}
