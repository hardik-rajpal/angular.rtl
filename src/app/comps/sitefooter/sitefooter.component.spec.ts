import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitefooterComponent } from './sitefooter.component';

describe('SitefooterComponent', () => {
  let component: SitefooterComponent;
  let fixture: ComponentFixture<SitefooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitefooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
