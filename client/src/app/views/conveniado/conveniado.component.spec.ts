import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveniadoComponent } from './conveniado.component';

describe('ConveniadoComponent', () => {
  let component: ConveniadoComponent;
  let fixture: ComponentFixture<ConveniadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConveniadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveniadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
