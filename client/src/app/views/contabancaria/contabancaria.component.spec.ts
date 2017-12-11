import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContabancariaComponent } from './contabancaria.component';

describe('ContabancariaComponent', () => {
  let component: ContabancariaComponent;
  let fixture: ComponentFixture<ContabancariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContabancariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContabancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
