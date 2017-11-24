import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationAssociadoComponent } from './activation-associado.component';

describe('ActivationAssociadoComponent', () => {
  let component: ActivationAssociadoComponent;
  let fixture: ComponentFixture<ActivationAssociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationAssociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationAssociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
