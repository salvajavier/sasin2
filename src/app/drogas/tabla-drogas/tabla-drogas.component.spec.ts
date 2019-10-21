import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDrogasComponent } from './tabla-drogas.component';

describe('TablaDrogasComponent', () => {
  let component: TablaDrogasComponent;
  let fixture: ComponentFixture<TablaDrogasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaDrogasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaDrogasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
