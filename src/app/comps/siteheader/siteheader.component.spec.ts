import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteheaderComponent } from './siteheader.component';

describe('SiteheaderComponent', () => {
  let component: SiteheaderComponent;
  let fixture: ComponentFixture<SiteheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
