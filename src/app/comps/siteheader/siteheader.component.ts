import { Component } from '@angular/core';
import { headerData, headerSpec } from 'src/data/common.rtl';

@Component({
  selector: 'app-siteheader',
  templateUrl: './siteheader.component.html',
  styleUrls: ['./siteheader.component.css']
})
export class SiteheaderComponent {
  data:headerSpec = headerData;
}
