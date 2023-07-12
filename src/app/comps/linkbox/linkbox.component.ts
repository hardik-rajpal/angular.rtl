import { Component, Input, OnInit } from '@angular/core';
import { linkSpec } from 'src/data/utils.rtl';

@Component({
  selector: 'app-linkbox',
  templateUrl: './linkbox.component.html',
  styleUrls: ['./linkbox.component.css']
})
export class LinkboxComponent implements OnInit {
  @Input() link!:linkSpec;
  iconCode:string='';
  isRouterLink:boolean = false;
  internalLinkRegex = /^[a-zA-Z0-9/]+$/;
  setIconClass(){
    let iconClass = '';
    if(this.link.type){
      switch(this.link.type.toLowerCase()){
        case 'facebook':
          iconClass = 'fa-brands fa-facebook'
          break
        case 'twitter':
          iconClass = 'fa-brands fa-twitter';
          break;
        case 'email':
          iconClass = 'fa fa-envelope';
          break;
      }
      if(iconClass.length>0){
        this.iconCode = `<i class="${iconClass}"></i>`
      }
    }
  }
  ngOnInit(): void {
    this.setIconClass();
    if(this.internalLinkRegex.test(this.link.target)){
      this.isRouterLink = true;
    }
  }

}
