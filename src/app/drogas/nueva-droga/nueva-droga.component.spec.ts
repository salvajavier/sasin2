import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaDrogaComponent } from './nueva-droga.component';

describe('NuevaDrogaComponent', () => {
  let component: NuevaDrogaComponent;
  let fixture: ComponentFixture<NuevaDrogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaDrogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaDrogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
