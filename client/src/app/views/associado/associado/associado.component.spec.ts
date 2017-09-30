import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociadoComponent } from './associado.component';

describe('AssociadoComponent', () => {
  let component: AssociadoComponent;
  let fixture: ComponentFixture<AssociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
