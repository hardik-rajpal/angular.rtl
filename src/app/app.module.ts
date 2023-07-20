import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaceholderPageComponent } from './pages/placeholder-page/placeholder-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ParaspecboxComponent } from './comps/paraspecbox/paraspecbox.component';
import { FlashboxComponent } from './comps/flashbox/flashbox.component';
import { VersatileboxComponent } from './comps/versatilebox/versatilebox.component';
import { MiscPageComponent } from './pages/misc-page/misc-page.component';
import { SitefooterComponent } from './comps/sitefooter/sitefooter.component';
import { SiteheaderComponent } from './comps/siteheader/siteheader.component';
import { LinkboxComponent } from './comps/linkbox/linkbox.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { SafePipe } from './safe.pipe';
import { VersatilePageComponent } from './comps/versatile-page/versatile-page.component';
import { HomePageComponent } from './comps/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ParaspecboxComponent,
    FlashboxComponent,
    VersatileboxComponent,
    PlaceholderPageComponent,
    MiscPageComponent,
    SitefooterComponent,
    SiteheaderComponent,
    LinkboxComponent,
    NavbarComponent,
    SafePipe,
    VersatilePageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
