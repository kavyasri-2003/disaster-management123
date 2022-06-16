import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TornadoeComponent } from './tornadoe.component';

describe('TornadoeComponent', () => {
  let component: TornadoeComponent;
  let fixture: ComponentFixture<TornadoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TornadoeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TornadoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
