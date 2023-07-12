import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashboxComponent } from './flashbox.component';

describe('FlashboxComponent', () => {
  let component: FlashboxComponent;
  let fixture: ComponentFixture<FlashboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
