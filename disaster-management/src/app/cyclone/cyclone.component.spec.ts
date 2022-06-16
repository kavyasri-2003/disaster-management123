import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycloneComponent } from './cyclone.component';

describe('CycloneComponent', () => {
  let component: CycloneComponent;
  let fixture: ComponentFixture<CycloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CycloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CycloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
