import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressaoChequinhoComponent } from './impressao-chequinho.component';

describe('ImpressaoChequinhoComponent', () => {
  let component: ImpressaoChequinhoComponent;
  let fixture: ComponentFixture<ImpressaoChequinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressaoChequinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressaoChequinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
