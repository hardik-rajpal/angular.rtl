import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersatilePageComponent } from './versatile-page.component';

describe('VersatilePageComponent', () => {
  let component: VersatilePageComponent;
  let fixture: ComponentFixture<VersatilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersatilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersatilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
