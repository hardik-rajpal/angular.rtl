import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscPageComponent } from './misc-page.component';

describe('MiscPageComponent', () => {
  let component: MiscPageComponent;
  let fixture: ComponentFixture<MiscPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiscPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
