import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsunamiComponent } from './tsunami.component';

describe('TsunamiComponent', () => {
  let component: TsunamiComponent;
  let fixture: ComponentFixture<TsunamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsunamiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsunamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
