import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequinhoComponent } from './chequinho.component';

describe('ChequinhoComponent', () => {
  let component: ChequinhoComponent;
  let fixture: ComponentFixture<ChequinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
