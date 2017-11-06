import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoContaComponent } from './plano-conta.component';

describe('PlanoContaComponent', () => {
  let component: PlanoContaComponent;
  let fixture: ComponentFixture<PlanoContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
