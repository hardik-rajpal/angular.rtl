import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaspecboxComponent } from './paraspecbox.component';

describe('ParaspecboxComponent', () => {
  let component: ParaspecboxComponent;
  let fixture: ComponentFixture<ParaspecboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaspecboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParaspecboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
