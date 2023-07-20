import { Component } from '@angular/core';
import { homepageData } from 'src/data/homepage';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  data = homepageData;
}
