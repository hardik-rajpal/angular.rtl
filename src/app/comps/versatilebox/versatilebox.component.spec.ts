import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersatileboxComponent } from './versatilebox.component';

describe('VersatileboxComponent', () => {
  let component: VersatileboxComponent;
  let fixture: ComponentFixture<VersatileboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersatileboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersatileboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
