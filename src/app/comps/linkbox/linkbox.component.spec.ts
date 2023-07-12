import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkboxComponent } from './linkbox.component';

describe('LinkboxComponent', () => {
  let component: LinkboxComponent;
  let fixture: ComponentFixture<LinkboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
